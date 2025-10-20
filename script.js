// Product Data
const products = [
    {
        id: 1,
        name: "Ciki citato lite",
        category: "original",
        price: 7000,
        oldPrice: 12000,
        rating: 4.5,
        reviews: 128,
        description: "Ciki Citato Lite rasa original dengan kerenyahan khas yang bikin nagih. Cocok untuk menemani waktu santai, nonton, atau nongkrong bareng teman.",
        image: "/image2/ciki 1.jpg",
        badge: "hot",
        variants: [
            { name: "Pedas Biasa", price: 12000 },
            { name: "Pedas Extra", price: 15000 },
            { name: "Pedas Level 10", price: 18000 }
        ]
    },
    {
        id: 2,
        name: "Ciki citati mie goreng",
        category: "gurih",
        price: 8000,
        oldPrice: 13000,
        rating: 4.8,
        reviews: 95,
        description: "Ciki Citato Lite rasa Mie Goreng — kombinasi gurih, asin, dan sedikit manis yang mirip mie goreng legendaris. Kerenyahan maksimal dengan aroma khas yang bikin lapar terus.",
        image: "/image2/ciki 2.png",
        badge: "new",
        variants: [
            { name: "Keju Original", price: 13000 },
            { name: "Keju Extra", price: 16000 },
            { name: "Keju Premium", price: 19000 }
        ]
    },
    {
        id: 3,
        name: "Ciki lays rumput laut",
        category: "snack",
        price: 6000,
        oldPrice: 11000,
        rating: 4.3,
        reviews: 76,
        description: "Lays Rumput Laut menghadirkan kerenyahan kentang pilihan dengan balutan bumbu rumput laut yang gurih dan aromatik. Setiap gigitan memberikan rasa laut yang khas dan bikin nagih.",
        image: "/image2/ciki 3.jpg",
        variants: [
            { name: "Jagung Bakar Original", price: 11000 },
            { name: "Jagung Bakar Pedas", price: 13000 }
        ]
    },
    {
        id: 4,
        name: "Ciki doritos",
        category: "pedas",
        price: 9500,
        oldPrice: 14000,
        rating: 4.6,
        reviews: 112,
        description: "Doritos Jagung Bakar menghadirkan sensasi renyah khas tortilla chips berpadu dengan rasa jagung bakar yang gurih, manis, dan sedikit smoky. Camilan favorit yang bikin susah berhenti ngemil.",
        image: "/image2/ciki 4.jpg",
        badge: "hot",
        variants: [
            { name: "Balado Original", price: 12500 },
            { name: "Balado Extra Pedas", price: 15000 }
        ]
    },
    {
        id: 5,
        name: "Ciki japota rumput laut ",
        category: "manis",
        price: 6000,
        oldPrice: 12000,
        rating: 4.4,
        reviews: 88,
        description: "japota Rumput Laut hadir dengan potongan kentang super renyah dan bumbu rumput laut asli yang gurih serta aromatik. Setiap gigitan bikin kamu serasa ngemil di pinggir pantai Jepang.",
        image: "/image2/ciki 5.jpg",
        variants: [
            { name: "BBQ Original", price: 14000 },
            { name: "BBQ Spicy", price: 16000 }
        ]
    },
    {
        id: 6,
        name: "Ciki japota ayam bawang",
        category: "gurih",
        price: 7500,
        oldPrice: 13000,
        rating: 4.7,
        reviews: 134,
        description: "Japota Ayam Bawang menghadirkan kelezatan rasa ayam gurih berpadu aroma bawang yang harum menggoda. Renyahnya kentang Japota membuat rasa klasik ini terasa makin istimewa di setiap gigitan.",
        image: "/image2/ciki 6.jpg",
        badge: "new",
        variants: [
            { name: "Rumput Laut Original", price: 15000 },
            { name: "Rumput Laut Pedas", price: 17000 }
        ]
    },
    {
        id: 7,
        name: "Ciki japota Sapi Panggang",
        category: "spesial",
        price: 7500,
        oldPrice: 1200,
        rating: 4.9,
        reviews: 67,
        description: "Japota Sapi Panggang menawarkan rasa daging sapi panggang premium dengan aroma smoky yang khas. Kentangnya tebal, gurih, dan renyah — bikin setiap gigitan terasa seperti makan steak mini.",
        image: "/image2/ciki 10.png",
        badge: "new",
        variants: [
            { name: "Sapi Panggang Original", price: 18000 },
            { name: "Sapi Panggang Black Pepper", price: 20000 }
        ]
    },
    {
        id: 8,
        name: "Ciki twist jagung bakar",
        category: "spesial",
        price: 6500,
        oldPrice: 12500,
        rating: 4.5,
        reviews: 91,
        description: "Ciki Twist Jagung Bakar menghadirkan sensasi gurih dan manis dari jagung bakar khas Indonesia. Teksturnya ringan, renyah, dan bikin susah berhenti ngemil. Cocok untuk semua suasana.",
        image: "/image2/ciki 11.png",
        variants: [
            { name: "Ayam Bakar Original", price: 16000 },
            { name: "Ayam Bakar Madu", price: 18000 }
        ]
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initSlider();
    initCart();
    initProductFilters();
    initToppingsModal();
    initFAQ();
    initBackToTop();
    initPromoTimer();
    initSmoothScroll();
    initWhatsAppOrders();
    initScrollAnimations();
    renderProducts(3); // Show only 3 products initially
    initViewMore();
    initProductSocialActions();
});

// Render Products
function renderProducts(limit = null) {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) return;
    
    productContainer.innerHTML = '';
    
    const productsToShow = limit ? products.slice(0, limit) : products;
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card ${product.comingSoon ? 'coming-soon' : ''}`;
    card.setAttribute('data-category', product.category);
    
    const badgeHTML = product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'hot' ? 'HOT' : 'BARU'}</div>` : '';
    
    const starsHTML = generateStars(product.rating);
    
    card.innerHTML = `
        <div class="product-image">
            <div class="image-container ${getRandomColor()}">
                <img alt="${product.name}" src="${product.image}"/>
            </div>
            ${badgeHTML}
            <div class="product-overlay">
                <button class="quick-add-btn add-to-cart" data-id="${product.id}" data-price="${product.price}" data-product="${product.name}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${starsHTML}
                </div>
                <span class="review-count">(${product.reviews})</span>
            </div>
            <p>${product.description}</p>
            <div class="product-footer">
                <div class="price">
                    <span class="current-price">Rp ${product.price.toLocaleString('id-ID')}</span>
                    <span class="old-price">Rp ${product.oldPrice.toLocaleString('id-ID')}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}" data-price="${product.price}" data-product="${product.name}">
                        <i class="fas fa-shopping-cart"></i>
                        Keranjang
                    </button>
                    <button class="whatsapp-order-btn" data-id="${product.id}" data-price="${product.price}" data-product="${product.name}">
                        <i class="fab fa-whatsapp"></i>
                        Pesan
                    </button>
                </div>
            </div>
            <div class="product-social-actions">
                <button class="social-action-btn like-btn" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                    <span>Suka</span>
                </button>
                <button class="social-action-btn share-btn" data-id="${product.id}">
                    <i class="fas fa-share-alt"></i>
                    <span>Bagikan</span>
                </button>
                <button class="social-action-btn bookmark-btn" data-id="${product.id}">
                    <i class="far fa-bookmark"></i>
                    <span>Simpan</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize Product Social Actions
function initProductSocialActions() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const button = e.target.closest('.like-btn');
            const icon = button.querySelector('i');
            const text = button.querySelector('span');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('liked');
                text.textContent = 'Disukai';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('liked');
                text.textContent = 'Suka';
            }
        }
        
        if (e.target.closest('.bookmark-btn')) {
            const button = e.target.closest('.bookmark-btn');
            const icon = button.querySelector('i');
            const text = button.querySelector('span');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('bookmarked');
                text.textContent = 'Disimpan';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('bookmarked');
                text.textContent = 'Simpan';
            }
        }
        
        if (e.target.closest('.share-btn')) {
            const button = e.target.closest('.share-btn');
            const productId = button.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            
            if (product && navigator.share) {
                navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href + '#produk'
                }).catch(err => {
                    console.log('Error sharing:', err);
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href + '#produk';
                const text = `Lihat ${product.name} di Mix & Crunch: ${product.description}`;
                
                // Copy to clipboard
                navigator.clipboard.writeText(text + ' ' + url).then(() => {
                    alert('Tautan produk berhasil disalin!');
                }).catch(err => {
                    console.log('Error copying:', err);
                });
            }
        }
    });
}

// Generate Stars
function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Get Random Color
function getRandomColor() {
    const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Navbar functionality
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const cartIcon = document.getElementById('cart-icon');
    const mobileCartIcon = document.getElementById('mobile-cart-icon');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cart icon functionality
    const cartIcons = [cartIcon, mobileCartIcon];
    cartIcons.forEach(icon => {
        if (icon) {
            icon.addEventListener('click', function() {
                openCartSidebar();
            });
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
}

// Slider functionality with swipe support
function initSlider() {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;
    
    if (!slider || slides.length === 0) return;
    
    function showSlide(index) {
        // Update active slide
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        // Update background color based on slide
        const color = slides[index].getAttribute('data-color');
        updateHeroBackground(color);
        
        currentSlide = index;
    }
    
    function updateHeroBackground(color) {
        const heroBg = document.querySelector('.hero-bg');
        if (!heroBg) return;
        
        const colors = {
            red: 'linear-gradient(135deg, #dc2626 0%, #7e22ce 100%)',
            yellow: 'linear-gradient(135deg, #d97706 0%, #7e22ce 100%)',
            green: 'linear-gradient(135deg, #059669 0%, #7e22ce 100%)',
            purple: 'linear-gradient(135deg, #7c3aed 0%, #7e22ce 100%)',
            orange: 'linear-gradient(135deg, #ea580c 0%, #7e22ce 100%)'
        };
        
        heroBg.style.background = colors[color] || colors.purple;
    }
    
    // Next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }
    
    // Previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Button navigation
    if (prevBtn) prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    // Touch swipe support
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    // Mouse swipe support
    slider.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        document.addEventListener('mouseup', handleMouseUp);
    });
    
    function handleMouseUp(e) {
        endX = e.clientX;
        handleSwipe();
        document.removeEventListener('mouseup', handleMouseUp);
    }
    
    function handleSwipe() {
        const diff = startX - endX;
        const swipeThreshold = 50;
        
        if (Math.abs(diff) > swipeThreshold) {
            clearInterval(slideInterval);
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            slideInterval = setInterval(nextSlide, 5000);
        }
    }
}

// Cart functionality
function initCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const mobileCartCount = document.querySelector('.mobile-cart .cart-count');
    const cartNotification = document.getElementById('cart-notification');
    const continueShopping = document.querySelector('.continue-shopping');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Toggle cart sidebar
    window.openCartSidebar = function() {
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    function closeCartSidebar() {
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
    
    if (continueShopping) {
        continueShopping.addEventListener('click', closeCartSidebar);
    }
    
    // Clear cart functionality
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Keranjang belanja sudah kosong!');
                return;
            }
            
            if (confirm('Apakah Anda yakin ingin menghapus semua item dari keranjang?')) {
                cart = [];
                updateCart();
                saveCartToStorage();
                alert('Keranjang belanja berhasil dikosongkan!');
            }
        });
    }
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart') || e.target.closest('.add-to-cart-btn')) {
            const button = e.target.closest('.add-to-cart') || e.target.closest('.add-to-cart-btn');
            
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-product');
            const productPrice = parseInt(button.getAttribute('data-price'));
            
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            
            updateCart();
            saveCartToStorage();
            showCartNotification();
            animateCartIcon();
        }
    });
    
    // Checkout functionality
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Keranjang belanja kosong. Silakan tambahkan produk terlebih dahulu.');
                return;
            }
            
            closeCartSidebar();
            openToppingsModal();
        });
    }
    
    // Update cart
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
        if (mobileCartCount) {
            mobileCartCount.textContent = totalItems;
        }
        
        // Update checkout button state
        if (checkoutBtn) {
            checkoutBtn.disabled = cart.length === 0;
        }
        
        // Update clear cart button state
        if (clearCartBtn) {
            clearCartBtn.disabled = cart.length === 0;
        }
        
        // Update cart items
        if (cartItems) {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Keranjang belanja kosong</p>
                        <small>Tambahkan produk untuk mulai berbelanja</small>
                    </div>
                `;
            } else {
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>Rp ${item.price.toLocaleString('id-ID')}</p>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="qty-btn decrease" data-id="${item.id}">-</button>
                                <span class="qty-display">${item.quantity}</span>
                                <button class="qty-btn increase" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                    cartItems.appendChild(cartItem);
                });
                
                // Add event listeners to quantity buttons
                document.querySelectorAll('.increase').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) {
                            item.quantity += 1;
                            updateCart();
                            saveCartToStorage();
                        }
                    });
                });
                
                document.querySelectorAll('.decrease').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item && item.quantity > 1) {
                            item.quantity -= 1;
                            updateCart();
                            saveCartToStorage();
                        }
                    });
                });
                
                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        cart = cart.filter(item => item.id !== id);
                        updateCart();
                        saveCartToStorage();
                    });
                });
            }
            
            // Update cart summary
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const total = subtotal;
            
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartTotal = document.getElementById('cart-total');
            
            if (cartSubtotal) {
                cartSubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
            }
            
            if (cartTotal) {
                cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
            }
        }
    }
    
    // Save cart to localStorage
    function saveCartToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Show cart notification
    function showCartNotification() {
        if (cartNotification) {
            cartNotification.style.display = 'flex';
            setTimeout(() => {
                cartNotification.style.display = 'none';
            }, 3000);
        }
    }
    
    // Animate cart icon
    function animateCartIcon() {
        const cartIcons = document.querySelectorAll('.cart-icon');
        cartIcons.forEach(icon => {
            icon.classList.add('animate');
            setTimeout(() => {
                icon.classList.remove('animate');
            }, 600);
        });
    }
    
    // Initialize cart on page load
    updateCart();
    
    // Expose functions for checkout
    window.getCart = () => cart;
    window.clearCart = () => {
        cart = [];
        updateCart();
        saveCartToStorage();
    };
}

// Toppings modal functionality
function initToppingsModal() {
    const toppingsModal = document.getElementById('toppings-modal');
    const closeToppings = document.querySelector('.close-toppings');
    const cancelToppings = document.getElementById('cancel-toppings');
    const confirmToppings = document.getElementById('confirm-toppings');
    
    // Open toppings modal
    window.openToppingsModal = function() {
        if (toppingsModal) {
            toppingsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    // Close toppings modal
    function closeToppingsModal() {
        if (toppingsModal) {
            toppingsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (closeToppings) {
        closeToppings.addEventListener('click', closeToppingsModal);
    }
    
    if (cancelToppings) {
        cancelToppings.addEventListener('click', closeToppingsModal);
    }
    
    // Confirm toppings and send to WhatsApp
    if (confirmToppings) {
        confirmToppings.addEventListener('click', function() {
            const customToppings = document.getElementById('custom-toppings').value.trim();
            
            sendOrderToWhatsApp(customToppings);
            closeToppingsModal();
        });
    }
    
    // Send order to WhatsApp
    function sendOrderToWhatsApp(customToppings) {
        const cart = window.getCart();
        
        // Calculate totals
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const total = subtotal;
        
        // Build order message
        let message = `🛒 *PESANAN BARU MIX & CRUNCH*\n\n`;
        message += `*Data Pemesan:*\n`;
        message += `Nama: [Isi nama lengkap]\n`;
        message += `Alamat: [Isi alamat lengkap]\n\n`;
        
        message += `*Detail Pesanan:*\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            message += `   Jumlah: ${item.quantity}\n`;
            message += `   Harga: Rp ${item.price.toLocaleString('id-ID')}\n`;
            message += `   Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
        });
        
        if (customToppings) {
            message += `*Topping:*\n${customToppings}\n\n`;
        }
        
        message += `*Ringkasan Pembayaran:*\n`;
        message += `Subtotal: Rp ${subtotal.toLocaleString('id-ID')}\n`;
        message += `*Total: Rp ${total.toLocaleString('id-ID')}*\n\n`;
        message += `*Catatan:* Ongkos kirim akan diinformasikan setelah konfirmasi pesanan.\n\n`;
        message += `Terima kasih telah memesan! 🙏`;
        
        // Encode message for WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/6285122013643?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Clear cart after successful order
        window.clearCart();
        
        // Show success message
        setTimeout(() => {
            alert('Pesanan berhasil dikirim ke WhatsApp! Terima kasih telah berbelanja.');
        }, 1000);
    }
}

// Product filters
function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productContainer = document.getElementById('product-container');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            const productCards = productContainer.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const mobileSearchInput = document.querySelector('.mobile-search-input');
    
    function handleSearch(searchTerm) {
        const productCards = productContainer.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Reset filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active'); // Set "Semua" as active
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            handleSearch(this.value.toLowerCase());
        });
    }
    
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', function() {
            handleSearch(this.value.toLowerCase());
        });
    }
}

// WhatsApp direct orders
function initWhatsAppOrders() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.whatsapp-order-btn')) {
            const button = e.target.closest('.whatsapp-order-btn');
            
            const productName = button.getAttribute('data-product');
            const productPrice = parseInt(button.getAttribute('data-price'));
            
            // Build simple order message
            let message = `🛒 *PESANAN LANGSUNG MIX & CRUNCH*\n\n`;
            message += `*Data Pemesan:*\n`;
            message += `Nama: [Isi nama lengkap]\n`;
            message += `Alamat: [Isi alamat lengkap]\n\n`;
            
            message += `*Detail Pesanan:*\n`;
            message += `Produk: ${productName}\n`;
            message += `Harga: Rp ${productPrice.toLocaleString('id-ID')}\n\n`;
            
            message += `*Ringkasan Pembayaran:*\n`;
            message += `Total: Rp ${productPrice.toLocaleString('id-ID')}\n\n`;
            message += `*Catatan:* Ongkos kirim akan diinformasikan setelah konfirmasi pesanan.\n\n`;
            message += `Mohon konfirmasi ketersediaan dan proses pemesanan. Terima kasih! 🙏`;
            
            // Encode message for WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/6285122013643?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        }
    });
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Promo timer
function initPromoTimer() {
    function updatePromoTimer() {
        // Set promo end date to 7 days from now
        const promoEndDate = new Date();
        promoEndDate.setDate(promoEndDate.getDate() + 7);
        
        const now = new Date();
        const timeLeft = promoEndDate - now;
        
        if (timeLeft <= 0) {
            // Reset to next week
            promoEndDate.setDate(promoEndDate.getDate() + 7);
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const promoDays = document.getElementById('promo-days');
        const promoHours = document.getElementById('promo-hours');
        const promoMinutes = document.getElementById('promo-minutes');
        const promoSeconds = document.getElementById('promo-seconds');
        
        if (promoDays) promoDays.textContent = days.toString().padStart(2, '0');
        if (promoHours) promoHours.textContent = hours.toString().padStart(2, '0');
        if (promoMinutes) promoMinutes.textContent = minutes.toString().padStart(2, '0');
        if (promoSeconds) promoSeconds.textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updatePromoTimer, 1000);
    updatePromoTimer();
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .testimonial-card, .section-header, .about-content, .feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bounce-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// View More functionality
function initViewMore() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    let showingAll = false;
    
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            if (showingAll) {
                renderProducts(3);
                viewMoreBtn.innerHTML = '<i class="fas fa-eye"></i> Lihat Produk Lainnya';
                showingAll = false;
                
                // Scroll to products section
                const productsSection = document.getElementById('produk');
                if (productsSection) {
                    const offsetTop = productsSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                renderProducts();
                viewMoreBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Lihat Lebih Sedikit';
                showingAll = true;
            }
        });
    }
}