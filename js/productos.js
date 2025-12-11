//funcion para el acordeon de productos
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".btn-expandir");
    const detalles = document.querySelectorAll("details");
    let expandido = false;

    boton.addEventListener("click", () => {
        expandido = !expandido;
        detalles.forEach(d => d.open = expandido);
        boton.textContent = expandido ? "COLAPSAR" : "EXPANDIR";
    });
});

//funcion para el modal de detalles
function mostrarDetalle(titulo, imgA, imgB, descripcion, precio) {
    document.getElementById("detalleTitulo").innerText = titulo;
    document.getElementById("img1").src = imgA;
    document.getElementById("img2").src = imgB;
    document.getElementById("detalleDescripcion").innerText = descripcion;
    document.getElementById("detallePrecio").innerText = "Precio: " + precio;

    //configurando para wl boton de whatsapp
    const btnWhatsApp = document.getElementById("btnWhatsApp");
    const numeroWhatsApp = "51942231107"; 
    const mensaje = `Hola Sweet Delight! Me interesa el producto: *${ titulo }* - Precio: ${ precio }`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Asignar la función al botón
        btnWhatsApp.onclick = function () {
            window.open(urlWhatsApp, "_blank");
        };

    document.getElementById("modalDetalles").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalDetalles").style.display = "none";
}

// Función para filtrar producto
function filtrarProductos() {
    const busqueda = document.getElementById("barraBusqueda").value.toLowerCase();
    const contenedores = document.querySelectorAll(".Contenedor");

    contenedores.forEach(contenedor => {
        const tarjetas = contenedor.querySelectorAll(".tarjeta-producto");
        let hayCoincidencias = false;

        tarjetas.forEach(tarjeta => {
            const nombreProducto = tarjeta.querySelector("h4").textContent.toLowerCase();

            if (nombreProducto.includes(busqueda)) {
                tarjeta.style.display = "block";
                hayCoincidencias = true;
            } else {
                tarjeta.style.display = "none";
            }
        });

        // Si hay búsqueda activa
        if (busqueda !== "") {
            // Solo abre si HAY coincidencias
            if (hayCoincidencias) {
                contenedor.open = true;
            } else {
                contenedor.open = false;
            }
        } else {
            // Si el campo está vacío, cierra todo y muestra todo
            contenedor.open = false;
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = "block";
            });
        }
    });
}