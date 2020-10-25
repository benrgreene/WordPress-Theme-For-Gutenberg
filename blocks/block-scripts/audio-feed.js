const { registerBlockType} = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType(
  'brg/podcast-feed',
  {
    title: 'Podcast Feed',
    description: 'Adds an podcast feed',
    category: 'layout',
    icon: 'controls-volumeon',
    edit({attributes, className, setAttributes}) { 
      return (
        <div className="editor--sidebar-block" style={{backgroundColor: '#FBFBFB'}}>
          Podcast Feed
        </div>
      );
    },
    save({attributes}) {
      return (
        <div>
          <div data-podcast-feed></div>
          <div data-podcast-pagination></div>
        </div>
      );
    }
  }
);