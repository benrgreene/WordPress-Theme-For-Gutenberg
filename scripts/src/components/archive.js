const dom = {
  archive: 'data-archive',
  postType: 'data-post-type',
  perPage: 'data-per-page',
  pagination: 'data-pagination',
  postWrapper: 'data-post-wrapper',
};

const setupPagination = (data) => {
  const paginationWrapper = document.querySelector(`[${dom.pagination}]`);
  const base = `${window.location.origin}/${window.location.pathname}`;
  const previousPage = `<a href="${base}?page-on=${data.previous}" class="pagination__link">Previous Page</a>`;
  const nextPage = `<a href="${base}?page-on=${data.next}" class="pagination__link">Next Page</a>`;
  
  paginationWrapper.innerHTML = `<div class="pagination">
    ${ data.previous ? previousPage : '' }
    ${ data.next ? nextPage : '' }
  </div>`;
};

const fetchPage = (type, page, perPage, container) => {
  const postContainer = container.querySelector(`[${dom.postWrapper}]`);
  const pageOn = parseInt(page, 10) - 1;
  fetch(`/guten/wp-json/brg/posts/${type}/${perPage}/${pageOn}`)
    .then((blob) => blob.json())
    .then((dataJSON) => {
      const data = JSON.parse(dataJSON);
      postContainer.innerHTML = '';
      data.posts.forEach((post, index) => buildPostTile(post, postContainer, 200 * index));
      setupPagination(data);
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

const setupArchiveContainer = (container) => {
  const perPage  = container.getAttribute(dom.perPage);
  const postType = container.getAttribute(dom.postType);
  const pageOn   = window.themeData.blogPage || 1;
  fetchPage(postType, pageOn, perPage, container);
};

const setup = () => {
  const archiveContainers = document.querySelectorAll(`[${dom.archive}]`);
  archiveContainers.forEach(setupArchiveContainer);
}

export default {
  setup,
};