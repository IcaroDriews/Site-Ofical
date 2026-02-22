// ===================================
// MAIN JAVASCRIPT - ALÉM DO CONTROLE
// Created by Ícaro Driews
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // NAVEGAÇÃO & MENU MOBILE
    // ===================================
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header fixo com efeito
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 30px rgba(212, 175, 55, 0.5)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // RENDERIZAR BLOG
    // ===================================
    
    function renderBlog(filter = 'all') {
        const blogGrid = document.getElementById('blogGrid');
        if (!blogGrid) return;
        
        const filteredPosts = filter === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category === filter);
        
        blogGrid.innerHTML = filteredPosts.map(post => `
            <article class="blog-card fade-in" data-category="${post.category}">
                <div class="blog-card-image">${post.icon}</div>
                <div class="blog-card-content">
                    <span class="blog-card-category">${post.category}</span>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <div class="blog-card-meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                </div>
            </article>
        `).join('');
    }
    
    // Filtros do blog
    const blogFilters = document.querySelectorAll('.blog-filters .filter-btn');
    blogFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            blogFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderBlog(this.dataset.category);
        });
    });
    
    // ===================================
    // RENDERIZAR E-BOOKS GRATUITOS
    // ===================================
    
    function renderEbooksGratuitos() {
        const grid = document.getElementById('ebooksGratuitosGrid');
        if (!grid) return;
        
        grid.innerHTML = ebooksGratuitos.map(ebook => `
            <div class="ebook-card fade-in">
                <div class="ebook-cover">
                    <i class="fas fa-book"></i>
                    <div style="position: absolute; bottom: 10px; font-size: 2rem;">${ebook.icon}</div>
                </div>
                <h3 class="ebook-title">${ebook.title}</h3>
                <p class="ebook-description">${ebook.description}</p>
                <p style="color: #d4af37; margin-bottom: 1rem;">
                    <i class="fas fa-file-pdf"></i> ${ebook.pages} páginas
                </p>
                <button class="btn-download" onclick="openDownloadModal(${ebook.id})">
                    <i class="fas fa-download"></i> Baixar Grátis
                </button>
            </div>
        `).join('');
    }
    
    // ===================================
    // RENDERIZAR E-BOOKS PAGOS
    // ===================================
    
    function renderEbooksPagos() {
        const grid = document.getElementById('ebooksPagosGrid');
        if (!grid) return;
        
        grid.innerHTML = ebooksPagos.map(ebook => `
            <div class="ebook-card fade-in">
                <div class="ebook-cover">
                    <i class="fas fa-book"></i>
                    <div style="position: absolute; bottom: 10px; font-size: 2rem;">${ebook.icon}</div>
                </div>
                <h3 class="ebook-title">${ebook.title}</h3>
                <p class="ebook-description">${ebook.description}</p>
                <p style="color: #d4af37; margin-bottom: 0.5rem;">
                    <i class="fas fa-file-pdf"></i> ${ebook.pages} páginas
                </p>
                <div class="ebook-price">R$ ${ebook.price.toFixed(2)}</div>
                <button class="btn-buy" onclick="cart.addItem({id: ${ebook.id}, name: '${ebook.title}', price: ${ebook.price}, icon: '${ebook.icon}'})">
                    <i class="fas fa-shopping-cart"></i> Comprar
                </button>
            </div>
        `).join('');
    }
    
    // ===================================
    // RENDERIZAR PRODUTOS DA LOJA
    // ===================================
    
    function renderProdutos(filter = 'all') {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;
        
        const filteredProducts = filter === 'all' 
            ? produtos 
            : produtos.filter(product => product.category === filter);
        
        grid.innerHTML = filteredProducts.map(product => `
            <div class="product-card fade-in" data-category="${product.category}">
                <div class="product-image">
                    ${product.icon}
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                        <button class="btn-add-cart" onclick="cart.addItem({id: ${product.id}, name: '${product.name}', price: ${product.price}, icon: '${product.icon}'})">
                            <i class="fas fa-cart-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Filtros da loja
    const shopFilters = document.querySelectorAll('.shop-filters .filter-btn');
    shopFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            shopFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProdutos(this.dataset.category);
        });
    });
    
    // ===================================
    // MODAL DE DOWNLOAD E-BOOK
    // ===================================
    
    window.openDownloadModal = function(ebookId) {
        const modal = document.getElementById('downloadModal');
        const ebookIdInput = document.getElementById('ebookId');
        
        if (modal && ebookIdInput) {
            ebookIdInput.value = ebookId;
            modal.style.display = 'flex';
        }
    };
    
    const closeDownloadModal = document.getElementById('closeDownloadModal');
    if (closeDownloadModal) {
        closeDownloadModal.addEventListener('click', function() {
            document.getElementById('downloadModal').style.display = 'none';
        });
    }
    
    // Formulário de download
    const downloadForm = document.getElementById('downloadForm');
    if (downloadForm) {
        downloadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                ebookId: document.getElementById('ebookId').value,
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value
            };
            
            // Salvar no localStorage (em produção, enviar para servidor)
            const leads = JSON.parse(localStorage.getItem('alemdocontrole_leads') || '[]');
            leads.push({
                ...formData,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('alemdocontrole_leads', JSON.stringify(leads));
            
            // Simular download
            const ebook = ebooksGratuitos.find(e => e.id == formData.ebookId);
            
            // Mostrar mensagem de sucesso
            alert(`✅ Obrigado, ${formData.nome}!\n\nO e-book "${ebook.title}" foi enviado para ${formData.email}.\n\nVerifique sua caixa de entrada (e spam) em alguns minutos.`);
            
            // Fechar modal e limpar form
            document.getElementById('downloadModal').style.display = 'none';
            downloadForm.reset();
        });
    }
    
    // ===================================
    // CARRINHO DE COMPRAS
    // ===================================
    
    // Abrir carrinho
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cart.openCart();
        });
    }
    
    // Fechar carrinho
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cart.closeCart();
        });
    }
    
    // Botão de checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            cart.openCheckout();
        });
    }
    
    // ===================================
    // MODAL DE CHECKOUT
    // ===================================
    
    const closeCheckoutModal = document.getElementById('closeCheckoutModal');
    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', function() {
            document.getElementById('checkoutModal').style.display = 'none';
        });
    }
    
    // Alternar métodos de pagamento
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            
            const methodType = this.dataset.method;
            const cardForm = document.getElementById('cardPaymentForm');
            const pixForm = document.getElementById('pixPaymentForm');
            
            if (methodType === 'card') {
                cardForm.style.display = 'block';
                pixForm.style.display = 'none';
            } else {
                cardForm.style.display = 'none';
                pixForm.style.display = 'block';
            }
        });
    });
    
    // Formulário de pagamento com cartão
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    if (cardPaymentForm) {
        cardPaymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            cart.finalizePurchase('card');
        });
    }
    
    // Copiar código PIX
    const btnCopy = document.querySelector('.btn-copy');
    if (btnCopy) {
        btnCopy.addEventListener('click', function() {
            const pixCode = this.previousElementSibling;
            pixCode.select();
            document.execCommand('copy');
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    }
    
    // ===================================
    // FECHAR MODAIS AO CLICAR FORA
    // ===================================
    
    window.addEventListener('click', function(e) {
        const downloadModal = document.getElementById('downloadModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const cartModal = document.getElementById('carrinho');
        
        if (e.target === downloadModal) {
            downloadModal.style.display = 'none';
        }
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
        if (e.target === cartModal) {
            cart.closeCart();
        }
    });
    
    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    
    renderBlog();
    renderEbooksGratuitos();
    renderEbooksPagos();
    renderProdutos();
    
    // Animação de entrada nos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log('🏛️ Além do Controle - Site carregado com sucesso!');
    console.log('👁️ Created by Ícaro Driews');
});