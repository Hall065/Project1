function irParaAndar(andamento) {
    const elevador = document.getElementById('elevador');
    const alturaAndar = 50; // Altura de cada andar, considerando os espaços entre eles

    // Calcula a posição do elevador
    const posicao = andamento * alturaAndar;
    
    // Move o elevador para a posição desejada
    elevador.style.transform = `translateY(-${posicao}px)`;
}
