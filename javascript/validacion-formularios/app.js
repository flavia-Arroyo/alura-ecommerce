import { valida } from "./validacion_inputs.js";

const inputs = document.querySelectorAll(".inputs");


inputs.forEach((input) => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
       
    });
});





