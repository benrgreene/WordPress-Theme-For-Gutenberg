const dom = {
  feedSource: 'data-feed-url',
  feed: 'data-podcast-feed',
  pagination: 'data-podcast-pagination',
  pageOn: 'data-page-on',
  previous: 'data-pagination-previous',
  next: 'data-pagination-next',
  numberPages: 'data-number-pages',
  displayPage: 'data-display-page',
};

const loadPageOfResults = (feedData, pageNumber, perPage) => {
  // get the specific episodes to display
  const start = pageNumber * perPage;
  const end = start + perPage;
  const episodes = feedData.slice(start, end);
  // reset wrapper
  const episodeWrapper = document.querySelector(`[${dom.feed}]`);
  episodeWrapper.setAttribute(dom.pageOn, pageNumber);
  episodeWrapper.innerHTML = '';
  // build the episodes to display
  episodes.forEach((episode) => {
    const episodeEl = document.createElement('div');
    episodeEl.classList.add('episode');
    // get the data for the episode
    const URL = episode.querySelector('enclosure').getAttribute('url');
    const title = episode.querySelector('title').innerHTML;
    // build markup
    episodeEl.innerHTML = `
      <h3 class="episode__title">${title}</h3>
      <audio class="episode__player" controls><source src="${URL}"></audio>`;
    episodeWrapper.appendChild(episodeEl);
  });
  setPagination(pageNumber, feedData.length, perPage);
};

const setPagination = (pageNumber, numberItems, perPage) => {
  const prevButton = document.querySelector(`[${dom.previous}]`);
  const nextButton = document.querySelector(`[${dom.next}]`);

  prevButton.removeAttribute('disabled');
  nextButton.removeAttribute('disabled');

  if (pageNumber <= 0) {
    prevButton.setAttribute('disabled', true);
  } else if (numberItems <= perPage * pageNumber + perPage) {
    nextButton.setAttribute('disabled', true);
  }
};

const buildButton = (episodes, label, attribute, perPage, counter) => {
  const button = document.createElement('button');
  button.classList.add('pagination__button');
  button.setAttribute(attribute, true);
  button.innerHTML = label;
  button.addEventListener('click', () => {
    const episodeWrapper = document.querySelector(`[${dom.feed}]`);
    const pageOn = parseInt(episodeWrapper.getAttribute(dom.pageOn), 10);
    loadPageOfResults(episodes, pageOn + counter, perPage);
  });
  return button;
};

const buildPagination = (episodes, perPage) => {
  const paginationWrapper = document.querySelector(`[${dom.pagination}]`);
  const prev = buildButton(episodes, 'Previous', dom.previous, perPage, -1);
  const next = buildButton(episodes, 'Next', dom.next, perPage, 1);
  const pageOn = document.createElement('div');
  pageOn.innerHTML = `<span ${dom.displayPage}>1</span> <span ${dom.numberPages}>${Math.ceil(episodes.length / perPage)}</span>`;
  paginationWrapper.appendChild(prev);
  paginationWrapper.appendChild(pageOn);
  paginationWrapper.appendChild(next);
};

document.addEventListener('DOMContentLoaded', () => {
  const feed = document.querySelector(`[${dom.feedSource}]`) || false;
  if (!feed) return;
  const perPage = parseInt(feed.getAttribute('data-per-page'), 10);
  fetch(feed.getAttribute(dom.feedSource))
    .then((blob) => blob.text())
    .then((document) => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(document, "application/xml");
      const episodes = [...dom.querySelectorAll('item')];
      buildPagination(episodes, perPage);
      loadPageOfResults(episodes, 0, perPage);
    });
});