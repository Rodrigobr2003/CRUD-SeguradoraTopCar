const section = document.querySelector('#section')
let css = undefined

//#region CRIA ARQUIVO CSS
function criarCss(idPag) {
    let xhr = new XMLHttpRequest()
    let arquivo = idPag;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            if (!css) {
                css = document.createElement('link')
                css.rel = 'stylesheet'
                css.href = xhr.responseURL
                document.head.appendChild(css)
            }

            let cssRemoval = document.querySelector('.apagarCss')

            if (cssRemoval) {
                cssRemoval.remove()
            }

            let conteudoCss = document.createElement('link')
            conteudoCss.rel = 'stylesheet'
            conteudoCss.href = `assets/css/${arquivo}.css`
            conteudoCss.classList.add('apagarCss')
            document.head.appendChild(conteudoCss)

        }
    }
    xhr.open("GET", "assets/css/header.css")
    xhr.send()
}
//#endregion

//#region WINDOW LOAD
window.addEventListener('load', function (params) {
    let id = 'conteudo'
    criarCss(id)
})
//#endregion

//#region CARREGA AUTOMATICAMENTE O CONTEUDO DE HOME
document.addEventListener("DOMContentLoaded", function () {
    let url = 'conteudo.html'
    
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            section.innerHTML = xhr.response
        }
    }
    xhr.open("GET", url)
    xhr.send()
});
//#endregion

//#region MUDANÇA DE PÁGINAS
let botoes = document.querySelectorAll('.linkNav')

botoes.forEach(botao => {

    botao.addEventListener('click', function() {
        let btnId = botao.id

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                section.innerHTML = xhr.response
            }
        }
        xhr.open('GET', `${btnId}.html`)
        xhr.send()

        criarCss(btnId)
    })
    
});
//#endregion
