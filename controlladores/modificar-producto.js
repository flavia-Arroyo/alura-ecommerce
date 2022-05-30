import { datos } from "../home.js"
  


    let id,imagen;
    let zonaImg;
    const obtenerInfoProducto = async () => {
      const url = new URL(window.location);
      id = (url.searchParams.get("id"));
    
      if(id === null){
        console.log("Hubo error al momento de traer la info de este producto");
      }
    
      const nombre = document.querySelector("[data-nombre-prod]");
    

      const precio = document.querySelector("[data-precio-prod]");
      const categoria = document.querySelector("[data-cat-prod]");
      const descripcion = document.querySelector("[data-desc-prod]");
      zonaImg = document.querySelector("[data-imagen-prod]");
      
      
      
      try{
        const producto = await datos.detalleProducto(id);
       
        if(producto.nombre && producto.precio && producto.descripcion && producto.imagen && producto.categoria  ){
          nombre.value = producto.nombre;
          
          precio.value = producto.precio;
          categoria.value = producto.categoria;
          descripcion.value = producto.descripcion;
          
          imagen = producto.imagen;
    
          let imgTag = `<img class="img" src="${producto.imagen}" alt="imagen agregar">`;
          zonaImg.innerHTML = imgTag;
          
          
       
        }

      }catch(error){
        console.log("catch error", error);
      }
    }
    obtenerInfoProducto();
    
    
    const formulario = document.querySelector("[data-formulario]");
    formulario.addEventListener("submit", evento => {
      evento.preventDefault();

      imagen = zonaImg.querySelector("img").src;
    
      const nombre = document.querySelector("[data-nombre-prod]").value;
      const precio = document.querySelector("[data-precio-prod]").value;
      const categoria = document.querySelector("[data-cat-prod]").value;
      const descripcion = document.querySelector("[data-desc-prod]").value;

      
    
      datos.actualizarProducto(nombre, precio, imagen, id, categoria, descripcion).then(() => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto editado',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          window.location.href = "../pantallas/productos.html";
        }, 2000);
      })
    
    })


    