import { datos } from "../home.js";

const seccionProd = document.querySelector("[data-productos]")


const mostrarProducto= (nombre, precio, id,  imagen) =>{
    
    const unProducto= document.createElement("div");
    unProducto.classList.add("producto")
    const contenidoProducto = `
                           <img class="prodImagen" src="${imagen}">
                            <p class="nomprod">${nombre}</p>
                            <p class="precioprod">${precio}</p>
                            <a class="linkprod" href="/pantallas/detalleproducto.html?id=${id}">Ver Producto</a>`;
                         
    unProducto.innerHTML= contenidoProducto;
    
    return unProducto;
    
};
datos.listaProducto().then(informacion =>{
    informacion.forEach(({nombre, precio, id,  imagen}) => {
        const nuevoProducto = mostrarProducto(nombre, precio, id, imagen)
        seccionProd.appendChild(nuevoProducto)


    })
})