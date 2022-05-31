
export function valida(input){
    const tipoDeInput =input.dataset.tipo;

    
    
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML =""

    }else{
        input.parentElement.classList.add("input-container--invalid")
        
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMjeError(tipoDeInput, input)


    }

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"


];


function mostrarMjeError(tipoDeInput, input){
    
    let mensaje ="";
    tipoDeErrores.forEach((error) =>{
        if(input.validity[error]){
            
            mensaje= mensajeDeError[tipoDeInput][error]
            
        }

    })
    return mensaje

   
}

const mensajeDeError={
    nombre:{
        valueMissing:"el campo nombre no puede estar vacio",
        patternMismatch:"Solo se aceptan letras"
    },
    nombreProducto:{
        valueMissing:"el campo nombre no puede estar vacio",

    },
    mensaje:{
        valueMissing:"el campo mensaje no puede estar vacio",
        

    },
   
    descripcion:{
        valueMissing:"Debe agregar descripcion para poder agregar producto",
       
    },
    
    precio:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Debe empezar con $ y separar con punto (.) el numero entero de los decimales => ejemplo $60.00 "
    },

}








