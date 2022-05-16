

const listaProducto =() =>fetch('https://ecommerce-alura-geek.herokuapp.com/productos').then(respuesta =>respuesta.json());


const detalleProducto = async(id) =>{
    return fetch(`https://ecommerce-alura-geek.herokuapp.com/productos/${id}`).then(respuesta => respuesta.json());
}




export const datos ={
    listaProducto,
    detalleProducto,

}






























































//esto se usa con el servidor 

/*function crearProductos(info){
    const padre= document.getElementById("todos__productos");
    info.forEach(cat => {
        const seccion = document.createElement("section");
        //seccion.classList.app(cat.categoria);
        seccion.innerHTML=`
        <div class="titulo">
            <h2>${cat.categoria}</h2>
            <div>
                <a href="productos.html"class="producto-link">Ver Todo</a><img class="flecha" src="./imagenes/flecha1.png">

            </div>
            
        </div>
        `;
        const division = document.createElement("div");
        division.classList.add("productos");
        cat.productos.forEach( productos=>{
            const producto = document.createElement("div");
            producto.classList.add("producto");
            let ruta = ""
            if(cat.categoria == "starwars"){
                ruta = "./imagenes/img-starwars/";
            }else if(cat.categoria == "consolas"){
                ruta = "./imagenes/img-consolas/"
            }else{
                ruta = "./imagenes/img-diversos/"

            }
            producto.innerHTML=`<img class="prodImagen" src="${ruta}${productos.imagen}">
            <p class="nomprod">${productos.nombre}</p>
            <p class="precioprod">${productos.precio}</p>
            <a class="linkprod" href="detalleproducto.html?id=${productos.id}">Ver Producto</a>`;
            division.appendChild(producto)

        })





        seccion.appendChild(division);
        padre.appendChild(seccion);

        
    });


}
//const url = `https://ecommerce-alura-geek.herokuapp.com/categorias`
const url = `http://localhost:3000/productos`;


fetch(url)
.then(res=>{ return res.json()})//ejecute la promesa hay que hacerlo json deja promesa
.then(data=>{crearProductos(data.categorias);})
.catch(error => {console.log(error)});*/


