// ===================================
// SISTEMA DE CARRINHO DE COMPRAS
// Além do Controle - Ícaro Driews
// ===================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    // Carregar carrinho do localStorage
    loadCart() {
        const saved = localStorage.getItem('alemdocontrole_cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Salvar carrinho no localStorage
    saveCart() {
        localStorage.setItem('alemdocontrole_cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // Adicionar item ao carrinho
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showNotification(`${product.name} adicionado ao carrinho!`);
    }

    // Remover item do carrinho
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCart();
    }

    // Atualizar quantidade
    updateQuantity(productId, change) {
        const item = this.items.find(item => item.id === productId);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.renderCart();
            }
        }
    }

    // Calcular total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Atualizar contador no ícone do carrinho
    updateCartCount() {
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
    }

    // Renderizar carrinho
    renderCart() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalPriceElement = document.getElementById('totalPrice');
        
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Seu carrinho está vazio</p>
                </div>
            `;
            totalPriceElement.textContent = 'R$ 0,00';
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem(${item.id})">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
        `).join('');

        totalPriceElement.textContent = `R$ ${this.getTotal().toFixed(2)}`;
    }

    // Abrir modal do carrinho
    openCart() {
        const cartModal = document.getElementById('carrinho');
        if (cartModal) {
            cartModal.style.display = 'flex';
            this.renderCart();
        }
    }

    // Fechar modal do carrinho
    closeCart() {
        const cartModal = document.getElementById('carrinho');
        if (cartModal) {
            cartModal.style.display = 'none';
        }
    }

    // Mostrar notificação
    showNotification(message) {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #d4af37;
            color: #0a0a0a;
            padding: 1rem 2rem;
            border-radius: 4px;
            font-weight: bold;
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
        `;
        notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Preparar checkout
    openCheckout() {
        if (this.items.length === 0) {
            this.showNotification('Seu carrinho está vazio!');
            return;
        }

        const checkoutModal = document.getElementById('checkoutModal');
        const checkoutItemsContainer = document.getElementById('checkoutItems');
        const checkoutTotalElement = document.getElementById('checkoutTotal');
        
        if (!checkoutModal || !checkoutItemsContainer) return;

        // Renderizar itens do checkout
        checkoutItemsContainer.innerHTML = this.items.map(item => `
            <div class="checkout-item">
                <div class="checkout-item-name">${item.name} (x${item.quantity})</div>
                <div class="checkout-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');

        checkoutTotalElement.textContent = `R$ ${this.getTotal().toFixed(2)}`;
        
        this.closeCart();
        checkoutModal.style.display = 'flex';
    }

    // Finalizar compra
    finalizePurchase(paymentMethod) {
        // Simular processamento de pagamento
        this.showNotification('Processando pagamento...');
        
        setTimeout(() => {
            // Limpar carrinho
            this.items = [];
            this.saveCart();
            
            // Fechar modal de checkout
            const checkoutModal = document.getElementById('checkoutModal');
            if (checkoutModal) {
                checkoutModal.style.display = 'none';
            }
            
            // Mostrar mensagem de sucesso
            this.showNotification('Compra realizada com sucesso! Você receberá os detalhes por e-mail.');
        }, 2000);
    }
}

// Inicializar carrinho
const cart = new ShoppingCart();

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);