let estado = 0;

function mudarLuz() {
    const luzVermelha = document.getElementById("vermelha");
    const luzLaranja = document.getElementById("laranja");
    const luzAmarela = document.getElementById("amarela");
    const luzVerde = document.getElementById("verde");

    luzVermelha.classList.remove("vermelha");
    luzLaranja.classList.remove("laranja");
    luzAmarela.classList.remove("amarela");
    luzVerde.classList.remove("verde");

    if(estado === 0) {
        luzVermelha.classList.add("vermelha");
        estado = 1;
    } else if (estado === 1) {
        luzLaranja.classList.add("laranja");
        estado = 2;
    } else if (estado === 2) {
        luzAmarela.classList.add("amarela");
        estado = 3;
    } else {
        luzVerde.classList.add("verde");
        estado = 0;
    }
}