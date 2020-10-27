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
        <div className="editor--sidebar-block" style={{backgroundColor: '#FBFBFB', padding: '10px 4px'}}>
          <div data-feed-url={attributes['data-feed-url']} data-per-page={attributes['data-per-page']}>
            <div data-podcast-feed="true"></div>
            <div data-podcast-pagination="true"></div>
          </div>
        </div>
      );
    },
    save({attributes}) {
      return (
        <div>
          <div data-podcast-feed="true"></div>
          <div data-podcast-pagination="true"></div>
        </div>
      );
    }
  }
);