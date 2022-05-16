import { datos } from "../home.js";


const prodModificable = document.querySelector("[data-prod-mod]");

const admProductos = (nombre, imagen, precio ) =>{
    const productoEditar = document.createElement("div")
    productoEditar.classList.add("producto")

    const contenidoEditar = `
                    <div class="imagenprod">
                        <img class="prodImagen"src="${imagen}">
                        <div class="iconProd">
                                <a href="#"><img class="eliminar"src="../imagenes/eliminar.png"></a>
                                <a href="#"><img class="modificar" src="../imagenes/modificar.png"></a>
                        </div>                           
                    </div>
                                <p class="nomprod">"${nombre}"</p>
                                <p class="precioprod">"${precio}"</p>
                                <p class="nomprod">#1111111</p>
                                
                                
    `;

    productoEditar.innerHTML = contenidoEditar
    return productoEditar

}

datos.listaProducto().then(info =>{
    info.forEach(({nombre, precio, imagen}) => {
        const prodEditables = admProductos(nombre, imagen, precio)
        prodModificable.appendChild(prodEditables)
        
    });
})
