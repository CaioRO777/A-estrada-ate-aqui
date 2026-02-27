function hide(){
    let disp = document.getElementById('disp').style.display

    if(disp == "none") {
        document.getElementById('disp').style.display = 'block';
    } else {
        document.getElementById('disp').style.display = 'none'
    }
}