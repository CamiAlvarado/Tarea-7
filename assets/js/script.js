// OBJETO
class characters {
    // CONSTRUCTOR
    constructor(nombre, especie, imagen) {
        this.nombre = nombre;
        this.especie = especie;
        this.imagen = imagen;
    }
    // GETTERS
    get information() {
        let array = [this.nombre, this.especie, this.imagen];
        return array
    }
}
// CARD
const show = (params) => {
    let id = document.getElementById("box");
    id.innerHTML += `<div class="card"> 
    <h2>${params[0]}</h2>
    <img class= "imagen" width="60%"
    src="${params[2]}"/>
    <h3>${params[1]}</h3>
    </div>`;
}
// FUNCIÓN FLECHA QUE REALIZA PETICIÓN A LA API
const getPersonas = async () => {
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();

    let personaje = data.results;
    personaje.map((personaje) => {
        let people = new characters(personaje.name, personaje.species, personaje.image);
        show(people.information);
    });
}
getPersonas();