// Som Pom
function tocaSom(idElementAudio) {
   let elemento = document.querySelector(idElementAudio);
    if (elemento === null) {
        console.error('Elemento Não encontrado!');
    }
    if(elemento != null) {
        if (elemento.localName === "audio") {
            elemento.play(); 
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for  (let contador = 0; contador < listaDeTeclas.length; contador+=1) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    

    // Adicionando somente Enter e Espaço para serem utilizados para ativar o estilo do clique
    tecla.onclick = function () {
        tocaSom(`${idAudio}`);
    }

    // Removendo o estilo do clique

    tecla.onkeydown = function (e) {
        if(e.code == "Enter" | "Space") {
        tecla.classList.add('ativa');
        }
    }
    
    // Removendo a classe após soltar a tecla
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
