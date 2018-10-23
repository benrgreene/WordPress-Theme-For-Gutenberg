import './menu.js'
// import 'search.js'

const siteHeader  = document.querySelectorAll('.site-header')[0]
const siteContent = document.querySelectorAll('.site-content')[0]

// Basic theme setup
document.addEventListener("DOMContentLoaded", (event) => {
  // Need to set the top padding of the content to match the size of the header
  setTimeout(function() {
    let padding     = document.querySelectorAll('.site-header')[0].clientHeight
    let siteContent = document.querySelectorAll('.site-content')[0]
    let newStyle    = document.createElement('div')
    newStyle.innerHTML = `<style>.site-content.fixed { padding-top: ${padding}px }</style>`
    document.body.appendChild(newStyle)
  }, 10)

  // Setup for the container block attributes
  const allContainerBlocks = document.querySelectorAll('.page-content > *')
  allContainerBlocks.forEach((block) => {
    let containerType = block.getAttribute('container') || 'full-width'
    block.classList.add(containerType)
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
  }
}