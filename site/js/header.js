let tagsLI = document.getElementsByTagName('li');
let tagsA = document.getElementsByTagName('a');

let redmensionamento = function() {
    if (window.innerWidth <= 900) {
        tagsLI[0].style.display = 'block';
        for (let i = 1; i < tagsLI.length; i++) {
            tagsLI[i].style.display = 'none';
        }
        header.style.height = '15vh'
    } else {
        tagsLI[0].style.display = 'none';
        for (let i = 1; i < tagsLI.length; i++) {
            tagsLI[i].style.display = 'block';
        }
        for (let i = 0; i < tagsA.length; i++) {
            tagsA[i].style.color = 'black';
        }
        header.style.height = '100vh'
    }
    tagsLI[0].setAttribute("onclick", "mostrar()");
};

window.onresize = redmensionamento;
window.onload = redmensionamento;

function mostrar() {
    header.style.height = 'auto';
    logo.style.marginTop = '3vh';
    tagsLI[0].setAttribute("onclick", "fecharMenu()");
    for (let i = 0; i < tagsLI.length; i++) {
        tagsLI[i].style.display = 'block';
    }
    for (let i = 0; i < tagsA.length; i++) {
        tagsA[i].style.color = 'white';
    }
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

function fecharMenu() {
    if (window.innerWidth <= 900) {
        header.style.height = '15vh'
    } else {
        header.style.height = '100vh'
    }
    tagsLI[0].setAttribute("onclick", "mostrar()");
    for (let i = 1; i < tagsLI.length; i++) {
        tagsLI[i].style.display = 'none';
    }
    logo.style.marginTop = '0vh';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

window.onscroll = function() {
    if (scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        header.style.borderRight = '1px solid black';
        for (let i = 0; i < tagsA.length; i++) {
            tagsA[i].style.color = 'white';
        }
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        header.style.borderRight = '1px solid white';
        for (let i = 0; i < tagsA.length; i++) {
            tagsA[i].style.color = 'black';
        }
    }
}