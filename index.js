let menuIcon = document.querySelector(".mobile-icon");

menuIcon.addEventListener('click', function(){
    menuIcon.src = "images/icon-close.svg";
    menuIcon.addEventListener('click', ()=> {
        menuIcon.src = "images/icon-hamburger.svg"
    })
   })


