function verificar() {    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/m-criança.png')
            } else if (idade < 18) {
                //jovem 
                img.setAttribute('src', 'imagens/m-adolecente.png')               
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/m-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/f-criança.png')
            } else if (idade < 21) {
                //jovem]
                img.setAttribute('src', 'imagens/f-adolecente.png')                
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/f-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/f-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)  
    }
}