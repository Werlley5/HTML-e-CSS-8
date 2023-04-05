const descricao1 = document.querySelector('#d-1');
const descricao2 = document.querySelector('#d-2');
const descricao3 = document.querySelector('#d-3');
const descricao4 = document.querySelector('#d-4');
const descricao5 = document.querySelector('#d-5');

function showMenu1() {

    if(descricao1.classList.contains('open')) {
        descricao1.classList.remove('open')
        document.querySelector('.icon-1').src = "img/Red-Arrow-down.png";
        document.querySelector('.btn-1').title = "Abrir";

    } else {
        descricao1.classList.add('open')
        document.querySelector('.icon-1').src = "img/Red-Arrow-up.png";
        document.querySelector('.btn-1').title = "Fechar";
    };
}

function showMenu2() {

    if(descricao2.classList.contains('open')) {
        descricao2.classList.remove('open')
        document.querySelector('.icon-2').src = "img/Red-Arrow-down.png";
        document.querySelector('.btn-2').title = "Abrir";

    } else {
        descricao2.classList.add('open')
        document.querySelector('.icon-2').src = "img/Red-Arrow-up.png";
        document.querySelector('.btn-2').title = "Fechar";
    };
}

function showMenu3() {

    if(descricao3.classList.contains('open')) {
        descricao3.classList.remove('open')
        document.querySelector('.icon-3').src = "img/Red-Arrow-down.png";
        document.querySelector('.btn-3').title = "Abrir";

    } else {
        descricao3.classList.add('open')
        document.querySelector('.icon-3').src = "img/Red-Arrow-up.png";
        document.querySelector('.btn-3').title = "Fechar";
    };
}

function showMenu4() {

    if(descricao4.classList.contains('open')) {
        descricao4.classList.remove('open')
        document.querySelector('.icon-4').src = "img/Red-Arrow-down.png";
        document.querySelector('.btn-4').title = "Abrir";

    } else {
        descricao4.classList.add('open')
        document.querySelector('.icon-4').src = "img/Red-Arrow-up.png";
        document.querySelector('.btn-4').title = "Fechar";
    };
}

function showMenu5() {

    if(descricao5.classList.contains('open')) {
        descricao5.classList.remove('open')
        document.querySelector('.icon-5').src = "img/Red-Arrow-down.png";
        document.querySelector('.btn-5').title = "Abrir";

    } else {
        descricao5.classList.add('open')
        document.querySelector('.icon-5').src = "img/Red-Arrow-up.png";
        document.querySelector('.btn-5').title = "Fechar";
    };
}
