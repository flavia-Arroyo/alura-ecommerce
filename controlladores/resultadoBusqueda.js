const nombreBuscado = document.querySelector("[data-buscador]")
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