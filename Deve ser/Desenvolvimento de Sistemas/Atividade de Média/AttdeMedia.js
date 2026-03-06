let n1, n2, n3, media, resultado
function calculaMedia(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    n3 = Number(document.getElementById('n3').value)
    media = (n1 + n2 + n3) / 3
    if(media >= 7){
        resultado = "APROVADO"
    }else{
        resultado = "REPROVADO"
    }
    document.getElementById('media').value = media.toFixed(1)
    document.getElementById('media').hidden = false
    document.getElementById('result').innerHTML = resultado
}