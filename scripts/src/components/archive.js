const dom = {
  archive: 'data-archive',
  postType: 'data-post-type',
  perPage: 'data-per-page',
  pagination: 'data-pagination',
  paginationNext: 'data-pagination-next',
  paginationPrev: 'data-pagination-prev',
  postWrapper: 'data-post-wrapper',
};

const setupPagination = (pageOn, perPage, numberPosts) => {
  const numberPages = Math.ceil(numberPosts / perPage);
};

const fetchPage = (type, page, perPage, container) => {
  const postContainer = container.querySelector(`[${dom.postWrapper}]`);
  fetch(`/guten/wp-json/brg/posts/${type}/${perPage}/${page}`)
    .then((blob) => blob.json())
    .then((dataJSON) => {
      const data = JSON.parse(dataJSON);
      container.setAttribute('data-page-on', page);
      postContainer.innerHTML = '';
      data.posts.forEach((post, index) => buildPostTile(post, postContainer, 200 * index));
      setupPagination(page, perPage, data.numberPosts);
    });
};

const buildPostTile = (postJSON, postContainer, delay) => {
  const newArticle = document.createElement('article');
  newArticle.classList.add('post', `post--${postJSON.post_type}`);
  newArticle.innerHTML = `
  <h3 class="post__title">${postJSON.post_title}</h3>
  <div class="post__excerpt">${postJSON.post_excerpt}</div>`;
  setTimeout(() => postContainer.appendChild(newArticle), delay);
};

const getCurrentPage = (container) => {
  return parseInt(container.getAttribute('data-page-on'), 10);
};

const setupBasePagination = (container, postType, perPage) => {
  const paginationWrapper = container.querySelector(`[${dom.pagination}]`);
  
  const prevButton = document.createElement('button');
  prevButton.classList.add('pagination__button');
  prevButton.innerHTML = 'Previous Page';
  prevButton.addEventListener('click', () => {
    const currentPage = getCurrentPage(container);
    fetchPage(postType, currentPage - 1, perPage, container);
  });

  const nextButton = document.createElement('button');
  nextButton.classList.add('pagination__button');
  nextButton.innerHTML = 'Next Page';
  nextButton.addEventListener('click', () => {
    const currentPage = getCurrentPage(container);
    fetchPage(postType, currentPage + 1, perPage, container);
  });

  paginationWrapper.appendChild(prevButton);
  paginationWrapper.appendChild(nextButton);
}

const setupArchiveContainer = (container) => {
  const perPage  = container.getAttribute(dom.perPage);
  const postType = container.getAttribute(dom.postType);
  fetchPage(postType, 0, perPage, container);
  setupBasePagination(container, postType, perPage);
};

const setup = () => {
  const archiveContainers = document.querySelectorAll(`[${dom.archive}]`);
  archiveContainers.forEach(setupArchiveContainer);
}

export default {
  setup,
};