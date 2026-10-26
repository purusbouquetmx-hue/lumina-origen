// ===== BASE DE DATOS DE PRODUCTOS (62 PIEZAS) =====
const productsDB = [
    // ANILLOS (1-18)
    { id: 'anillo-001', name: 'Anillo Serpiente Dorada', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-001.jpg', url: 'pages/producto.html', description: 'Serpiente completa dorada con ojos verdes y piedritas blancas' },
    { id: 'anillo-002', name: 'Anillo Corazón Verde', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-002.jpg', url: 'pages/producto.html', description: 'Anillo dorado con corazón verde grande e incrustaciones pequeñas' },
    { id: 'anillo-003', name: 'Anillo Serpiente Delgada', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-003.jpg', url: 'pages/producto.html', description: 'Serpiente delgada con incrustaciones y gema transparente en la boca' },
    { id: 'anillo-004', name: 'Anillo Gema con Incrustación', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-004.jpg', url: 'pages/producto.html', description: 'Anillo con gema grande e incrustación al final' },
    { id: 'anillo-005', name: 'Anillo Corazón con Piedras', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-005.jpg', url: 'pages/producto.html', description: 'Corazón grande con seis piedras redondas, tres en cada lado, todo dorado' },
    { id: 'anillo-006', name: 'Anillo Gema Corazón', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-006.jpg', url: 'pages/producto.html', description: 'Gema con forma de corazón y piedra redonda incrustada al final' },
    { id: 'anillo-007', name: 'Anillo Corazón Rojo', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-007.jpg', url: 'pages/producto.html', description: 'Gema corazón rojo central con seis piedras redondas, tres en cada lado' },
    { id: 'anillo-008', name: 'Anillo Texturizado', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-008.jpg', url: 'pages/producto.html', description: 'Anillo texturizado con microincrustaciones' },
    { id: 'anillo-009', name: 'Anillo Corazón Facetado', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-009.jpg', url: 'pages/producto.html', description: 'Gema corazón grande central con incrustaciones facetadas rectangulares laterales' },
    { id: 'anillo-010', name: 'Anillo Tres Semiaros', category: 'ANILLOS', cost: 40, price: 580, image: 'images/anillo-010.jpg', url: 'pages/producto.html', description: 'Tres semiaros delgados con incrustaciones' },
    { id: 'anillo-011', name: 'Anillo Tiara', category: 'ANILLOS', cost: 30, price: 480, image: 'images/anillo-011.jpg', url: 'pages/producto.html', description: 'Tiara con incrustaciones laterales' },
    { id: 'anillo-012', name: 'Anillo Diamante Baguette', category: 'ANILLOS', cost: 30, price: 480, image: 'images/anillo-012.jpg', url: 'pages/producto.html', description: 'Diamante redondo engastado a calibre con tres alas de diamantes baguette' },
    { id: 'anillo-013', name: 'Anillo Corazón con Corazones', category: 'ANILLOS', cost: 30, price: 480, image: 'images/anillo-013.jpg', url: 'pages/producto.html', description: 'Gema corazón grande sin color con incrustaciones laterales de corazones' },
    { id: 'anillo-014', name: 'Anillo Panal de Abeja', category: 'ANILLOS', cost: 25, price: 450, image: 'images/anillo-014.jpg', url: 'pages/producto.html', description: 'Panal de abeja con detalles blancos e incrustaciones' },
    { id: 'anillo-015', name: 'Anillo Niña', category: 'ANILLOS', cost: 25, price: 450, image: 'images/anillo-015.jpg', url: 'pages/producto.html', description: 'Figura de niña con incrustaciones' },
    { id: 'anillo-016', name: 'Anillo Niño', category: 'ANILLOS', cost: 25, price: 450, image: 'images/anillo-016.jpg', url: 'pages/producto.html', description: 'Figura de niño con incrustaciones' },
    { id: 'anillo-017', name: 'Anillo Catarina con Cola', category: 'ANILLOS', cost: 15, price: 380, image: 'images/anillo-017.jpg', url: 'pages/producto.html', description: 'Catarina con cola y incrustaciones' },
    { id: 'anillo-018', name: 'Anillo Catarina con Línea', category: 'ANILLOS', cost: 15, price: 380, image: 'images/anillo-018.jpg', url: 'pages/producto.html', description: 'Catarina con línea inferior e incrustaciones' },
    
    // PULSERAS (19-32)
    { id: 'pulsera-019', name: 'Pulsera Trébol con Incrustaciones', category: 'PULSERAS', cost: 90, price: 1280, image: 'images/pulsera-019.jpg', url: 'pages/producto.html', description: 'Centro trébol con incrustaciones laterales doradas' },
    { id: 'pulsera-020', name: 'Pulsera Tachuela Gigante', category: 'PULSERAS', cost: 90, price: 1280, image: 'images/pulsera-020.jpg', url: 'pages/producto.html', description: 'Tipo tachuela gigante con cabezas y puntas con incrustaciones' },
    { id: 'pulsera-021', name: 'Pulsera Cuerda Moño', category: 'PULSERAS', cost: 48, price: 720, image: 'images/pulsera-021.jpg', url: 'pages/producto.html', description: 'Cuerda hecha moño elegante' },
    { id: 'pulsera-022', name: 'Brazalete Hoja Dorada', category: 'PULSERAS', cost: 60, price: 850, image: 'images/pulsera-022.jpg', url: 'pages/producto.html', description: 'Brazalete rígido tipo cuff con filigrana de hoja calada' },
    { id: 'pulsera-023', name: 'Pulsera Resorte Rizado', category: 'PULSERAS', cost: 48, price: 720, image: 'images/pulsera-023.jpg', url: 'pages/producto.html', description: 'Resorte rizado con guía lisa' },
    { id: 'pulsera-024', name: 'Pulsera Hexágonos Dorados', category: 'PULSERAS', cost: 48, price: 720, image: 'images/pulsera-024.jpg', url: 'pages/producto.html', description: 'Hexágonos dorados con incrustaciones, ajustable' },
    { id: 'pulsera-025', name: 'Pulsera Pecesitos Rosas', category: 'PULSERAS', cost: 30, price: 480, image: 'images/pulsera-025.jpg', url: 'pages/producto.html', description: 'Pulsera dorada con pecesitos rosas' },
    { id: 'pulsera-026', name: 'Pulsera Pecesitos Rosas II', category: 'PULSERAS', cost: 30, price: 480, image: 'images/pulsera-026.jpg', url: 'pages/producto.html', description: 'Pulsera dorada con pecesitos rosas (variante)' },
    { id: 'pulsera-027', name: 'Pulsera Trébol Dorado', category: 'PULSERAS', cost: 30, price: 480, image: 'images/pulsera-027.jpg', url: 'pages/producto.html', description: 'Trébol dorado con esferas blancas brillantes' },
    { id: 'pulsera-028', name: 'Pulsera Flor Baguette', category: 'PULSERAS', cost: 90, price: 1280, image: 'images/pulsera-028.jpg', url: 'pages/producto.html', description: 'Brazalete rígido con eslabones baguette y flor central pavé' },
    { id: 'pulsera-029', name: 'Pulsera Grecas y Eslabones', category: 'PULSERAS', cost: 90, price: 1280, image: 'images/pulsera-029.jpg', url: 'pages/producto.html', description: 'Dorada con centro de incrustaciones, grecas laterales y eslabones' },
    { id: 'pulsera-030', name: 'Pulsera Hexagonal Plateada', category: 'PULSERAS', cost: 50, price: 750, image: 'images/pulsera-030.jpg', url: 'pages/producto.html', description: 'Eslabones plateados con centro hexagonal' },
    { id: 'pulsera-031', name: 'Pulsera Eslabón Grabado', category: 'PULSERAS', cost: 37, price: 550, image: 'images/pulsera-031.jpg', url: 'pages/producto.html', description: 'Dorada con eslabones cruzados grabados' },
    { id: 'pulsera-032', name: 'Pulsera Puntas con Incrustaciones', category: 'PULSERAS', cost: 50, price: 750, image: 'images/pulsera-032.jpg', url: 'pages/producto.html', description: 'Puntas doradas con 4 eslabones con incrustaciones, ajustable' },
    
    // CADENAS (33-34)
    { id: 'cadena-033', name: 'Cadena Fina Plateada', category: 'CADENAS', cost: 25, price: 450, image: 'images/cadena-033.jpg', url: 'pages/producto.html', description: 'Cadena fina plateada pequeña y delicada' },
    { id: 'cadena-034', name: 'Cadena Gruesa Dorada', category: 'CADENAS', cost: 25, price: 450, image: 'images/cadena-034.jpg', url: 'pages/producto.html', description: 'Cadena gruesa dorada grande y llamativa' },
    
    // BRAZALETES (35)
    { id: 'brazalete-035', name: 'Brazalete Hojas con Perlas', category: 'BRAZALETES', cost: 48, price: 720, image: 'images/brazalete-035.jpg', url: 'pages/producto.html', description: 'Hojas doradas con perlas blancas' },
    
    // SETS DIJE + ARETES (36-43)
    { id: 'set-036', name: 'Set Corazones con Incrustaciones', category: 'SETS', cost: 45, price: 680, image: 'images/set-036.jpg', url: 'pages/producto.html', description: 'Aretes, dije y cadena de corazones dorados con incrustaciones' },
    { id: 'set-037', name: 'Set Corazón Rosa/Dorado', category: 'SETS', cost: 45, price: 680, image: 'images/set-037.jpg', url: 'pages/producto.html', description: 'Dije y aretes de corazón mitad rosa y mitad dorado' },
    { id: 'set-038', name: 'Set Gema Negra', category: 'SETS', cost: 45, price: 680, image: 'images/set-038.jpg', url: 'pages/producto.html', description: 'Dije y aretes con gema negra central rodeada de incrustaciones' },
    { id: 'set-039', name: 'Set Gema Blanca', category: 'SETS', cost: 45, price: 680, image: 'images/set-039.jpg', url: 'pages/producto.html', description: 'Dije y aretes con gema blanca central rodeada de incrustaciones' },
    { id: 'set-040', name: 'Set Virgen Guadalupe', category: 'SETS', cost: 45, price: 680, image: 'images/set-040.jpg', url: 'pages/producto.html', description: 'Dije corazón plateado con Virgen de Guadalupe dorada y aretes' },
    { id: 'set-041', name: 'Set San Judas Tadeo I', category: 'SETS', cost: 45, price: 680, image: 'images/set-041.jpg', url: 'pages/producto.html', description: 'Dije San Judas Tadeo con incrustaciones y aretes' },
    { id: 'set-042', name: 'Set San Judas Tadeo II', category: 'SETS', cost: 45, price: 680, image: 'images/set-042.jpg', url: 'pages/producto.html', description: 'Dije San Judas Tadeo con incrustaciones y aretes (variante)' },
    { id: 'set-043', name: 'Set Rosa Dorada', category: 'SETS', cost: 50, price: 750, image: 'images/set-043.jpg', url: 'pages/producto.html', description: 'Dije rosa dorada con hojas verdes, incrustaciones y aretes' },
    
    // ARETES (44-56)
    { id: 'aretes-044', name: 'Aretes Espiral Estrella', category: 'ARETES', cost: 35, price: 520, image: 'images/aretes-044.jpg', url: 'pages/producto.html', description: 'Aretes en espiral con forma de estrella dorada' },
    { id: 'aretes-045', name: 'Aretes Cascada Esferas', category: 'ARETES', cost: 70, price: 980, image: 'images/aretes-045.jpg', url: 'pages/producto.html', description: 'Aretes largos con cuatro esferas doradas en gradación' },
    { id: 'aretes-046', name: 'Aretes Concha', category: 'ARETES', cost: 45, price: 680, image: 'images/aretes-046.jpg', url: 'pages/producto.html', description: 'Aretes con forma de concha e incrustaciones' },
    { id: 'aretes-047', name: 'Aretes Corazón Nácar', category: 'ARETES', cost: 48, price: 720, image: 'images/aretes-047.jpg', url: 'pages/producto.html', description: 'Centro corazón blanco nácar con extensiones doradas e incrustaciones' },
    { id: 'aretes-048', name: 'Aretes Aros con Gema', category: 'ARETES', cost: 30, price: 480, image: 'images/aretes-048.jpg', url: 'pages/producto.html', description: 'Aros superiores grandes con incrustaciones y gema pequeña abajo' },
    { id: 'aretes-049', name: 'Aros Plateados Lisos', category: 'ARETES', cost: 23, price: 450, image: 'images/aretes-049.jpg', url: 'pages/producto.html', description: 'Aros plateados lisos con bisagra' },
    { id: 'aretes-050', name: 'Aretes Catarinas', category: 'ARETES', cost: 30, price: 480, image: 'images/aretes-050.jpg', url: 'pages/producto.html', description: 'Aretes completos con forma de catarina' },
    { id: 'aretes-051', name: 'Aretes Arcos con Gema', category: 'ARETES', cost: 30, price: 480, image: 'images/aretes-051.jpg', url: 'pages/producto.html', description: 'Arcos superiores grandes con incrustaciones y gema pequeña' },
    { id: 'aretes-052', name: 'Aro Ojo de Tigre', category: 'ARETES', cost: 10, price: 350, image: 'images/aretes-052.jpg', url: 'pages/producto.html', description: 'Aro dorado superior con bisagra, incrustaciones y cabeza de tigre de lámina' },
    { id: 'aretes-053', name: 'Aretes Eslabón Rectangular', category: 'ARETES', cost: 30, price: 480, image: 'images/aretes-053.jpg', url: 'pages/producto.html', description: 'Eslabón grande grueso liso plateado rectangular' },
    { id: 'aretes-054', name: 'Aretes Corazón Rojo', category: 'ARETES', cost: 25, price: 450, image: 'images/aretes-054.jpg', url: 'pages/producto.html', description: 'Aro dorado con rojo y corazón colgante con gema roja incrustada' },
    { id: 'aretes-055', name: 'Aretes Cuadros Dorados', category: 'ARETES', cost: 25, price: 450, image: 'images/aretes-055.jpg', url: 'pages/producto.html', description: 'Cuadros dorados con incrustaciones y gema cuadrada grande' },
    { id: 'aretes-056', name: 'Aretes Semiaro Eslabonado', category: 'ARETES', cost: 18, price: 420, image: 'images/aretes-056.jpg', url: 'pages/producto.html', description: 'Semiaro dorado eslabonado fijo con bisagra' },
    
    // DIJES (57-62)
    { id: 'dije-057', name: 'Dije Figura con Espada', category: 'DIJES', cost: 35, price: 520, image: 'images/dije-057.jpg', url: 'pages/producto.html', description: 'Figura dorada con espada e incrustaciones' },
    { id: 'dije-058', name: 'Dije Mariposa Color', category: 'DIJES', cost: 25, price: 450, image: 'images/dije-058.jpg', url: 'pages/producto.html', description: 'Mariposa con incrustaciones de color' },
    { id: 'dije-059', name: 'Dije Flor con Pétalos', category: 'DIJES', cost: 30, price: 480, image: 'images/dije-059.jpg', url: 'pages/producto.html', description: 'Centro flor dorada con florecitas de seis pétalos e incrustaciones' },
    { id: 'dije-060', name: 'Dije Flor con Pétalos II', category: 'DIJES', cost: 30, price: 480, image: 'images/dije-060.jpg', url: 'pages/producto.html', description: 'Centro flor dorada con florecitas de seis pétalos e incrustaciones (variante)' },
    { id: 'dije-061', name: 'Dije Oso con Corazón', category: 'DIJES', cost: 37, price: 550, image: 'images/dije-061.jpg', url: 'pages/producto.html', description: 'Oso dorado con incrustaciones y corazón pequeño en el centro' },
    { id: 'dije-062', name: 'Dije Llave', category: 'DIJES', cost: 35, price: 520, image: 'images/dije-062.jpg', url: 'pages/producto.html', description: 'Llave con incrustaciones' }
];

// ===== VARIABLES GLOBALES Y UTILIDADES =====
function getCartCount() {
    return parseInt(localStorage.getItem('luminaCartCount')) || 0;
}

function updateCartUI() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        const count = getCartCount();
        cartCountElement.textContent = count;
        cartCountElement.style.transform = 'scale(1.4)';
        setTimeout(() => { cartCountElement.style.transform = 'scale(1)'; }, 200);
    }
}

// ===== MENÚ MÓVIL =====
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.toggle('active');
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== NAVBAR STICKY =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.boxShadow = window.scrollY > 100 ? '0 2px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// ===== PARTÍCULAS Y ANIMACIONES SCROLL =====
function createParticles() {
    if (document.querySelector('.particles-container')) return;
    const container = document.createElement('div');
    container.className = 'particles-container';
    document.body.appendChild(container);
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// ===== MODAL DE BÚSQUEDA =====
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.getElementById('searchModal');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('open');
        setTimeout(() => searchInput && searchInput.focus(), 300);
    });
}

if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('open');
        if (searchInput) searchInput.value = '';
    });
}

if (searchModal) {
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('open');
            if (searchInput) searchInput.value = '';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('open')) {
        searchModal.classList.remove('open');
        if (searchInput) searchInput.value = '';
    }
});

if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            searchResults.innerHTML = `<div class="search-empty"><i class="fas fa-search"></i><p>Escribe para buscar productos</p></div>`;
            return;
        }
        const filteredProducts = productsDB.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        if (filteredProducts.length === 0) {
            searchResults.innerHTML = `<div class="search-empty"><i class="fas fa-search"></i><p>No encontramos productos con "${query}"</p></div>`;
        } else {
            searchResults.innerHTML = filteredProducts.map(product => `
                <a href="${product.url}" class="search-result-item">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80'">
                    <div class="search-result-info">
                        <div class="result-category">${product.category}</div>
                        <h4>${product.name}</h4>
                        <div class="result-price">$${product.price} MXN</div>
                    </div>
                </a>
            `).join('');
        }
    });
}

document.querySelectorAll('.suggestion-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        if (searchInput) {
            const searchTerm = tag.getAttribute('data-search');
            searchInput.value = searchTerm;
            searchInput.dispatchEvent(new Event('input'));
        }
    });
});

// ===== SISTEMA DE FAVORITOS =====
function toggleFavorite(productId, btnElement) {
    let favorites = JSON.parse(localStorage.getItem('luminaFavorites')) || [];
    const icon = btnElement.querySelector('i');
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        icon.classList.remove('fas');
        icon.classList.add('far');
        btnElement.style.color = '';
    } else {
        favorites.push(productId);
        icon.classList.remove('far');
        icon.classList.add('fas');
        btnElement.style.color = '#D4AF37';
        icon.style.transform = 'scale(1.3)';
        setTimeout(() => { icon.style.transform = 'scale(1)'; }, 200);
    }
    localStorage.setItem('luminaFavorites', JSON.stringify(favorites));
}

// ===== CARRITO DE COMPRAS REAL =====
function getCartItems() {
    return JSON.parse(localStorage.getItem('luminaCartItems')) || [];
}

function saveCartItems(items) {
    localStorage.setItem('luminaCartItems', JSON.stringify(items));
    updateCartUI();
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cartTotal');
    const items = getCartItems();
    if (!cartItemsContainer || !cartTotalElement) return;

    if (items.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Tu carrito está vacío</p>
            </div>`;
        cartTotalElement.textContent = '$0 MXN';
        return;
    }

    let total = 0;
    let html = '';

    items.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <div class="cart-item" style="display: flex; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid var(--color-border); padding-bottom: 15px;">
                <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;" onerror="this.src='https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80'">
                <div style="flex: 1;">
                    <h4 style="font-size: 14px; margin-bottom: 5px; font-family: var(--font-serif);">${item.name}</h4>
                    <p style="font-size: 13px; color: var(--color-text-light);">Cantidad: ${item.qty}</p>
                    <p style="font-size: 15px; font-weight: 700; color: var(--color-primary);">$${subtotal} MXN</p>
                </div>
                <button class="remove-item" data-index="${index}" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 18px; align-self: flex-start;" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    cartTotalElement.textContent = `$${total} MXN`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            const items = getCartItems();
            items.splice(index, 1);
            saveCartItems(items);
        });
    });
}

// ===== INICIALIZACIÓN GLOBAL =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderCart();
    createParticles();
    initScrollAnimations();

    // Agregar productos al carrito
    document.querySelectorAll('.add-to-cart-real').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'));
            const image = btn.getAttribute('data-image');

            let items = getCartItems();
            const existingItem = items.find(item => item.id === id);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                items.push({ id, name, price, image, qty: 1 });
            }

            saveCartItems(items);

            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡AGREGADO!';
            btn.style.backgroundColor = 'var(--color-secondary)';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.backgroundColor = '';
            }, 1500);
        });
    });

    // Checkout por WhatsApp
    const checkoutBtn = document.querySelector('.cart-checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const items = getCartItems();
            if (items.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }
            let message = '¡Hola LUMINA ORIGEN! Me gustaría hacer el siguiente pedido:%0A%0A';
            let total = 0;
            items.forEach(item => {
                const subtotal = item.price * item.qty;
                total += subtotal;
                message += `▪️ ${item.qty}x ${item.name} - $${subtotal} MXN%0A`;
            });
            message += `%0A*Total: $${total} MXN*%0A%0AQuedo atento a los datos de pago y envío. ¡Gracias!`;
            const phone = '5215515876781';
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    }

    // Inicializar favoritos
    const favorites = JSON.parse(localStorage.getItem('luminaFavorites')) || [];
    document.querySelectorAll('.add-to-fav-btn').forEach(btn => {
        const productId = btn.getAttribute('data-id');
        const icon = btn.querySelector('i');
        if (favorites.includes(productId)) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.style.color = '#D4AF37';
        }
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleFavorite(productId, btn);
        });
    });
});

// ===== CARRITO LATERAL =====
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');

if (cartBtn && cartSidebar) {
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
    });
}

if (cartClose && cartSidebar) {
    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
    });
}

if (cartOverlay && cartSidebar) {
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    });
}

// ===== NEWSLETTER =====
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) { alert('¡Gracias por suscribirte!'); newsletterForm.reset(); }
    });
}

// ===== ACTUALIZAR NAVBAR SEGÚN SESIÓN =====
const user = localStorage.getItem('luminaUser');
const accountLink = document.querySelector('.top-links a[href*="cuenta"]');
if (user && accountLink) {
    const userData = JSON.parse(user);
    accountLink.innerHTML = `<i class="fas fa-user-check"></i> ${userData.name}`;
    accountLink.style.color = 'var(--color-secondary)';
}

// ===== HERO CAROUSEL (FUNCIONES GLOBALES) =====
let currentSlideIndex = 0;
let autoSlideInterval;

function getSlides() {
    return document.querySelectorAll('.hero-slide');
}

function getDots() {
    return document.querySelectorAll('.dot');
}

function showSlide(index) {
    const slides = getSlides();
    const dots = getDots();
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlideIndex = index;
}

function changeSlide(direction) {
    const slides = getSlides();
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    let newIndex = currentSlideIndex + direction;
    if (newIndex >= totalSlides) newIndex = 0;
    else if (newIndex < 0) newIndex = totalSlides - 1;
    showSlide(newIndex);
    resetAutoSlide();
}

function currentSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

function nextSlide() {
    changeSlide(1);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function initHeroCarousel() {
    const slides = getSlides();
    if (slides.length === 0) return;
    showSlide(0);
    resetAutoSlide();
    const carousel = document.querySelector('.hero-carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => { clearInterval(autoSlideInterval); });
        carousel.addEventListener('mouseleave', () => { resetAutoSlide(); });
    }
}

document.addEventListener('DOMContentLoaded', initHeroCarousel);

// ===== LIGHTBOX PARA IMÁGENES DE PRODUCTOS =====
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightboxModal) return;

    function openLightbox(imageSrc, caption) {
        lightboxImage.src = imageSrc;
        if (lightboxCaption && caption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightboxModal.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { if (lightboxImage) lightboxImage.src = ''; }, 400);
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => { if (e.target === lightboxModal) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('open')) closeLightbox();
    });

    document.querySelectorAll('.collection-card img, .product-image-zoom').forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imageSrc = img.src;
            const card = img.closest('.collection-card');
            const caption = card ? card.querySelector('h3')?.textContent : '';
            openLightbox(imageSrc, caption);
        });
    });
});