const carrito = []
console.log(carrito)
function agregarAlCarrito(producto, stock,){
    const tenemosStock = hayStock(stock);

    if(tenemosStock == "tenemos stock"){
        carrito.push(producto);
        console.log("agregaste al carrito " + producto.nombre)}

    else
    {console.log("Lo siento , no nos quedo " + producto.nombre)}
}



let stockZapatillas = prompt("cuantas zapatillas hay en stock?")
let stockGorras = prompt("cuantos gorras hay en stock")
let stockCamperas = prompt("cuantas camperas hay en  stock ")

function hayStock(stock){
    if(stock > 0 ){
        return "tenemos stock";
    }
    else{
        return "no nos queda stock"
    }
}

const ropa = [
    {nombre:"zapatillas air force", precio: 23000 },
    {nombre:"gorra NB", precio: 2500 },
    {nombre:"campera norton", precio: 15000 }
]
const accesorios = [
    {nombre:"anillo gold", precio: 1200 },
    {nombre:"pulsera island",precio: 900 }
]

ropa.push({nombre:"buzo tyson", precio: 9500 })

const productos = ropa.concat(accesorios)

console.log(ropa.length)


productos.forEach( (el) => {
    console.log(el.nombre)
} )
 
const resultado = ropa.filter((el) => el.precio <10000)
   console.log(resultado)


agregarAlCarrito((productos[0]),stockZapatillas);
agregarAlCarrito(productos[1], stockGorras);
agregarAlCarrito(productos[2], stockCamperas);

const total = carrito.reduce((acumulador
    , el) => acumulador + el.precio , 0 );
   console.log(total)


