let show = true;

const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn_menu");

const menuItem = document.querySelectorAll("nav li");
const submenu = document.querySelector("nav li ul.submenu");

function ativar_menu() {

    if (window.matchMedia("(max-width: 780px)").matches) {
    
        document.body.style.overflow = show ? "hidden" : "visible";
        
        menu.classList.toggle("on", show);
        show = !show;
        for (var i = 0; i < menuItem.length; i++) {

            menuItem[i].classList.remove('on');

        }

    } 
    
}

function show_submenu(li) {
    
    if (window.matchMedia("(max-width: 780px)").matches) {

        li.target.parentNode.parentNode.classList.toggle("on");
    
    }

}

btnMenu.addEventListener("click", ativar_menu);

for (var i = 0; i < menuItem.length; i++) {

    menuItem[i].addEventListener("click", show_submenu);

}
