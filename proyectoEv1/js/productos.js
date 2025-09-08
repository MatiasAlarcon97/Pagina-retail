let carrito = [];

function añadirAlCarrito(precio) {
  carrito.push(precio); // Añadimos el precio al array
}

function mostrarTotalCarrito() {
  // Sumar todos los precios del carrito
  const total = carrito.reduce((acum, precio) => acum + precio, 0);

  // Mostrar el total en el elemento con id="total-carrito"
  document.getElementById("total-carrito").textContent = 
    `Total del carrito: $${total.toLocaleString("es-CL")}`;
}