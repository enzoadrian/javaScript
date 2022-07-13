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
agregarAlCarrito("zapatillas air force", 10);
agregarAlCarrito("gorra NB", 0);
agregarAlCarrito("campera Norton", 1);
agregarAlCarrito("buzo Canguro",0);