
const carrito= JSON.parse(localStorage.getItem("carrito")) ??[];
 document.getElementById("cart-number").innerHtml = carrito.length;

 

const ropa = [
    {id:1,nombre:"zapatillas air force",img:"https://essential.vtexassets.com/arquivos/ids/571599-500-auto?v=637909172164170000&width=500&height=auto&aspect=true", precio: 23000 },
    {id:2, nombre:"remera toronto",img:"https://http2.mlstatic.com/D_NQ_NP_675234-MLA45098508489_032021-O.webp", precio: 2500 },
    {id:3, nombre:"campera norton",img:"https://lamoto.com.ar/wp-content/uploads/2019/08/CITY_NEGRA_FRENTE.jpg", precio: 15000 }
]
const accesorios = [
    {id:4,nombre:" gorra NB",img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/h/mh734103bk_2.jpg", precio: 1600 },
    {id:5,nombre:"pulsera island",img:"https://http2.mlstatic.com/D_NQ_NP_750431-MLA48925303204_012022-O.webp",precio: 900 }
]

ropa.push({id:6, nombre:"buzo tyson",img:"https://http2.mlstatic.com/D_NQ_NP_621591-MLA45417531268_042021-O.webp", precio: 9500 })

const productos = ropa.concat(accesorios)


productos.forEach((producto) => {
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById("cardsProducts").innerHTML +=
     `<div class='card d-flex  col-4'>
      <h2>${producto.nombre}</h2>
      <img src = ${producto.img} style="width:300px">
      <p>$${producto.precio}</p>
      <button id="${idBoton}">Agregar al carrito</button>
      </div>`
})

productos.forEach((producto) =>{
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById(idBoton).addEventListener  ('click',() => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById("cart-number").innerHTML = carrito.length; 
      } )
        })

        
  function mostrarCarrito(){
    carrito.forEach((producto) =>
    {document.getElementById("cardsModal").innerHTML +=
    `<div>
   <p> 
   ${producto.nombre}
   <img src="${producto.img}" style="width:80px">
   $${producto.precio}`}) }




   
 /*   function eliminarDelCarrito(idDelProducto){
    const index = carrito.findIndex(producto => producto.id ===idDelProducto)
     carrito.splice(index,1)
   } */

  