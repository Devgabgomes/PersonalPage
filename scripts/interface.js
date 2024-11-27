let navResponse = document.getElementsByClassName('navResponse')[0]
const clickMenu1 = () => {
    if(navResponse.style.transform == 'translateX(0%)'){
        navResponse.style.animationName = 'slowRight'
        navResponse.style.transform = 'translateX(100%)'
    } else {
        navResponse.style.display = 'flex'
        navResponse.style.transform = 'translateX(0%)'
        navResponse.style.animationName = 'slowLeft'
    }
}

const clickMenu2 = () => {
    navResponse.style.animationName = 'slowRight'
    navResponse.style.transform = 'translateX(100%)'
}

function onMenu() {
    clickMenu1()
}
function closeMenu() {
    clickMenu2()
}

let btntop = document.getElementById('btn-top')
let btncontact = document.getElementById('btn-contact')
function onWidth() {
    if (window.innerWidth <= 768) {
        navResponse.style.transform = 'traslateX(0%)'
    } else {
        navResponse.style.transform = 'translateX(100%)'
    }
}

function onScroll() {
    if (window.innerWidth >= 0) {
        if (window.scrollY > 300) {
            btntop.style.display = 'block'
            btntop.style.transform = 'translateX(0%)'
            btntop.style.animationName = 'slowLeft'
    
            btncontact.style.display = 'flex'
            btncontact.style.transform = 'translateX(0%)'
            btncontact.style.animationName = 'slowLeft'
        } else {
            btntop.style.transform = 'translateX(170%)'
            btntop.style.display = 'none'
            btncontact.style.transform = 'translateX(170%)'
            btncontact.style.display = 'none'
        }
    }
}

const SendForm = () => {
    let btnUp = document.querySelector('input.btnUp')
    if (document.getElementById('nome').value.length>1 && document.getElementById('email').value.length>1 && document.getElementById('mensagem').value.length>1) {
        btnUp.innerHTML =  'Enviando...'
        btnUp.style.background = '#757575'
        btnUp.style.cursor = 'not-allowed'
    } else {
        console.log('[ERROR] Preencha os campos')
    }
}

function sendForm (){
    SendForm()
}


