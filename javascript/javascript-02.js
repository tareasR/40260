let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", operadores)
        // console.log(boton)
    }
}

function pintar(e) {
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

function operadores(e) {
    let operador = e.target.innerText
    if (operador == "=")
        igual()
    else
        almacena_parametro(operador)
}

let prm1
let operacion
function almacena_parametro(prm) {
    // prm1 = resultado.value
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    resultado.value = ""
    operacion = prm
    eventos.push(operacion)
}

function igual() {
    // prm2 = resultado.value
    let variable = null
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    for (const key in parametros) {
        if (Object.prototype.hasOwnProperty.call(parametros, key)) {
            const prm = parametros[key];
            if (operacion == "+")
                variable += parseInt(prm)
            if (operacion == "-")
                if (variable == null)
                    variable = parseInt(prm)
                else
                    variable -= parseInt(prm)
            if (operacion == "*")
                if (variable == null)
                    variable = parseInt(prm)
                else
                    variable *= parseInt(prm)
            if (operacion == "/")
                if (variable == null)
                    variable = parseInt(prm)
                else
                    variable /= parseInt(prm)
        }
    }
    resultado.value = variable
}

let parametros = []
let eventos = []