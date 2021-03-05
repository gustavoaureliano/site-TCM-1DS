let darkMode = false;

const btnTheme = document.querySelector('#btnTheme');
const page = document.querySelector("html");

function dark_theme() {page.setAttribute('dark', 'true');}

function light_theme() {page.removeAttribute('dark');}

function change_theme() {

    darkMode = !darkMode
    darkMode == true? dark_theme():light_theme();

    window.localStorage.setItem('darkMode', darkMode);

}

darkMode = (window.localStorage.darkMode === 'true');
darkMode == true? dark_theme():light_theme();

btnTheme.addEventListener("click", change_theme);
