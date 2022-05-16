import { datos } from "../home.js"

const seccionStar = document.querySelector("[data-productos-starwars]")
const seccionConsolas = document.querySelector("[data-productos-consolas]")
const seccionDiversos = document.querySelector("[data-productos-diversos]")

const mostrarProducto= (nombre, precio, id, imagen) =>{
    
    const unProducto= document.createElement("div");
    unProducto.classList.add("producto")
    const contenidoProducto = `
                           <img class="prodImagen" src="${imagen}">
                            <p class="nomprod">${nombre}</p>
                            <p class="precioprod">${precio}</p>
                            <a class="linkprod" href="./pantallas/detalleproducto.html?id=${id}">Ver Producto</a>`;
                         
    unProducto.innerHTML= contenidoProducto;
    
    return unProducto;
    
}

datos.listaProducto().then(informacion =>{
    informacion.forEach(({nombre, precio, id, categoria, imagen}) => {
        const nuevoProducto = mostrarProducto(nombre, precio, id,imagen)
        if(categoria == "starwars"){
            seccionStar.appendChild(nuevoProducto)

        }else if(categoria == "consolas"){
            seccionConsolas.appendChild(nuevoProducto)
        }else{
            seccionDiversos.appendChild(nuevoProducto)
        }
        


        
    });

})


