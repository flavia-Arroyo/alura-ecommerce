import { datos } from "../home.js"
import { mostrarProducto } from "./unproducto.js"

const seccionStar = document.querySelector("[data-productos-starwars]")
const seccionConsolas = document.querySelector("[data-productos-consolas]")
const seccionDiversos = document.querySelector("[data-productos-diversos]")



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


