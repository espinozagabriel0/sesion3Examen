const partidas = [ 
    { avatar: "🐉", nick: "DragonSlayer", puntos: 9999, fecha: "2024-11-01" }, 
    { avatar: "🧙‍♂️", nick: "WizardMaster", puntos: 8500, fecha: "2024-11-03" }, 
    { avatar: "🤖", nick: "RoboWarrior", puntos: 7230, fecha: "2024-11-05" }, 
    { avatar: "👽", nick: "AlienHunter", puntos: 6420, fecha: "2024-11-07" }, 
    { avatar: "🦄", nick: "UnicornSparkle", puntos: 5700, fecha: "2024-11-09" }, 
    { avatar: "👻", nick: "GhostChaser", puntos: 4930, fecha: "2024-11-10" }, 
    { avatar: "🦸‍♀️", nick: "SuperHeroGal", puntos: 4320, fecha: "2024-11-11" }, 
    { avatar: "🐱‍👤", nick: "NinjaKitty", puntos: 3890, fecha: "2024-11-12" }, 
    { avatar: "💀", nick: "SkullCrusher", puntos: 3450, fecha: "2024-11-13" }, 
    { avatar: "🦖", nick: "DinoDestroyer", puntos: 3120, fecha: "2024-11-14" } 
];

console.log(partidas)

function pintaTabla(partidas){
    let datos = '';

    partidas.forEach(partida => {
        datos += `
            <tr>
                <td>${partida.avatar}</td>
                <td>${partida.nick}</td>
                <td>${partida.puntos}</td>
                <td>${partida.fecha}</td>
            </tr>
        `
    });  
    return datos; 
}

function insertaNuevaPartida(datos){
    partidas.push(datos);
}

insertaNuevaPartida({avatar: "👽", nick: "Paco", puntos: 2, fecha: "2024-11-12"});

console.log(partidas);



function pintaDatosPartida(partida){
    console.log(partida);
    if(confirm("Quieres guardar la partida: ?") == true){
        insertaNuevaPartida(partida);
        pintaTabla(partidas)
    }else{
        console.log('Has cancelado la partida')
    }

}

pintaDatosPartida({ avatar: "👽", nick: "Paco", puntos: 2, fecha: "2024-11-12" });


export function partidasVista(){
    // mostrar datos del array en una tabla
    return `
       <div id="partidas">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">avatar</th>
                        <th scope="col">nick</th>
                        <th scope="col">puntos</th>
                        <th scope="col">fecha</th>
                    </tr>
                </thead>
                <tbody id="tbodyPartidas">
                    ${pintaTabla(partidas)}
                </tbody>
            </table>
       </div>
    `;
}