

function login(){
    event.preventDefault();
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(correo.includes("@")){
        console.log("Correo valido");
        

    } 
    else{ 
        alert("Para iniciar sesión debe llevar @");   
    }

    console.log("Entrando...");
    window.location.href = "paginaPrincipal.html";
        
}


let registros=[]

function register(event){ 
    event.preventDefault();
    
    
    var name=document.getElementById("names").value
    var last_names=document.getElementById("last_names").value
    var number=document.getElementById("number").value
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(!name || !last_names || !number || !correo || !password){
        alert("No pueden haber campos vacios")
        return
    }
     if (correo.includes('@')) {
            
            console.log("Correo valido");
        
        } else {
            alert("El correo debe llevar @");
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
   window.location.href = "Menu.html";
   console.log("Registro OK, redirigiendo...");
    
}



