const agregarImagen = document.querySelector(".agregar-img");
console.log(agregarImagen)
let textoImagen= ""

let archivo;

textoImagen = agregarImagen.querySelector(".desc-agregar");

//cuando hace click en buscar en dispositivo
const buscador= document.querySelector(".imagen-blanco")
const button=buscador.querySelector("button")
console.log(buscador)
let input=buscador.querySelector("input")
console.log(input)

button.onclick=()=>{
    input.click()
}

input.addEventListener("change", function(){
    archivo = this.files[0]
    mostrarArchivo();
    agregarImagen.classList.add("active")
})



agregarImagen.addEventListener("dragover", (event) =>{
    event.preventDefault()
    agregarImagen.classList.add("active")
    textoImagen.textContent = "Soltar para cargar archivo"
})

agregarImagen.addEventListener("dragleave", () =>{
    
    textoImagen.textContent = "Arrastre para agregar una imagen para el producto"
    agregarImagen.classList.remove("active")
})

// si el usuario suelta el archivo sobre el área de imagen
agregarImagen.addEventListener("drop", (event) =>{
    event.preventDefault()
    archivo = event.dataTransfer.files[0]
    mostrarArchivo();    
})

const mostrarArchivo= ()=>{
    let tipoArchivo = archivo.type;
    let extensionValida = ["image/jpeg", "image/jpg", "image/png"]
    if(extensionValida.includes(tipoArchivo)){
        
        let lectorArchivo = new FileReader();
        lectorArchivo.onload = ()=>{
            let archURL= lectorArchivo.result;
            console.log(archURL)
            let imagTag=`<img class="img"src="${archURL}" alt="">` 
            console.log(imagTag)
            agregarImagen.innerHTML= imagTag
        }
        lectorArchivo.readAsDataURL(archivo)

    }else{        
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'archivo no permitido',
            showConfirmButton: false,
            timer: 1500
            })
        agregarImagen.classList.remove("active")
        textoImagen.textContent = "Arrastre para agregar una imagen para el producto"

    }
}
