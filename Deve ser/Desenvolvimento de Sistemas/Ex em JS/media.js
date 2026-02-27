let media, n1, n2, resultado

n1 = Number(prompt("Digite a primeira Nota: "))
n2 = Number(prompt("Digite a segunda Nota: "))

media = (n1 + n2) / 2
  
if(media >= 7){
    resultado = (" Aprovado ")
}else{
    resultado = (" Reprovado!!! ")
}
alert(`Média Final: ${media} - ${resultado}`)