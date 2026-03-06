


let frutas = ["uva", "maçã", "goiaba", "laranja", "pera"]
let listaDeFrutas = ""
frutas.sort()
frutas.unshift("Morango")
for(let i = 0; i < frutas.length;i++){
    if(i < frutas.length -1){
        listaDeFrutas += frutas[i] + ", "
    }else{
        listaDeFrutas += frutas[i]
    }   
}
console.log(listaDeFrutas)