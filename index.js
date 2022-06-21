// Toggle Nav Menu

const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')
const headline = document.querySelector('#headline')

menuBtn.addEventListener('click', ()=>{
  menu.style.display = 'flex'
  closeBtn.style.display = 'inline-block'
  menuBtn.style.display = 'none'
  menu.style.zIndex= '10'
  closeBtn.style.zIndex='11'
});

// Close the nav menu
const closeNav = () =>{
  menu.style.display = 'none'
  closeBtn.style.display = 'none'
  menuBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeNav)

function popup(){
  document.querySelector('#popup-1').classList.toggle('active')
}  
