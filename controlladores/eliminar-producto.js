import { datos } from "../home.js"




const verProducto = async() =>{


const url = new URL(window.location);
const id = url.searchParams.get("id"); 

if(id === null){
    console.log("no se pudo obtener el producto")
}

try{
    const producto = await datos.detalleProducto(id);
        
       
    if(producto.nombre && producto.precio && producto.descripcion && producto.imagen&& producto.id){
        
        const dataProd = document.querySelector(("[data-prod-eliminar]"))
        
        const contProducto = `
                <h3>Eliminar Producto</h3>
            <img class="imagen" src="${producto.imagen}">
            <p class="nomprod">${producto.nombre}</p>
            <p class="precioprod">${producto.precio}</p>
            
            `;
            dataProd.innerHTML = contProducto

            const btn = document.querySelector("[data-eliminar]");
            btn.addEventListener("click", ()=>{
                datos.eliminarProducto(id).then( respuesta =>{
                    
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Producto Eliminado',
                        showConfirmButton: false,
                        timer: 1500
                        })
                        
                        setTimeout(() => {
                        window.location.href="../pantallas/productos.html"
                        
                    }, 2000);
                }).catch(err => alert("ocurrio un error al querer eliminar"))
 
            })

            

    }else{
            throw new error();
        
    }
}catch(error){
    console.log("catch error", error)
    }


}


verProducto();


    
