function agregarAlCarrito(producto, stock){
    const tenemosStock = hayStock(stock);

    if(tenemosStock == "tenemos stock"){
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
const productos = ["zapatillas air force","gorra NB","campera norton"]

for(let i =0;i<3;i++){console.log(productos[i])
    
}

    
agregarAlCarrito("zapatillas air force",stockZapatillas);
agregarAlCarrito("gorra NB", stockGorras);
agregarAlCarrito("campera norton", stockCamperas)
