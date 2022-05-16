import { datos } from "../home.js";


const mostrarProductoSimilares= (nombre, precio, id,  imagen) =>{
    
    const unProducto= document.createElement("div");
    unProducto.classList.add("producto")
    const contenidoProducto = `
                           <img class="prodImagen" src="${imagen}">
                            <p class="nomprod">${nombre}</p>
                            <p class="precioprod">${precio}</p>
                            <a class="linkprod" href="detalleproducto.html?id=${id}">Ver Producto</a>`;
                         
    unProducto.innerHTML= contenidoProducto;
    
    
    return unProducto;
    
}

const verProducto = async() =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    if(id === null){
        console.log("no se pudo obtener el producto")
    }
   
    try{
        const producto = await datos.detalleProducto(id);
        
       
        if(producto.nombre && producto.precio && producto.descripcion && producto.imagen){
            const productoSeleccionado = document.querySelector("[data-prod-seleccionado]") 
            const contenidoProducto =  `
                    <div class="prod-sel-img" >
                        <img class="img-sel"src="${producto.imagen}"> 
                    </div>
                    <div class="prod-sel-texto">

                    <p class="prod-sel-nom">${producto.nombre}</p>
                    <p class="prod-sel-precio">${producto.precio}</p> 
                    <p class="prod-sel-desc">${producto.descripcion}</p>
                    </div>
                    

            `;
          
            productoSeleccionado.innerHTML = contenidoProducto;
           

            const catSeleccionada = producto.categoria;
            
            const idProductoSeleccionado = producto.id;
            

            const mostrarSeleccionado = document.querySelector("[data-producto-similares]")

            datos.listaProducto().then(data =>{
                
                data.forEach(({nombre, precio, imagen, id, categoria}) => {



                    if(categoria === "starwars" && catSeleccionada === "starwars" && idProductoSeleccionado != id){
                        const productoNuevo = mostrarProductoSimilares(nombre, precio, id,  imagen);
                        
                        mostrarSeleccionado.appendChild(productoNuevo)
                    }else if(categoria === "consolas" && catSeleccionada === "consolas" && idProductoSeleccionado != id){
                        const productoNuevo = mostrarProductoSimilares(nombre, precio, id,  imagen);
                        mostrarSeleccionado.appendChild(productoNuevo)

                    }else if(categoria === "diversos" && catSeleccionada ==="diversos" && idProductoSeleccionado != id){
                        const productoNuevo = mostrarProductoSimilares(nombre, precio, id,  imagen);
                        mostrarSeleccionado.appendChild(productoNuevo)


                    }
                    
                });
            })
            .catch( error => alert("Ocurrio un error en vista"));
            

            
        }else{
            throw new error();
        }
    }catch(error){
        console.log("catch error", error)
    }
}
verProducto();


            
            

    


