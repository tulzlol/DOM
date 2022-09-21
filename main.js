class Producto  {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const crossaint = new Producto("Crossaint", 250);
const medialuna = new Producto("Medialuna", 110);
const pan = new Producto("Pan", 250);
const cafe = new Producto("Cafe", 300);

const productos = [crossaint, medialuna, pan, cafe];

const contenedorProductos = document.getElementById("contenedorProductos");


let carrito = [];

productos.forEach((producto, index) => {
    let col3 = document.createElement("div");
    col3.className = "col-3";
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    col3.appendChild(card);
    let ancho = 298 + index;
    let alto = 198 + index;
    let img = document.createElement("img");
    img.src=`https://picsum.photos/${ancho}/${alto}`;
    img.className = "card-img-top";
    img.alt= "...";
    card.appendChild(img);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";
    card.appendChild(cardBody);
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = producto.nombre;
    cardBody.appendChild(cardTitle);
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = `$${producto.precio}`;
    cardBody.appendChild(cardText);
    let btn = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.innerText = "Agregar al carrito";
    cardBody.appendChild(btn);

    contenedorProductos.appendChild(col3);
})

