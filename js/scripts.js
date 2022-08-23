
const carrito= JSON.parse(localStorage.getItem("carrito")) ?? []; 
const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
localStorage.setItem("carrito", JSON.stringify(carrito));
document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;
 
 
const ropa = [
    {id:1,nombre:"Zapatillas air force",img:"https://essential.vtexassets.com/arquivos/ids/571599-500-auto?v=637909172164170000&width=500&height=auto&aspect=true", precio: 23000,categoria:"zapatillas" },
    {id:2, nombre:"Remera toronto",img:"https://http2.mlstatic.com/D_NQ_NP_675234-MLA45098508489_032021-O.webp", precio: 2500,categoria:"ropa"  },
    {id:3, nombre:"Campera norton",img:"https://lamoto.com.ar/wp-content/uploads/2019/08/CITY_NEGRA_FRENTE.jpg", precio: 15000,categoria:"ropa" }
]
const accesorios = [
    {id:4,nombre:"Gorra NB",img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/h/mh734103bk_2.jpg", precio: 1600,categoria:"accesorios"  },
    {id:5,nombre:"Pulsera island",img:"https://http2.mlstatic.com/D_NQ_NP_750431-MLA48925303204_012022-O.webp",precio: 900,categoria:"accesorios"  }
]

ropa.push({id:6, nombre:"Buzo tyson",img:"https://http2.mlstatic.com/D_NQ_NP_621591-MLA45417531268_042021-O.webp", precio: 9500,categoria:"ropa"  })

const productos = ropa.concat(accesorios)
//usando fetch para mostrar los productos en "determinados lugares"(en este caso puntual en la consola)
const mostrarProductos=()=>{
  fetch('productos.json')
  .then (response => response.json())
    .then (info => {console.log(info)
})}
mostrarProductos()

productos.forEach((producto) => {
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById("cardsProducts").innerHTML +=
     `<div class="cards">
      <img src = ${producto.img} style= "height:200px";"width:150px">
      <h2 class="tituloCard">${producto.nombre}</h2>
      <p>$${producto.precio}</p>
      <button class="botonAgregar"id="${idBoton}">Agregar al carrito</button>
      </div>`
})

productos.forEach((producto) =>{
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById(idBoton).addEventListener  ('click',() => {
        carrito.push(producto);
        const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;
        Toastify({
          text: `Agregaste ${producto.nombre} al carrito`,
          duration: 2000,
          position:"center",
          }).showToast();
      } )
        })


//funcion de filtrado por categoria
function filtrarPorCategoria(categoria){
      document.getElementById("cardsProducts").innerHTML = ""
      const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)   
      productosFiltrados.forEach((producto) => {
        const idBoton = `agregarCarrito ${producto.id}`
        document.getElementById("cardsProducts").innerHTML +=
         `<div class='card d-flex  col-4'>
          <h2>${producto.nombre}</h2>
          <img src = ${producto.img} style="width:200px">
          <p>$${producto.precio}</p>
          <button id="${idBoton}">Agregar al carrito</button>
          </div>`
    })}
    
// funcion para mostrar los elementos del carrito
  function mostrarCarrito(){
    document.getElementById("cardsModal").innerHTML = "" 
    carrito.forEach((producto) =>
    {document.getElementById("cardsModal").innerHTML +=
    `<div>
   <p> ${producto.nombre}</p>
   <img src="${producto.img}" style="width:80px">
   <p>$${producto.precio}</p>
   <button id="botonEliminar" type="button" onclick="borrarDelCarrito(${producto.id})">borrar producto </button>
   </div>`
  })}


   //funcion para borrar elementos del carrito
   function borrarDelCarrito(idProducto) {
       const index = carrito.findIndex((producto) => producto.id === idProducto)
       if (index != -1){
       carrito.splice(index, 1)}
       mostrarCarrito()
       const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
       localStorage.setItem("carrito", JSON.stringify(carrito));
       document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;
      }

    
 function comprar(){
      {Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra !',
    })}
  carrito.splice(0,carrito.length)
  mostrarCarrito()
  const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;
  }

  function vaciarCarrito(){
    {Swal.fire({
      icon: 'warning',
      title: 'Tu carrito está vacio',
      text:'Puedes volver a agregar tus productos cuando desees!'
  })}
    carrito.splice(0,carrito.length)
  mostrarCarrito()
  const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;
  }