const { registerBlockType }                = wp.blocks;
const { InspectorControls, BlockControls } = wp.editor;
const { PanelBody }                        = wp.components;

registerBlockType(
  'brg/archive-block',
  {
    title: 'Archive Block',
    description: 'Adds an archive for a post type',
    category: 'layout',
    icon: 'book-alt',
    edit({attributes, className, isSelected, setAttributes}) { 
      return [
        <div data-archive data-post-type={attributes['data-post-type']} data-per-page={attributes['data-per-page']}>
          <div data-post-wrapper></div>
          <div data-pagination></div>
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