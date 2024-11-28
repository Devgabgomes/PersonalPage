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
        btnUp.innerText =  'Enviando...'
        btnUp.style.background = '#757575'
        btnUp.style.cursor = 'not-allowed'
    } else {
        console.log('[ERROR] Preencha os campos')
    }
}

function sendForm (){
    SendForm()
}

window.efectScroll = ScrollReveal({reset:true})

efectScroll.reveal('.efeito-txt-top-left',{
    duration: 2000,
    distance: '100px',
    origin: 'left'
})

efectScroll.reveal('.efeito-txt-top-left2',{
    duration: 2000,
    distance: '70px',
    origin: 'left'
})

efectScroll.reveal('.efeito-img-top-right',{
    duration: 2000,
    distance: '100px',
    origin: 'right'
})

efectScroll.reveal('.efeito-txt-top',{
    duration: 2000,
    distance: '5px'
})

efectScroll.reveal('.efeito-img-top',{
    duration: 2100,
    distance: '5px',
    delay: 500
})

efectScroll.reveal('.efeito-img-top2',{
    duration: 2100,
    distance: '0px',
    delay: 500
})

efectScroll.reveal('.efeito-txt-top2',{
    duration: 2000,
    distance: '90px'
})

efectScroll.reveal('.efeito-img-top3',{
    duration: 2100,
    distance: '90px',
    delay: 500
})

efectScroll.reveal('.efeito-img1',{
    duration: 2100,
    distance: '90px',
    delay: 500
})

efectScroll.reveal('.efeito-img2',{
    duration: 2100,
    distance: '90px',
    delay: 600
})

efectScroll.reveal('.efeito-img3',{
    duration: 2100,
    distance: '90px',
    delay: 700
})

efectScroll.reveal('.efeito-img4',{
    duration: 2100,
    distance: '90px',
    delay: 800
})

efectScroll.reveal('.efeito-img5',{
    duration: 2100,
    distance: '90px',
    delay: 900
})

efectScroll.reveal('.efeito-img6',{
    duration: 2100,
    distance: '90px',
    delay: 1000
})

efectScroll.reveal('.efeito-img7',{
    duration: 2100,
    distance: '90px',
    delay: 1100
})

efectScroll.reveal('.efeito-img8',{
    duration: 2100,
    distance: '90px',
    delay: 1200
})

efectScroll.reveal('.efeito-img9',{
    duration: 2100,
    distance: '90px',
    delay: 1300
})