const {createHigherOrderComponent} = wp.compose;
const {Fragment}                   = wp.element;
const {InspectorControls}          = wp.editor;
const {PanelBody, ColorPalette}    = wp.components;

/**
 *  Add the custom block control 
 */
const withInspectorControls = createHigherOrderComponent(( BlockEdit ) => {
  return (props) => {
    if (props.name == 'brg/archive-block') {
      return (
        <Fragment>
          <BlockEdit {...props} />
          <InspectorControls>
            <PanelBody>
              <div>
                <div><label for="post-type">Post Type</label></div>
                <div>
                  <select onChange={(event) => {
                            props.setAttributes({'data-post-type': event.target.value})
                          }} 
                          id="post-type" 
                          value={ props.attributes['data-post-type']}>
                    <option value="post">Post</option>
                  </select>
                </div>
              </div>
              <hr/>
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
  if (blockType.name == 'brg/archive-block') {
    let dummyEl       = document.createElement('div');
    dummyEl.innerHTML = innerHTML;
    let blockElement  = dummyEl.firstChild;

    const blockTypeAttributes = [
      { 'name': 'data-post-type', 'type': 'string' },
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
  if (block.name == 'brg/archive-block') {
    const attributeTypes = [
      { 'name': 'data-post-type', 'default': 'post' },
      { 'name': 'data-per-page', 'default': 10 },
    ];

    // Ensure that if attribute exists, it's set/saved
    attributeTypes.forEach((attributeType) => {
      el.props[attributeType.name] = atts[attributeType.name] || attributeType.default;
    });
  }
  return el;
}
wp.hooks.addFilter('blocks.getSaveElement', 'brg-archive-block/save-container-attributes', setContainerAttribute);