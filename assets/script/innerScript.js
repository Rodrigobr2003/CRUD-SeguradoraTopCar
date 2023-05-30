let conjuntoBotoes = document.querySelectorAll('.botao')

import {trocaTela}  from "./script.js";

conjuntoBotoes.forEach(function(innerBtn) {
    innerBtn.addEventListener('click', function() {
        trocaTela(innerBtn)
    })
});