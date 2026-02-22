# 🏛️ Além do Controle

![Status](https://img.shields.io/badge/status-ativo-success)
![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

## 👁️ Sobre o Projeto

**Além do Controle** é um site pessoal criado por **Ícaro Driews** que combina conhecimento ancestral com sabedoria contemporânea. O site apresenta uma estética única inspirada no Egito Antigo, fantasia e ficção, oferecendo conteúdo sobre epistemologia, ciência, filosofia e história.

### ✨ Características Principais

- 🎨 **Design Temático Egípcio**: Paleta dourada e preta com elementos místicos
- 📚 **Blog de Artigos**: Publicações sobre epistemologia, ciência, filosofia e história
- 📖 **E-books Gratuitos**: 5 e-books iniciais com formulário de captura de leads
- 💰 **E-books Premium**: Conteúdo pago exclusivo e aprofundado
- 🛍️ **Loja Temática**: Roupas e produtos para casa com estética egípcia
- 🛒 **Sistema de Carrinho**: Compras integradas com pagamento por cartão e PIX
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos

---

## 🚀 Funcionalidades Implementadas

### ✅ Completas e Funcionais

#### 1. **Página Home**
- Hero section com animações suaves
- Logo animado (Olho de Hórus)
- Navegação fixa com efeito de scroll
- Elementos decorativos com hieróglifos

#### 2. **Seção Sobre**
- Apresentação de Ícaro Driews
- Descrição das áreas de atuação:
  - 📚 Epistemologia
  - 🔬 Ciência
  - 📜 Filosofia
  - 🏛️ História

#### 3. **Blog**
- Sistema de artigos com 8 posts exemplo
- Filtros por categoria (Epistemologia, Ciência, Filosofia, História)
- Cards com ícones temáticos
- Metadata (data e tempo de leitura)
- Layout responsivo em grid

#### 4. **E-books Gratuitos**
- 5 e-books disponíveis para download
- Modal com formulário de captura contendo:
  - ✍️ Nome completo
  - 📧 E-mail
  - 📱 Telefone
- Armazenamento de leads no localStorage
- Simulação de envio por e-mail

#### 5. **E-books Pagos**
- 5 e-books premium com preços
- Integração com carrinho de compras
- Descrições detalhadas
- Informação de número de páginas

#### 6. **Loja Completa**
- **17 produtos** divididos em:
  - 👕 Roupas (5 itens)
  - 🏠 Casa & Decoração (6 itens)
  - 🎒 Acessórios (6 itens)
- Filtros por categoria
- Badges de destaque (Novo, Promoção, Premium, etc.)
- Botão de adicionar ao carrinho

#### 7. **Sistema de Carrinho**
- ✅ Adicionar/remover produtos
- ✅ Ajustar quantidades
- ✅ Cálculo automático de total
- ✅ Persistência no localStorage
- ✅ Contador de itens no header
- ✅ Notificações visuais

#### 8. **Sistema de Checkout**
- Modal de finalização de compra
- Resumo do pedido
- Duas formas de pagamento:
  - 💳 **Cartão de Crédito**: Formulário completo
  - 📱 **PIX**: QR Code e código copiável
- Simulação de processamento
- Confirmação de compra

#### 9. **Rodapé**
- Logo e informações de contato
- Links para redes sociais:
  - Instagram
  - TikTok
  - YouTube
- Créditos: "Criado por **Ícaro Driews**"

---

## 📂 Estrutura de Arquivos

```
alemdocontrole/
│
├── index.html              # Página principal
│
├── css/
│   └── style.css          # Estilos completos (26KB)
│
├── js/
│   ├── data.js            # Dados de blog, e-books e produtos
│   ├── cart.js            # Sistema de carrinho de compras
│   └── main.js            # JavaScript principal e interatividade
│
└── README.md              # Documentação do projeto
```

---

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| 🟡 Dourado | `#d4af37` | Primária, destaques, títulos |
| ⚫ Preto | `#0a0a0a` | Background principal |
| ⬛ Cinza Escuro | `#1a1a1a` | Background secundário |
| ⬜ Off-White | `#f5f5f5` | Textos |
| 🔵 Azul Escuro | `#1e3a5f` | Acentos |
| 🟦 Teal | `#2d7a7a` | Acentos secundários |

---

## 🔤 Tipografia

- **Títulos**: `Cinzel` (Serif elegante)
- **Corpo**: `Philosopher` (Sans-serif moderna)
- **Fonte via**: Google Fonts CDN

---

## 📦 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Animações, Grid, Flexbox
- **JavaScript ES6+**: Funcionalidades interativas

### Bibliotecas Externas (CDN)
- **Font Awesome 6.4.0**: Ícones
- **Google Fonts**: Tipografia customizada

### Armazenamento
- **localStorage**: 
  - Carrinho de compras
  - Leads de e-books gratuitos

---

## 🌐 Seções e URIs

### Estrutura de Navegação

| Seção | ID | Descrição |
|-------|-----|-----------|
| Home | `#home` | Hero section com apresentação |
| Sobre | `#sobre` | Biografia e áreas de conhecimento |
| Blog | `#blog` | Artigos e publicações |
| E-books Gratuitos | `#ebooks-gratuitos` | Downloads com captura de leads |
| E-books Pagos | `#ebooks-pagos` | Conteúdo premium para venda |
| Loja | `#loja` | Produtos temáticos |
| Carrinho | `#carrinho` | Modal do carrinho de compras |

---

## 💾 Armazenamento de Dados

### localStorage Keys

1. **`alemdocontrole_cart`**
   - Estrutura: Array de objetos
   - Conteúdo: Itens do carrinho
   ```javascript
   [{
     id: number,
     name: string,
     price: number,
     icon: string,
     quantity: number
   }]
   ```

2. **`alemdocontrole_leads`**
   - Estrutura: Array de objetos
   - Conteúdo: Leads dos e-books gratuitos
   ```javascript
   [{
     ebookId: string,
     nome: string,
     email: string,
     telefone: string,
     timestamp: string
   }]
   ```

---

## 🔧 Como Usar

### Instalação Local

1. Clone ou baixe os arquivos do projeto
2. Abra `index.html` em qualquer navegador moderno
3. Não requer instalação de dependências ou servidor

### Publicação

Para publicar o site online:
1. Acesse a aba **Publish** no painel
2. Clique em **Publicar Projeto**
3. Seu site estará disponível em uma URL pública

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

### Recursos Mobile
- Menu hambúrguer
- Layout adaptativo
- Touch-friendly
- Imagens otimizadas

---

## 🎯 Recursos Avançados

### Animações
- ✨ Fade-in com Intersection Observer
- 🌊 Scroll suave entre seções
- 💫 Hover effects nos cards
- 🔄 Loading states

### UX/UI
- 🔔 Notificações toast
- 🎨 Modais elegantes
- 🛒 Carrinho persistente
- 🔍 Filtros dinâmicos
- ⚡ Transições suaves

### Performance
- 📦 CSS otimizado
- 🚀 JavaScript modular
- 💾 Cache com localStorage
- 🎯 Lazy loading com IntersectionObserver

---

## 📊 Conteúdo Atual

### Blog
- ✅ 8 artigos exemplo
- 📚 4 categorias
- 🏷️ Sistema de tags

### E-books
- ✅ 5 gratuitos
- ✅ 5 pagos (R$ 49,90 - R$ 69,90)

### Produtos
- ✅ 5 roupas
- ✅ 6 itens de casa
- ✅ 6 acessórios
- 💰 Preços: R$ 49,90 - R$ 399,90

---

## 🚧 Próximos Passos

### Funcionalidades Futuras

1. **Backend Integration**
   - [ ] API REST para gerenciamento de conteúdo
   - [ ] Banco de dados real para produtos e e-books
   - [ ] Sistema de autenticação de usuários
   - [ ] Painel administrativo

2. **Sistema de Pagamento Real**
   - [ ] Integração com Stripe/Mercado Pago
   - [ ] Gateway de pagamento PIX real
   - [ ] Processamento seguro de cartões
   - [ ] Geração de nota fiscal

3. **E-mail Marketing**
   - [ ] Integração com Mailchimp/SendGrid
   - [ ] Automação de envio de e-books
   - [ ] Newsletter automática
   - [ ] Sequências de e-mails

4. **Blog Completo**
   - [ ] CMS para gerenciar artigos
   - [ ] Sistema de comentários
   - [ ] Compartilhamento social
   - [ ] SEO otimizado

5. **Analytics**
   - [ ] Google Analytics
   - [ ] Tracking de conversões
   - [ ] Heatmaps
   - [ ] A/B testing

6. **Melhorias de UX**
   - [ ] Busca global no site
   - [ ] Sistema de reviews de produtos
   - [ ] Wishlist
   - [ ] Comparação de produtos

7. **Conteúdo Expandido**
   - [ ] Mais artigos do blog (objetivo: 50+)
   - [ ] Vídeos do YouTube embedados
   - [ ] Podcast integration
   - [ ] Galeria de imagens

---

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --gold: #d4af37;
    --black: #0a0a0a;
    /* ... outras cores */
}
```

### Adicionar Conteúdo

Edite os arrays em `js/data.js`:

```javascript
// Adicionar novo artigo
blogPosts.push({
    id: 9,
    title: "Seu Novo Artigo",
    category: "ciencia",
    // ... outros campos
});
```

### Adicionar Produtos

```javascript
produtos.push({
    id: 18,
    name: "Novo Produto",
    category: "roupas",
    price: 99.90,
    // ... outros campos
});
```

---

## 🔒 Segurança

### Implementado
- ✅ Validação de formulários
- ✅ Sanitização de inputs
- ✅ HTTPS ready

### Recomendações Futuras
- 🔐 Implementar CSRF tokens
- 🛡️ Content Security Policy
- 🔑 Autenticação JWT
- 🚨 Rate limiting

---

## 📄 Licença

Este projeto está sob a licença MIT. Criado por **Ícaro Driews**.

---

## 👤 Contato

**Ícaro Driews**

- 📧 E-mail: contato@alemdocontrole.com
- 📱 Instagram: [@alemdocontrole](https://instagram.com)
- 🎵 TikTok: [@alemdocontrole](https://tiktok.com)
- 📺 YouTube: [Além do Controle](https://youtube.com)

---

## 🙏 Agradecimentos

Obrigado por visitar o projeto **Além do Controle**!

> *"O conhecimento é a chave que abre os portais do tempo, conectando a sabedoria ancestral com o futuro infinito."*
> 
> — Ícaro Driews

---

**Desenvolvido com 💛 por Ícaro Driews**

*Última atualização: Fevereiro 2026*