let title = document.getElementById("Butao")
let mudar = true 
function mudarcor(){
    if (mudar == true ){
        title.style.color = "blue"
        mudar = false
    } else {
        title.style.color = "red"
        mudar = true
    }

}