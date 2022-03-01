'use strict';
AOS.init();
const documentReady= () =>{
 const headerNavMenuIconContainer=document.getElementById("headerNavMenuIconContainer");
 const headerNavCloseIconContainer=document.getElementById("headerNavCloseIconContainer");

 const headerNavMenuContainer=document.querySelector(".header__nav__menu-container");

 const presedMenuOpen= () =>{
    headerNavMenuContainer.classList.add('header__nav__menu-container--presed');
 }
 const presedMenuclose= () =>{
    headerNavMenuContainer.classList.remove('header__nav__menu-container--presed');
 }


  headerNavMenuIconContainer.addEventListener('click',presedMenuOpen);
  headerNavCloseIconContainer.addEventListener('click',presedMenuclose);
 
}
document.addEventListener('DOMContentLoaded',documentReady);

