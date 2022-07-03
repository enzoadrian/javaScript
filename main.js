let nombre = prompt("¿Cual es tu nombre? ")
let notasAlumno = [6, 4, 8, 6, 1]
let totalNotas = 0

for(let i= 0; i <= 4; i++){
    totalNotas += notasAlumno[i]
    }
const promedio= totalNotas/5
document.write(promedio)

if(promedio>=6){
    alert("Felicidades " + nombre + " Estas aprobado")
}else{
    alert("Lo lamentamos " + nombre + " Estas desaprobado")
}