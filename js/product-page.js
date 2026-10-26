// ===== LÓGICA DE LA GALERÍA DE IMÁGENES =====
function changeImage(thumbnail) {
    // Cambiar la imagen principal
    const mainImg = document.getElementById('mainImg');
    mainImg.src = thumbnail.src.replace('w=200', 'w=800'); // Ajustamos la calidad de la imagen
    
    // Quitar clase active de todas las miniaturas
    document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
    // Agregar clase active a la clickeada
    thumbnail.classList.add('active');
}

// ===== LÓGICA DEL SELECTOR DE CANTIDAD =====
function updateQty(change) {
    const qtyInput = document.getElementById('qtyInput');
    let currentQty = parseInt(qtyInput.value);
    let newQty = currentQty + change;
    
    if (newQty >= 1) {
        qtyInput.value = newQty;
    }
}

// ===== LÓGICA DEL CARRITO DE COMPRAS (BÁSICO) =====
// Usamos localStorage para que el carrito no se borre al cambiar de página
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar el contador guardado
    let cartCount = parseInt(localStorage.getItem('luminaCartCount')) || 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Función para actualizar el número en el navbar
    function updateCartUI() {
        if(cartCountElement) {
            cartCountElement.textContent = cartCount;
            // Pequeña animación al cambiar
            cartCountElement.style.transform = 'scale(1.4)';
            setTimeout(() => { cartCountElement.style.transform = 'scale(1)'; }, 200);
        }
    }
    
    // Ejecutar al cargar la página
    updateCartUI();

    // 2. Evento para el botón "Agregar al carrito"
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Obtener la cantidad seleccionada
            const qty = parseInt(document.getElementById('qtyInput').value);
            
            // Sumar al total
            cartCount += qty;
            
            // Guardar en la memoria del navegador
            localStorage.setItem('luminaCartCount', cartCount);
            
            // Actualizar la vista
            updateCartUI();
            
            // Feedback visual en el botón
            const originalHTML = addToCartBtn.innerHTML;
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> ¡AGREGADO AL CARRITO!';
            addToCartBtn.style.backgroundColor = 'var(--color-secondary)';
            
            // Regresar el botón a la normalidad después de 2 segundos
            setTimeout(() => {
                addToCartBtn.innerHTML = originalHTML;
                addToCartBtn.style.backgroundColor = '';
            }, 2000);
        });
    }
});