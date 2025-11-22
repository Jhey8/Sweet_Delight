// Redirigir a productos
function iraProductos() {
    window.location.href="../principal/productos.html";
}

// Carrusel del index
const productos = [
    { imagen:"./recursos/img/chocolate.png", nombre:"Torta de Chocolate", descripcion:"Delicioso bizcocho con crema y cobertura de cacao puro." },
    { imagen:"./recursos/img/Queque de Vainilla.jpeg", nombre:"Torta de Vainilla", descripcion:"Esponjoso bizcocho con crema de vainilla y decoraciones coloridas." },
    { imagen:"./recursos/img/torta de fresas.png", nombre:"Torta de Fresa", descripcion:"Bizcocho suave con relleno y cobertura de fresas frescas." },
    { imagen:"./recursos/img/cupcake.jpg", nombre:"Cupcakes Surtidos", descripcion:"Variedad de sabores y decoraciones para todos los gustos." },
    { imagen:"./recursos/img/galleta.png", nombre:"Galletas Decoradas", descripcion:"Perfectas para regalar o acompañar con un café." },
    { imagen:"./recursos/img/Trufas.jpeg", nombre:"Trufas de Chocolate", descripcion:"Bocaditos de chocolate rellenos de cremas y licores." },
    { imagen:"./recursos/img/Crema Volteada.jpeg", nombre:"Crema Volteada", descripcion:"Postre clásico con caramelo y textura suave." },
    { imagen:"./recursos/img/Budín.jpeg", nombre:"Budín de Pan", descripcion:"Delicioso budín hecho con pan, pasas y especias." }
];

let indiceAct = 0;

const listaProductos = document.getElementById("listaProductos");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");

function mostrarProd() {
    if (!listaProductos) return;
    listaProductos.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        let posicion = (indiceAct + i) % productos.length;
        let prod = productos[posicion];

        listaProductos.innerHTML += `
            <div class="produc">
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
            </div>
        `;
    }
}

if (btnIzquierda && btnDerecha) {
    btnIzquierda.addEventListener("click", () => {
        indiceAct = (indiceAct - 1 + productos.length) % productos.length;
        mostrarProd();
    });

    btnDerecha.addEventListener("click", () => {
        indiceAct = (indiceAct + 1) % productos.length;
        mostrarProd();
    });

    mostrarProd();
}
