/*15. Um professor tem as notas de 8 alunos .
 Crie dois novos arrays: um com os alunos aprovados (nota >= 6.0) e outro com os reprovados (nota < 6.0).*/
 let notas = [7.5, 4.0, 8.5, 6.0, 9.0, 5.5, 7.0, 3.5]
 let aprovados = []
 let reprovados = []

 for (let i in notas){
    if (notas[i] >= 6.0){
        aprovados.push(notas[i])
    }else{
        reprovados.push(notas[i])
    }
 }
 console.log("Notas dos Aprovados: ", aprovados)
 console.log("Notas dos Reprovados: ", reprovados)