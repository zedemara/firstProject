const hamMenu = document.querySelector('#mobile_menu');
const navMenu = document.querySelector('.navbar_menu');

const dropDown = () => {
navMenu.classList.toggle("active");
hamMenu.classList.toggle("isActive");
}


hamMenu.addEventListener("click", dropDown);