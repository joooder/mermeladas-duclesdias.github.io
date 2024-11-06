let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({name: productName, price: productPrice});
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Q${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);    
}

function realizarCompra() {
            window.location.href = "formulario.html";
        }
        
    
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (query.includes('jalea de fresa')) {
        window.location.href = 'productos.html';
    } else if (query.includes('mermelada de fresa')) {
        window.location.href = 'productos.html';
    } else if (query.includes('piña')) {
    } else if (query.includes('jalea de piña')) {
    } else if (query.includes('mermelada de piña')) {
        window.location.href = 'productos.html';
        window.location.href = 'productos.html';
        window.location.href = 'productos.html';
    } else if (query.includes('fresa')) {
        window.location.href = 'productos.html';
    } else if (query.includes('productos')) {
        window.location.href = 'productos.html';
    } else if (query.includes('nosotros')) {
        window.location.href = 'nosotros.html';
    } else if (query.includes('servicios')) {
        window.location.href = 'servicios.html';
    } else if (query.includes('contacto')) {
        window.location.href = 'contacto.html';
    } else {
        alert('No se encontraron resultados para tu búsqueda.');
    }
}
// Función para generar la información del carrito como texto
function generarInfoCarrito() {
    const cart = document.getElementById("cart.items").getElementsByTagName("li");
    let infoCarrito = "";
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        infoCarrito += `Nombre: ${item.getAttribute("data-nombre")}, Cantidad: ${item.getAttribute("data-cantidad")}, Precio: ${item.getAttribute("data-precio")}\n`;
    }
    return infoCarrito;
}

// Rellena el formulario con los datos del carrito
window.onload = function() {
    document.getElementById("carritoInfo").value = generarInfoCarrito();
};

