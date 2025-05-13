// JavaScript para o carrossel de imagens
  let indice = 0;
  const slides = document.querySelectorAll(".slide");
  const anterior = document.querySelector(".anterior");
  const proximo = document.querySelector(".proximo");

  function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[i].classList.add("ativo");
  }

  anterior.addEventListener("click", () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
  });

  proximo.addEventListener("click", () => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  });

  mostrarSlide(indice);
