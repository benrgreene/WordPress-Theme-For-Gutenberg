const { registerBlockType }                = wp.blocks;
const { InspectorControls, BlockControls } = wp.editor;
const { PanelBody }                        = wp.components;

registerBlockType(
  'brg/archive-block',
  {
    title: 'Archive Block',
    description: 'Adds an archive for a post type',
    category: 'layout',
    icon: 'format-image',
    edit({attributes, className, isSelected, setAttributes}) { 
      return [
        <div data-archive>
          Archive container for {attributes['data-post-type']}
        </div>
      ];
    },
    save({attributes}) {
      return (
        <div data-archive>
          <div data-post-wrapper></div>
          <div data-pagination></div>
        </div>
      );
    }
  }
);