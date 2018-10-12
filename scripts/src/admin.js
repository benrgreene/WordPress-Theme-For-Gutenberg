const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

/**
 *  Add the custom block control 
 */
const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
  return ( props ) => {
    return (
      <Fragment>
        <BlockEdit { ...props } />
        <InspectorControls>
          <PanelBody>
          Set Layout Type:
            <select onChange = { (event) => {
              props.setAttributes({container: event.target.value });
            }} value={props.attributes.container}>
              <option value="contained">Contained</option>
              <option value="full-width">Full Width</option>
            </select>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withInspectorControl" );
wp.hooks.addFilter('editor.BlockEdit', 'brg-theme/with-inspector-controls', withInspectorControls);


/**
 *  Need to set the container attribute for validation of the block
 */
function setContainerValidation (block, blockType, innerHTML) {
  // set the blocktype info for our new attribute
  blockType.attributes.container = {
    type: 'string',
    default: 'contained'
  }
  // get the current blocks container type
  let dummyEl = document.createElement('div')
  dummyEl.innerHTML = innerHTML
  let blockElement = dummyEl.firstChild
  let containerType = blockElement.getAttribute('container') || false
  // set that container type
  if (containerType) {
    block.container = containerType
  }
  return block
}
wp.hooks.addFilter('blocks.getBlockAttributes', 'brg-theme/validate-container-attributes', setContainerValidation);

/**
 *  Need to set the new attribute value to save
 */
function setContainerAttribute (el, type, atts) {
  el.props.container = atts.container
  return el;
}
wp.hooks.addFilter('blocks.getSaveElement', 'brg-theme/save-container-attributes', setContainerAttribute);