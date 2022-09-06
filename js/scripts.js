
const carrito= JSON.parse(localStorage.getItem("carrito")) ?? []; 
datosCarrito()

const productos = []

const mostrarProductos= ()=>{
  fetch('productos.json')
  .then (response => response.json())
    .then (info => {
      crearCards(info)
      agregarAlCarrito(info)
      productos.push(...info)
    })}

    mostrarProductos()

function crearCards(array){
array.forEach((producto) => {
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById("cardsProducts").innerHTML +=
     `<div class="cards">
      <img src = ${producto.img} id="imgCards">
      <h2 class="tituloCard">${producto.nombre}</h2>
      <p>$${producto.precio}</p>
      <button class="botonAgregar"id="${idBoton}">Agregar al carrito</button>
      </div>`})}

function agregarAlCarrito(array){
array.forEach((producto) =>{
    const idBoton = `agregarCarrito ${producto.id}`
    document.getElementById(idBoton).addEventListener  ('click',() => {
        carrito.push(producto);
        datosCarrito();
        Toastify({
          text: `Agregaste ${producto.nombre} al carrito`,
          duration: 1500,
          position:"center",
          }).showToast();
      } )
        })}
      

function filtrarPorCategoria(categoria){
      document.getElementById("cardsProducts").innerHTML = ""
      const productosFiltrados =  productos.filter((producto) => producto.categoria === categoria)   
       crearCards(productosFiltrados)
       agregarAlCarrito(productosFiltrados)
       }
    
  function mostrarCarrito(){
    document.getElementById("cardsModal").innerHTML = "" 
    carrito.forEach((producto) =>
    {document.getElementById("cardsModal").innerHTML +=
    `<div>
   <p> ${producto.nombre}</p>
   <img src="${producto.img}" id="imgCarrito">
   <p>$${producto.precio}</p>
   <button id="botonEliminar" type="button" onclick="borrarDelCarrito(${producto.id})">borrar producto </button>
   </div>`})}

function datosCarrito(){
  const total= carrito.reduce((acc,producto) =>acc + producto.precio ,0);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("cart-number").innerHTML = carrito.length + " - $"+total;}

function borrarDelCarrito(idProducto) {
       const index = carrito.findIndex((producto) => producto.id === idProducto)
       if (index != -1){
       carrito.splice(index, 1)}
       mostrarCarrito()
       datosCarrito();}

 function comprar(){
      {Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra !',})}
  carrito.splice(0,carrito.length)
  mostrarCarrito()
  datosCarrito();}

  function vaciarCarrito(){
    {Swal.fire({
      icon: 'warning',
      title: 'Tu carrito está vacio',
      text:'Puedes volver a agregar tus productos cuando desees!'})}
    carrito.splice(0,carrito.length)
  mostrarCarrito();
  datosCarrito();}