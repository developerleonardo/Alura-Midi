const listaDeTeclas = document.querySelectorAll('.tecla');

const hacerSonido = (idElementoAudio) => {
    document.querySelector(idElementoAudio).play();
}

for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];

    tecla.addEventListener("click", () => {
        hacerSonido(`#sonido_${instrumento}`);
    });
    tecla.addEventListener("keydown", (event) => {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add("activa");
        }
    })
    tecla.addEventListener("keyup", () => {
        tecla.classList.remove("activa");
    })
};