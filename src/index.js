import { header } from "./components/header.js";
import { homeVista } from "./vistas/home.js";
import { aboutVista } from "./vistas/about.js";
import { partidasVista } from "./vistas/partidas.js";

function app(){
    return `
        ${header()}
        <div class="mt-2 container">
            <div id="vistas"></div>
        </div>
    `;
}

document.querySelector('div#root').innerHTML = app()


function navegar(pagina){
    if (pagina === 'home') {
        document.querySelector('#vistas').innerHTML = homeVista();
    }else if (pagina === 'about') {
        document.querySelector('#vistas').innerHTML = aboutVista();
    }else{
        document.querySelector('#vistas').innerHTML = partidasVista();
    }
}

navegar('home');

document.querySelector('#paginaHome').addEventListener('click', function() {
    navegar('home')
});
document.querySelector('#paginaAbout').addEventListener('click', function() {
    navegar('about')
});
document.querySelector('#paginaPartidas').addEventListener('click', function() {
    navegar('partidas')
});






