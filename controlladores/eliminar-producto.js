import { datos } from "../home.js"




const verProducto = async() =>{


    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    if(id === null){
        console.log("no se pudo obtener el producto")
    }
   
    try{
        const producto = await datos.detalleProducto(id);
        
       
        if(producto.nombre && producto.precio && producto.descripcion && producto.imagen){
            const dataProd = document.querySelector(("[data-prod-eliminar]"))
            const prodDetalle= document.createElement("div");
            prodDetalle.classList.add("detalleProd")
            const contProducto = `
                     <h3>Eliminar Producto</h3>
                    <img class="imagen" src="${producto.imagen}">
                    <p class="nomprod">${producto.nombre}</p>
                    <p class="precioprod">${producto.precio}</p>
                    
                    <div class="advertencia">
                    <h5> ¿ESTA SEGURO?<h5>
                        <h4>Esta Acción es Irreversible</h4>

                </div>
                

                <div class="divBtnAccion">
                    <a href="/pantallas/productos.html" class="noBorrar btn"  >Volver</a>
                    <button class=" btn" type="button" id="borrar"  >Borrar</button>

                </div>`;
                    dataProd.innerHTML = contProducto

        }else{
            throw new error();
        
        }
}catch(error){
    console.log("catch error", error)
}
}


verProducto();
    
