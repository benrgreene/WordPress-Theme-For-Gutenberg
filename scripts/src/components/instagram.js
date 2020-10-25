const RSS_FEED = 'https://rss.app/feeds/eeQtLHRwPOVwAsNh.xml';
const dom = {
  feed: 'data-instagram-feed',
};

const setupInstagram = () => {
  fetch(RSS_FEED)
    .then((blob) => blob.text())
    .then((content) => {
      const feedElement = document.querySelector(`[${dom.feed}]`);
      let parser = new DOMParser();
      let doc = parser.parseFromString(content, "application/xml");
      doc.querySelectorAll('item').forEach((item) => {
        const mediaEl = item.querySelector('[medium="image"]');
        const titleEl = item.querySelector('title');

        const imageURL = mediaEl.getAttribute('url');
        const image = document.createElement('img');
        image.setAttribute('src', imageURL);
        image.setAttribute('alt', titleEl.textContent);
        feedElement.appendChild(image);
      });
    });
};

document.addEventListener('DOMContentLoaded', setupInstagram);