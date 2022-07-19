const carrito = []
console.log(carrito)
function agregarAlCarrito(producto, stock){
    const tenemosStock = hayStock(stock);

    if(tenemosStock == "tenemos stock"){
        carrito.push(producto);
        console.log("agregaste al carrito " + producto)}

    else
    {console.log("Lo siento , no nos quedo " + producto)}
}

function hayStock(stock){
    if(stock > 0 ){
        return "tenemos stock";
    }
    else{
        return "no nos queda stock"
    }
}

let stockZapatillas = prompt("cuantas zapatillas hay en stock?")
let stockGorras = prompt("cuantos gorras hay en stock")
let stockCamperas = prompt("cuantas camperas hay en  stock ")

// Agregando arrays y metodos
const ropa = ["zapatillas air force","gorra NB","campera norton"]
const accesorios = ["anillo gold","pulsera island"]
const productos = ropa.concat(accesorios)
ropa.push("buzo tyson")
console.log(ropa.length)
alert(" estos son nuestro productos a la venta " + productos)
 
for(let i = 0 ; i < ropa.length; i++ ){
    console.log(ropa[i]) 
}
   
agregarAlCarrito("zapatillas air force",stockZapatillas);
agregarAlCarrito("gorra NB", stockGorras);
agregarAlCarrito("campera norton", stockCamperas)
