function agregarAlCarrito(producto, stock){
    const tenemosStock = hayStock(stock);

    if(tenemosStock == "tenemos stock"){
    console.log("agregaste al carrito " + producto)}

    else
    {console.log("Lo siento , no nos quedo stock de este producto")}
}

function hayStock(stock){
    if(stock > 0 ){
        return "tenemos stock";
    }
    else{
        return "no nos queda stock"
    }
}
agregarAlCarrito("zapatillas", 10);
agregarAlCarrito("gorra", 5);
agregarAlCarrito("campera", 1);
agregarAlCarrito("buzo",0);