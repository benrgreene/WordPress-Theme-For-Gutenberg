import './menu.js'
// import 'search.js'

// Basic theme setup
document.addEventListener("DOMContentLoaded", (event) => {
  // Need to set the top padding of the content to match the size of the header
  setTimeout(function() {
    let padding = document.querySelectorAll('.site-header')[0].clientHeight;
    let siteContent = document.querySelectorAll('.site-content')[0]
    siteContent.style.paddingTop = `${padding}px`;
  }, 10);
})