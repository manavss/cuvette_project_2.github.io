const menuicon = document.querySelector('menuIcon');
const menulist = document.querySelector('menuList');

menuicon.onclick = function () {
    menulist.classList.toggle('open')
}