const mobileMenuButton = document.querySelector('.burger-menu-container');
const menu = document.querySelector('.full-menu');

let showMenu = false;
mobileMenuButton.addEventListener('click', () => {
	showMenu = !showMenu;
	menu.style.display = showMenu ? 'none' : 'flex';
});
