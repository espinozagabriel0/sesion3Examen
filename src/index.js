import { header } from "./components/header.js";
// import { homeVista } from "./vistas/home.js";
// import { partidas } from "./vistas/partidas.js";

function app(){
    return `
        ${header()}
    `;
}


document.querySelector('div#root').innerHTML = app()



document.querySelector('div#')