import './menu.js'
// import 'search.js'

const siteHeader  = document.querySelectorAll('.site-header')[0]
const siteContent = document.querySelectorAll('.site-content')[0]

// Basic theme setup
document.addEventListener("DOMContentLoaded", (event) => {
  // Setup for the container block attributes
  const allContainerBlocks = document.querySelectorAll('.page-content > *')
  allContainerBlocks.forEach((block) => {
    let containerType = block.getAttribute('container') || 'contained'
    switch (containerType) {
      case 'contained':
        block.classList.add('l-contain')
        break
      default:
        block.classList.add('full-width')
        break
    }
  })

  // Now let's check if the page loaded NOT at the top (reload or something)
  checkScrollPosition()
})

// On scroll, we'll check if we need to set the header to be sticky or not
document.addEventListener("scroll", (event) => {
  checkScrollPosition()
})

// check where the page is at and if the site header should be sticky
function checkScrollPosition() {
  let scrollPos = document.documentElement.scrollTop
  if (5 > scrollPos) {
    siteHeader.classList.remove('fixed')
    siteContent.classList.remove('fixed')
  } else {
    siteHeader.classList.add('fixed')
    siteContent.classList.add('fixed')
    setHeaderPadding()
  }
}

function setHeaderPadding() {
  let padding     = document.querySelectorAll('.site-header')[0].clientHeight
  let newStyle    = document.createElement('div')
  newStyle.innerHTML = `<style>.site-content.fixed { padding-top: ${padding}px }</style>`
  document.body.appendChild(newStyle)
}