const { registerBlockType} = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType(
  'brg/sidebar-block',
  {
    title: 'Sidebar Block',
    description: 'Adds the page sidebar to the side of the block',
    category: 'layout',
    icon: 'format-image',
    edit({attributes, className, setAttributes}) { 
      return (
        <div className="editor--sidebar-block" style={{backgroundColor: '#F4F4F4'}}>
          <InnerBlocks />
        </div>
      );
    },
    save({attributes}) {
      return (
        <div className="sidebar-block">
          <div className="sidebar-block__content">
            <InnerBlocks.Content />
          </div>
          [display_sidebar classes="sidebar-block__sidebar"]
        </div>
      );
    }
  }
);