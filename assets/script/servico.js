let botoes = document.querySelectorAll('.botao')

import { carregaArquivo } from ".//script.js";
import { criarJs } from ".//script.js";

botoes.forEach((botao) => {
    botao.addEventListener('click', function() {
        let arquivo = botao.id
        carregaArquivo(arquivo)
    })
})