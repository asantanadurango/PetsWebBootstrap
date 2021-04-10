const gallery = document.getElementById('gallery')
const modal =  document.getElementById('modalGallery')

gallery.addEventListener('click', (e)=>
{
	if (e.target.classList.contains('gallery__imgBox-Y') || e.target.classList.contains('gallery__imgBox-X') ) 
	{
		modal.children[0].src = e.target.children[0].src
		setModal()
	}

	if (e.target.localName=='img') 
	{
		modal.children[0].src = e.target.src
		setModal()
	}
})

modal.addEventListener('click', (e)=>
{
	if (e.target.id =='modalGallery')
	{
		setModal()
	}

	if (e.target.localName == 'img')
	{
		setModal()
	}
})

const setModal = () => {
	modal.classList.toggle('showImage')
	modal.children[0].classList.toggle('scale')
}




const toggleMenu = document.getElementById('toggle-menu')
const navbarList = document.getElementById('navbar-list')
const logo = document.getElementById('logo')


toggleMenu.addEventListener('click', (e)=>{
	if (e.target.id=='toggle-menu' || e.target.parentElement.id=='toggle-menu')
	{
		showMenuAndchangeBar()
	}
})

navbarList.addEventListener('click', (e)=>{
	if (e.target.parentElement.id == 'navbar-list' || e.target.parentElement.classList.contains('navbar__li')) 
	{
		showMenuAndchangeBar()
	}
})

logo.addEventListener('click', (e)=>{
	if (navbarList.classList.contains('showMenu')) 
	{
		showMenuAndchangeBar()
	}
})

const showMenuAndchangeBar = () => {
	navbarList.classList.toggle('showMenu')
	toggleMenu.children[0].classList.toggle('changeBar')
}

const mainHeader = document.getElementById('main-header')
const heigthHeader= mainHeader.offsetTop

addEventListener('scroll', ()=>{
	if (pageYOffset > heigthHeader) {
		mainHeader.classList.add('changeBgNavbar')
	} else {
		mainHeader.classList.remove('changeBgNavbar')
	}
})




const prev = document.getElementById('prev')
const next = document.getElementById('next')
const images = Array.from(document.querySelectorAll('.slider__img'))
const texts = Array.from(document.querySelectorAll('.slider__text'))
let cont = 0

prev.addEventListener('click', ()=>{
	if(cont==0) cont = images.length - 1
	else cont--
	changeImg()
})

next.addEventListener('click', ()=>{
	if(cont == texts.length - 1) cont = 0 
	else cont++ 
	changeImg()
})

const changeImg = ()=>{
	images.map(image=>image.classList.remove('changeImg'))
	texts.map(text=>text.classList.remove('changeImg'))
	images[cont].classList.add('changeImg')
	texts[cont].classList.add('changeImg')
}

