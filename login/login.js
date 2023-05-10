document.getElementById("boton").addEventListener("click", function(event){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //validar email con admin@admin.com y password 12345
    console.log(email,password);
    if(email == 'admin@admin.com' && password == '12345'){
        //abrir ingreso.html
        window.location.href = "../IngresoProds/ingreso.html";
    }else{
        alert("Datos incorrectos");
    }
});

//OK Hice este codigo aqui por que no se si lo podria agregar a events.js tengo k preguntarle al profe