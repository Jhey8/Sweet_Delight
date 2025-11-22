//funcion para el acordeon de productos
document.addEventListener("DOMContentLoaded", () => {
    const boton= document.querySelector(".btn-expandir");
    const detalles=document.querySelectorAll("details");
    let expandido=false;

    boton.addEventListener("click",()=>{
        expandido=!expandido;
        detalles.forEach(d=>d.open=expandido);
        boton.textContent=expandido?"COLAPSAR":"EXPANDIR";
    });    
});

//funcion para el modal de detalles
function mostrarDetalle(titulo, imgA, imgB, descripcion, precio) {
    document.getElementById("detalleTitulo").innerText = titulo;
    document.getElementById("img1").src = imgA;
    document.getElementById("img2").src = imgB;
    document.getElementById("detalleDescripcion").innerText = descripcion;
    document.getElementById("detallePrecio").innerText = "Precio: " + precio;

    document.getElementById("modalDetalles").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalDetalles").style.display = "none";
}
