const opacidad = document.querySelector("[data-logueo]");
opacidad.classList.remove("opacity0");
opacidad.classList.add("opacity1")

let correo;

function layoutIni(){
    const divEmail = document.querySelector("#divEmail");
    divEmail.classList.add("layoutActive")

}
setTimeout(layoutIni, 1000);


// ---------------------boton siguiente-----------z

document.querySelector("#btnNextPass").onclick = function(){
    
    correo = document.querySelector("[data-correo]").value;
    
    const alertEmailLogin= document.querySelector("#alertEmailLogin")
    

    const spanEmail = document.querySelector("#spanEmail")
    const emailValidar = validarEmail(correo);

    if(!emailValidar){
        alertEmailLogin.innerHTML ='<p style="color:red;">Escribe una direccion de correo electrónico valida</p>';
        alertEmailLogin.style.display="block";
        swal({
            
            text: "El correo es adm@alura.com",
            icon: "error",
                   })
        

    }else {
        alertEmailLogin.style.display="none";
        spanEmail.innerHTML= correo;
        nextLayout("#divEmail", "#divPassword");

    }

    

    

 }


//regresar 
document.querySelector("#btnPrev").onclick= function(){
    prevLayout("#divPassword", "#divEmail" )

}



function prevLayout(parent, prev){
    const divPadre = document.querySelector(parent);
    const divPrev = document.querySelector(prev);
    divPadre.classList.remove("layoutleft", "layoutright","layoutActive");
    divPrev.classList.remove("layoutleft", "layoutright","layoutActive");

    divPadre.classList.toggle("layoutright");
    divPrev.classList.toggle("layoutActive")

}


function nextLayout(parent, next){
    const divPadre = document.querySelector(parent);
    const divNext = document.querySelector(next);
    divPadre.classList.remove("layoutleft", "layoutright","layoutActive");
    divNext.classList.remove("layoutleft", "layoutright","layoutActive");

    divPadre.classList.toggle("layoutleft");
    divNext.classList.toggle("layoutActive")

}

//validar EMAIL
function validarEmail(email){
    const stringEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(stringEmail.test(email) == false){
        return false;
    }else if (stringEmail== ""){
        return false;
    }else{
        return true
    }
}




document.querySelector("[data-login]").onclick = function(){
    const passstring = document.querySelector("[data-contraseña ]")
    correo = document.querySelector("[data-correo]").value;
    const strPass = document.querySelector("[data-contraseña ]").value;
    const alertPass = document.querySelector("#alertPass");
    const correoAdm = "adm@alura.com"; 
    const claveAdm = "Alura1234";

    if(strPass ==""){
        alertPass.innerHTML='<p style="color:red;">Escribe la contraseña</p>';
        alertPass.style.display="block";

    }else if(correo == correoAdm && claveAdm == strPass){
        swal({
                        position: 'top-end',
                         icon: 'success',
                         title: 'Login Exitoso, ya puede editar contenido',
                        
                        
                       })
                      
            
                       setTimeout(function(){
                          window.location.href = "../pantallas/productos.html";
                       }, 1000)

    }
    else{
        alertPass.style.display ="none";
        
        
        swal({
            
                         text: " Debe Usar correo:adm@alura.com clave:Alura1234",
                        icon: "error",
                        
                        
                })
                passstring.innerHTML="";

    }
   

}





