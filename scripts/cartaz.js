const cartaz = document.querySelector("div.imagens");
let scrollPagina = 0;

function scrollImagens(scroll) {

    let rolagem = 600;

    if (scroll.deltaY > 0) {

        cartaz.scrollLeft += rolagem;

        if (cartaz.scrollLeft + cartaz.clientWidth >= cartaz.scrollWidth - 50) { play_scroll(); }
        
    } else {
        
        cartaz.scrollLeft -= rolagem;

        if (cartaz.scrollLeft - 50 <= 0) { play_scroll(); }

    }

}

function stop_scroll () {

    if (!(cartaz.scrollLeft + cartaz.clientWidth >= cartaz.scrollWidth - 50) | !(cartaz.scrollLeft - 50 <= 0)) {
        document.body.style.overflow = "hidden";
    }

}

function play_scroll () { document.body.style.overflow = "auto"; }

cartaz.addEventListener("wheel", scrollImagens, {passive: true});
cartaz.addEventListener("mouseout", function() {play_scroll()});
cartaz.addEventListener("mouseover", function() {stop_scroll()});