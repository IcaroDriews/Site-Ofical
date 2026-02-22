// ===================================
// DADOS DO SITE - ALÉM DO CONTROLE
// Created by Ícaro Driews
// ===================================

// ARTIGOS DO BLOG
const blogPosts = [
    {
        id: 1,
        title: "A Epistemologia dos Antigos Egípcios",
        category: "epistemologia",
        excerpt: "Como os sacerdotes do Egito Antigo desenvolveram métodos sofisticados de conhecimento que anteciparam a ciência moderna.",
        icon: "𓁹",
        date: "15 Jan 2026",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Ciência e Magia: Uma Fronteira Difusa",
        category: "ciencia",
        excerpt: "Explorando a linha tênue entre o conhecimento científico e as práticas místicas no contexto histórico e contemporâneo.",
        icon: "⚗️",
        date: "10 Jan 2026",
        readTime: "12 min"
    },
    {
        id: 3,
        title: "Filosofia Hermética e Pensamento Moderno",
        category: "filosofia",
        excerpt: "As conexões surpreendentes entre os princípios herméticos egípcios e a filosofia ocidental contemporânea.",
        icon: "🔮",
        date: "05 Jan 2026",
        readTime: "10 min"
    },
    {
        id: 4,
        title: "Os Mistérios das Pirâmides Revelados",
        category: "historia",
        excerpt: "Novas descobertas arqueológicas que transformam nossa compreensão sobre a construção e propósito das pirâmides.",
        icon: "🏛️",
        date: "28 Dez 2025",
        readTime: "15 min"
    },
    {
        id: 5,
        title: "Conhecimento Intuitivo vs. Conhecimento Racional",
        category: "epistemologia",
        excerpt: "Analisando as diferentes formas de conhecer e sua validade epistemológica através das eras.",
        icon: "🧠",
        date: "20 Dez 2025",
        readTime: "9 min"
    },
    {
        id: 6,
        title: "A Astronomia Egípcia e a Ciência Atual",
        category: "ciencia",
        excerpt: "Como os egípcios mapearam os céus com precisão impressionante usando apenas observação a olho nu.",
        icon: "⭐",
        date: "15 Dez 2025",
        readTime: "11 min"
    },
    {
        id: 7,
        title: "O Conceito de Ma'at na Filosofia Moral",
        category: "filosofia",
        excerpt: "Explorando o princípio egípcio de Ma'at (ordem, verdade, justiça) e sua relevância para a ética contemporânea.",
        icon: "⚖️",
        date: "10 Dez 2025",
        readTime: "13 min"
    },
    {
        id: 8,
        title: "Cleópatra: Além do Mito Romântico",
        category: "historia",
        excerpt: "A verdadeira história da última faraó do Egito, uma líder política e intelectual brilhante.",
        icon: "👑",
        date: "05 Dez 2025",
        readTime: "14 min"
    }
];

// E-BOOKS GRATUITOS
const ebooksGratuitos = [
    {
        id: 1,
        title: "Introdução à Epistemologia Antiga",
        description: "Uma jornada pelos fundamentos do conhecimento humano desde o Egito Antigo até os filósofos gregos.",
        icon: "📚",
        pages: 120
    },
    {
        id: 2,
        title: "Ciência no Mundo Antigo",
        description: "Descobrindo as práticas científicas e tecnológicas das civilizações antigas que moldaram nosso mundo.",
        icon: "🔬",
        pages: 95
    },
    {
        id: 3,
        title: "Filosofia Hermética Para Iniciantes",
        description: "Princípios fundamentais da filosofia hermética explicados de forma acessível e prática.",
        icon: "✨",
        pages: 85
    },
    {
        id: 4,
        title: "História Secreta do Egito",
        description: "Narrativas esquecidas e mistérios não resolvidos da civilização mais fascinante da antiguidade.",
        icon: "🗿",
        pages: 150
    },
    {
        id: 5,
        title: "O Livro dos Símbolos Sagrados",
        description: "Decodificando os hieróglifos e símbolos egípcios e seu significado esotérico e prático.",
        icon: "𓂀",
        pages: 110
    }
];

// E-BOOKS PAGOS
const ebooksPagos = [
    {
        id: 6,
        title: "Mestres do Conhecimento Oculto",
        description: "Aprofundamento nas escolas de mistério egípcias e suas técnicas avançadas de desenvolvimento espiritual.",
        price: 49.90,
        icon: "🔱",
        pages: 280
    },
    {
        id: 7,
        title: "A Ciência dos Faraós",
        description: "Análise detalhada das tecnologias avançadas utilizadas no Egito Antigo e suas implicações modernas.",
        price: 59.90,
        icon: "⚡",
        pages: 320
    },
    {
        id: 8,
        title: "Filosofia Perene: Do Egito ao Presente",
        description: "Traçando a continuidade das ideias filosóficas fundamentais através de 5.000 anos de história.",
        price: 54.90,
        icon: "♾️",
        pages: 250
    },
    {
        id: 9,
        title: "Arqueologia Proibida",
        description: "Descobertas arqueológicas controversas que desafiam nossa compreensão da história antiga.",
        price: 64.90,
        icon: "🗝️",
        pages: 380
    },
    {
        id: 10,
        title: "Manual de Alquimia Espiritual",
        description: "Práticas transformadoras baseadas nos ensinamentos herméticos para desenvolvimento pessoal.",
        price: 69.90,
        icon: "🜃",
        pages: 340
    }
];

// PRODUTOS DA LOJA
const produtos = [
    // ROUPAS
    {
        id: 1,
        name: "Camiseta Olho de Hórus",
        category: "roupas",
        description: "Camiseta premium com estampa dourada do Olho de Hórus. 100% algodão egípcio.",
        price: 89.90,
        icon: "👕",
        badge: "Novo"
    },
    {
        id: 2,
        name: "Moletom Hieróglifos Místicos",
        category: "roupas",
        description: "Moletom com capuz featuring hieróglifos sagrados em aplicação dourada.",
        price: 159.90,
        icon: "🧥",
        badge: ""
    },
    {
        id: 3,
        name: "Regata Anúbis Guardian",
        category: "roupas",
        description: "Regata estilo fitness com estampa do deus Anúbis em detalhes metálicos.",
        price: 69.90,
        icon: "👚",
        badge: "Promoção"
    },
    {
        id: 4,
        name: "Vestido Cleópatra Elegance",
        category: "roupas",
        description: "Vestido longo inspirado nas vestes da última rainha do Egito, com detalhes dourados.",
        price: 249.90,
        icon: "👗",
        badge: "Exclusivo"
    },
    {
        id: 5,
        name: "Jaqueta Faraó Premium",
        category: "roupas",
        description: "Jaqueta de couro sintético com bordados egípcios e acabamento em dourado envelhecido.",
        price: 399.90,
        icon: "🧥",
        badge: "Premium"
    },
    
    // CASA & DECORAÇÃO
    {
        id: 6,
        name: "Almofada Pirâmide Mística",
        category: "casa",
        description: "Almofada decorativa com estampa de pirâmides e hieróglifos. 45x45cm.",
        price: 79.90,
        icon: "🛋️",
        badge: ""
    },
    {
        id: 7,
        name: "Tapete Portal Egípcio",
        category: "casa",
        description: "Tapete redondo com mandala egípcia. 1,5m de diâmetro. Material antialérgico.",
        price: 189.90,
        icon: "🎨",
        badge: "Novo"
    },
    {
        id: 8,
        name: "Quadro Canvas Nefertiti",
        category: "casa",
        description: "Quadro decorativo em canvas premium com a imagem estilizada de Nefertiti. 60x80cm.",
        price: 149.90,
        icon: "🖼️",
        badge: ""
    },
    {
        id: 9,
        name: "Conjunto Lençol Templo de Luxor",
        category: "casa",
        description: "Jogo de cama queen size com estampa exclusiva do Templo de Luxor. 4 peças.",
        price: 279.90,
        icon: "🛏️",
        badge: ""
    },
    {
        id: 10,
        name: "Luminária Ankh Dourada",
        category: "casa",
        description: "Luminária de mesa em forma de Ankh (cruz ansata) com acabamento dourado. LED 3W.",
        price: 169.90,
        icon: "💡",
        badge: "Bestseller"
    },
    {
        id: 11,
        name: "Cortina Blackout Estrelas do Nilo",
        category: "casa",
        description: "Cortina blackout com estampa do céu estrelado sobre o Nilo. 2,5m x 2m.",
        price: 199.90,
        icon: "🪟",
        badge: ""
    },
    
    // ACESSÓRIOS
    {
        id: 12,
        name: "Colar Escaravelho Sagrado",
        category: "acessorios",
        description: "Colar místico com pingente de escaravelho em metal dourado envelhecido.",
        price: 89.90,
        icon: "📿",
        badge: "Novo"
    },
    {
        id: 13,
        name: "Bracelete de Cleópatra",
        category: "acessorios",
        description: "Bracelete ajustável inspirado nas joias da rainha Cleópatra. Banho ouro.",
        price: 129.90,
        icon: "💍",
        badge: ""
    },
    {
        id: 14,
        name: "Mochila Hieroglyphics",
        category: "acessorios",
        description: "Mochila com estampa de hieróglifos e compartimento para notebook. Impermeável.",
        price: 179.90,
        icon: "🎒",
        badge: ""
    },
    {
        id: 15,
        name: "Caneca Templo de Karnak",
        category: "acessorios",
        description: "Caneca de porcelana premium com imagem do Templo de Karnak. 350ml.",
        price: 49.90,
        icon: "☕",
        badge: ""
    },
    {
        id: 16,
        name: "Caderno Papiro Digital",
        category: "acessorios",
        description: "Caderno capa dura A5 com textura de papiro e páginas envelhecidas. 200 folhas.",
        price: 59.90,
        icon: "📔",
        badge: ""
    },
    {
        id: 17,
        name: "Relógio Sundial Místico",
        category: "acessorios",
        description: "Relógio de pulso com mostrador inspirado em relógios solares egípcios. Pulseira couro.",
        price: 299.90,
        icon: "⌚",
        badge: "Premium"
    }
];