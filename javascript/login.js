const loguearse = document.querySelector("[data-login]");
console.log(loguearse, "hizo click")
loguearse.addEventListener("click", (evento) =>{
    evento.preventDefault();
    validarLogueo();
})


function validarLogueo(){
    const form = document.querySelector("[data-form]")
    const correo = document.querySelector("[data-correo]").value;
    const contraseña = document.querySelector("[data-contraseña]").value;

    const correoAdm = "adm@alura.com"; 
    const claveAdm = "Alura1234";

    if(correo == correoAdm && claveAdm == contraseña){
        swal({
            position: 'top-end',
            icon: 'success',
            title: 'Login Exitoso, ya puede editar contenido',
            
            
          })
          

          setTimeout(function(){
              window.location.href = "../pantallas/productos.html";
          }, 3000)



    }else{
        swal({
            
            text: " Debe Usar correo:adm@alura.com clave:Alura1234",
            icon: "error",
            
            
        })
        
        

    }
    form.reset();
    


}