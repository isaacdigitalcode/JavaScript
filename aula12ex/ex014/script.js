
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    
    msg.innerHTML = `<p><strong>Agora são ${hora} horas.</strong></p>`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#baa689'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#a15a28'
    } else {
        //BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1e3033'
    }
}