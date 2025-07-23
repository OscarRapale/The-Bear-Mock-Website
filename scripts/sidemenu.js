// Sidenav controllers

let sidenav = document.getElementById("sidenav");
let menuIcon = document.getElementById("menu-icon");
let closeBtn = document.getElementById("close-btn");

function openNav () {
    sidenav.style.width = "300px";
}

function closeNav() {
    sidenav.style.width = "0";
}

menuIcon.addEventListener("click", function () {
    openNav();
});

closeBtn.addEventListener("click", function () {
    closeNav();
}); 
