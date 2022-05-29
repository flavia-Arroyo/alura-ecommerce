const nombreBuscado = document.querySelector("[data-buscador]")
const btnmovil = document.querySelector("[data-boton-movil]")
const nomBuscadoMovil = document.querySelector("[data-buscador-movil]")
console.log(nomBuscadoMovil)
    
    
let texto = ""

nombreBuscado.addEventListener("input", evento => {
    texto = evento.target.value.toLowerCase();
    
//CAPTURAR ENTER
    nombreBuscado.addEventListener("keypress", event =>{
        if(event.key == "Enter"){
            //mando a la otra pantalla 
            window.location.href = `../pantallas/resultadobusqueda.html?texto=${texto}`;
            nombreBuscado.value="";
           


            }
        })

})

nomBuscadoMovil.addEventListener("input", event =>{
    const textoMovil = event.target.value.toLowerCase();
    console.log(textoMovil)
    
    btnmovil.addEventListener("click", ()=>{
        console.log(textoMovil)
        window.location.href = `../pantallas/resultadobusqueda.html?texto=${textoMovil}`;
        nombreBuscado.value="";
        })


})


