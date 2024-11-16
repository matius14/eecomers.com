
const cart = [];
const cartElement = document.getElementById("cart");
const totalElement = document.getElementById("total"); 
const buttons = document.querySelectorAll(".agregar-a-cart");


function renderCart() {

  cartElement.innerHTML = "";

  
  if (cart.length === 0) {
    cartElement.innerHTML = "<li>El carrito está vacío</li>";
    totalElement.textContent = "0"; 
    return;
  }


  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartElement.appendChild(li);
  });

  
  actualizarTotal();
}


function actualizarTotal() {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalElement.textContent = total.toFixed(2); 
}


function addToCart(product) {
 
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1; 
  } else {
    cart.push({ ...product, quantity: 1 }); 
  }


  renderCart();
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    
    const id = parseInt(button.getAttribute("data-id"));
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

   
    addToCart({ id, name, price });

    console.log(`Añadido al carrito: ${name} ($${price})`);
  });
});


renderCart();

