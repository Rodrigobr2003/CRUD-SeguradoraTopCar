window.onload = function(){
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let css = document.createElement('link')
            css.rel = 'stylesheet'
            css.href = xhr.responseURL
            document.head.appendChild(css)

            let conteudoCss = document.createElement('link')
            conteudoCss.rel = 'stylesheet'
            conteudoCss.href = 'assets/css/index.css'
            document.head.appendChild(conteudoCss)

        }
    }
    xhr.open("GET", "assets/css/header.css")
    xhr.send()
}

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('#section')
    let url = 'conteudo.html'
    
    let teste = document.createElement('p')
    teste.innerHTML = 'aaa'
    section.appendChild(teste)
});