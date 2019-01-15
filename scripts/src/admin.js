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
            <div>
              <div>Set Layout Type:</div>
              <select onChange = { (event) => {
                props.setAttributes({container: event.target.value });
              }} value={props.attributes.container}>
                <option value="contained">Contained</option>
                <option value="full-width">Full Width</option>
              </select>
            </div><br/>
            <div> 
              <div>Set Vertical Spacing:</div>
              <select onChange = { (event) => {
                props.setAttributes({verticalSpace: event.target.value });
              }} value={props.attributes.verticalSpace}>
                <option value="spaced">Spaced</option>
                <option value="spaced__double">Double Spacing</option>
                <option value="no-space">No Space</option>
              </select>
            </div>
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
  blockType.attributes.verticalSpace = {
    type: 'string',
    default: 'spaced'
  }
  // get the current blocks container type
  let dummyEl = document.createElement('div')
  dummyEl.innerHTML   = innerHTML
  let blockElement    = dummyEl.firstChild
  let containerType   = blockElement.getAttribute('container') || 'contained'
  let verticalSpacing = blockElement.getAttribute('verticalSpace') || 'spaced'
  // set that container type
  if (containerType) {
    block.container = containerType
  }
  if (verticalSpacing) {
    block.verticalSpace = verticalSpacing
  }
  return block
}
wp.hooks.addFilter('blocks.getBlockAttributes', 'brg-theme/validate-container-attributes', setContainerValidation);

/**
 *  Need to set the new attribute value to save
 */
function setContainerAttribute (el, type, atts) {
  el.props.container = atts.container || 'contained'
  el.props.verticalSpace = atts.verticalSpace || 'spaced'
  return el;
}
wp.hooks.addFilter('blocks.getSaveElement', 'brg-theme/save-container-attributes', setContainerAttribute);