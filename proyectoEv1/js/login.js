import { validator } from './validator.js';



function login(){
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(correo.includes("@")){
        console.log("Correo valido");
        

    } 
    else{ 
        alert("Para iniciar sesión debe llevar @");   
    }
        
}


let registros=[]

function register(){
    var name=document.getElementById("names")
    var last_names=document.getElementById("last_names")
    var number=document.getElementById("number")
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    validator("email")

    if(name || last_names || number || correo || password ===""){
        alert("No pueden haber campos vacios")

    }else{
        alert("Usuario registrado con exito")
    }


    let RegistroNuevo={
        name: name,
        last_names:last_names,
        number:number,
        correo:correo,
        password:password
    } 
    
    registros.push(RegistroNuevo);

    document.getElementById("form_register").reset();
    
}


