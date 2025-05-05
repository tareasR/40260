console.log("inicio")

const boton = document.getElementById("enviar")
boton.addEventListener("click",
    () => {
        console.log("los parámetros:")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value)
    }
)