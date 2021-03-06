const {createHigherOrderComponent} = wp.compose;
const {Fragment}                   = wp.element;
const {InspectorControls}          = wp.editor;
const {PanelBody, ColorPalette}    = wp.components;

/**
 *  Add the custom block control 
 */
const withInspectorControls = createHigherOrderComponent(( BlockEdit ) => {
  return (props) => {
    if (props.name == 'brg/podcast-feed') {
      return (
        <Fragment>
          <BlockEdit {...props} />
          <InspectorControls>
            <PanelBody>
              <div>
                <div><label for="feed-url">Feed URL</label></div>
                <div>
                  <input onChange={(event) => {
                          props.setAttributes({'data-feed-url': event.target.value})
                       }} 
                       type="text" 
                       id="feed-url" 
                       value={props.attributes['data-feed-url'] || ''}/>
                </div>
              </div>
              <div><label for="number-per-page">Number Per Page</label></div>
              <div>
                <input onChange={(event) => {
                          props.setAttributes({'data-per-page': event.target.value})
                       }} 
                       type="number" 
                       id="number-per-page" 
                       value={props.attributes['data-per-page'] || 10}/>
              </div>
            </PanelBody>
          </InspectorControls>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <BlockEdit { ...props } />
        </Fragment>
      )
    }
  }
}, "withInspectorControl" )
wp.hooks.addFilter('editor.BlockEdit', 'brg/archive-block/with-inspector-controls', withInspectorControls);

/**
 *  Need to set the container attribute for validation of the block
 */
function setContainerValidation (block, blockType, innerHTML) {
  if (blockType.name == 'brg/podcast-feed') {
    let dummyEl       = document.createElement('div');
    dummyEl.innerHTML = innerHTML;
    let blockElement  = dummyEl.firstChild;

    const blockTypeAttributes = [
      { 'name': 'data-feed-url', 'type': 'string' },
      { 'name': 'data-per-page', 'type': 'number' },
    ];

    // loop through the attributes and perform individual setup for each
    blockTypeAttributes.forEach((blockAttribute) => {
      // Add setting type to the validation settings
      blockType.attributes[blockAttribute.name] = {
        type: blockAttribute.type,
        default: '',
      };
      // If there is a value for the setting, add it to the block settings
      let existingAttributeValue = blockElement.getAttribute(blockAttribute.name)
      if (existingAttributeValue) {
        block[blockAttribute.name] = existingAttributeValue;
      }
    })
  }
  return block;
}
wp.hooks.addFilter('blocks.getBlockAttributes', 'brg-archive-block/validate-container-attributes', setContainerValidation);

/**
 *  Need to set the new attribute value to save
 */
function setContainerAttribute (el, block, atts) {
  if (block.name == 'brg/podcast-feed') {
    const attributeTypes = [
      { 'name': 'data-feed-url', 'default': 'post' },
      { 'name': 'data-per-page', 'default': 10 },
    ];

    // Ensure that if attribute exists, it's set/saved
    attributeTypes.forEach((attributeType) => {
      el.props[attributeType.name] = atts[attributeType.name] || attributeType.default;
    });
  }
  return el;
}
wp.hooks.addFilter('blocks.getSaveElement', 'brg-podcast-feed/save-container-attributes', setContainerAttribute);