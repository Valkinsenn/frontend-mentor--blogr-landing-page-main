// Clears the console
console.clear()

// DOM Queries
const menuBtn = document.querySelector('.menu-btn')

// Sets the menuOpen variable to false:
let menuOpen = false

// Grabbing the links box by its face

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }
})