const toggler = document.getElementById('toggler')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

let show = false
function showMenu(){
    if(show){
        menu.style.left = '-100%'
    }
    else{
        menu.style.left = '50%'
    }
    show = !show
}