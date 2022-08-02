const carrito = []

const ropa = [
    {id:1,nombre:"zapatillas air force", precio: 23000 },
    {id:2, nombre:"remera toronto", precio: 2500 },
    {id:3, nombre:"campera norton", precio: 15000 }
]
const accesorios = [
    {id:4,nombre:" gorra NB", precio: 1600 },
    {id:5,nombre:"pulsera island",precio: 900 }
]

ropa.push({id:6, nombre:"buzo tyson", precio: 9500 })

const productos = ropa.concat(accesorios)

function agregarAlCarrito(nombreProducto){
    alert("Agregaste " + nombreProducto)}


const resultado = ropa.filter((el) => el.precio <10000)
   console.log(resultado)


const total = carrito.reduce((acumulador
    , el) => acumulador + el.precio , 0 );
   console.log(total)


productos.forEach((producto) => {
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById("cardsProducts").innerHTML +=
     `<div class='card d-flex  col-4'>
      <h2>${producto.nombre}</h2>
      <button id="${idBoton}">Agregar al carrito</button>
      </div>`
})
/* agregando evento  */
productos.forEach((producto) =>{
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById(idBoton).addEventListener  ('click',() => {
        alert(`agregaste ${producto.nombre}`)}
        )
        })
