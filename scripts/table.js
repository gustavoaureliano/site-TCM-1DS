const caption = document.querySelectorAll(".char caption");

function mudar_tabela(n) {
    
    n.target.parentElement.classList.toggle('off');
    
}

for (var i = 0; i < caption.length; i++) {

    caption[i].addEventListener("click", mudar_tabela);

}