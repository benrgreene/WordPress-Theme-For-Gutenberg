import './components/menu.js';

const siteHeader  = document.querySelectorAll('.site-header')[0]
const siteContent = document.querySelectorAll('.site-content')[0]

// Basic theme setup
document.addEventListener("DOMContentLoaded", (event) => {
  // Setup for the container block attributes
  const allContainerBlocks = document.querySelectorAll('.page-content > * + *')
  allContainerBlocks.forEach((block) => {
    let containerType   = block.getAttribute('container') || 'contained'
    let verticalSpacing = block.getAttribute('verticalSpace') || 'spaced'
    switch (containerType) {
      case 'contained':
        block.classList.add('l-contain')
        break
      default:
        block.classList.add('full-width')
        break
    }
    block.classList.add(verticalSpacing)
  })
})
