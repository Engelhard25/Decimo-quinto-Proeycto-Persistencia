nombre = "Engelhard"
apellido = "Pacheco"
const yo = {
    nombre,
    apellido
}

sessionStorage.setItem("yo", JSON.stringify(yo))
localStorage.setItem("yo", JSON.stringify(yo))
const ahora = new Date()
document.cookie=`datosYo=${JSON.stringify(yo)};expires=${new Date(ahora.getTime() + 2 * 60000)}`
