const product_list = [
  {
    src: "/images/products/Mandacaru1.png",
    alt: "Exemplar de Ficus elastica com apenas alguns caules e folhas.",
    name: "Mandacaru",
    price: "R$ 169.90",
    isPromo: true,
    prevPrice: "R$ 189.90",
    // Daqui pra baixo só precisa pro produto que for ter tela própria.
    productImages: [
      { 
        src: "/images/products/Mandacaru1.png",
        alt: "Exemplar do cactus Mandacaru, pequeno, com uma etiqueta e uma madeira com um escrito em um vaso preto e cheio de madeira preta."
      },
      { 
        src: "/images/products/Mandacaru2.png",
        alt: "Exemplar do cactus Mandacaru, maior que a outra imagem, em um vaso marrom e cheio de pequenas pedras."
      },
    ],
    rating: 4.5,
    avaliationNumbers: 121,
    instructions: [
      "deve ser plantado tanto em sol intenso, quanto em ambientes de meia sombra;",
      "frutos do cacto mandacaru costumam aparecer de janeiro até março;",
      "realizar as podas apenas quando a planta estiver com as copas formadas;",
      "gire o vaso constantemente, para que a planta receba sol de todos os lados;",
      "solo indicado precisa conter cascalhos e ser arenoso;",
      "certifique que a terra não irá reter tanta umidade, pois isso poderia danificar a raiz da planta.",
    ],
    inStock: 10,
  },

  {
    src: "/images/products/3.jpg",
    alt: "Suculenta em vaso azul-escuro.",
    name: "Suculenta",
    price: "R$ 14.99",
    isPromo: true,
    prevPrice: "R$ 24.99",
  },

  {
    src: "/images/products/4.jpg",
    alt: "Brinco de princesa com várias flores rosas e violetas em um vaso preto com gancho para pendurar no teto.",
    name: "Brinco de Princesa",
    price: "R$ 79.99",
    isPromo: false,
    prevPrice: "R$ 79.99",
  },

  {
    src: "/images/products/5.jpg",
    alt: "Bonsai Pinheiro Vermelho em um vaso verde-escuro com dois níveis.",
    name: "Bonsai Pinheiro Vermelho",
    price: "R$ 179.99",
    isPromo: false,
    prevPrice: "R$ 179.99",
  },

  {
    src: "/images/products/7.webp",
    alt: "Regador verde-escuro com capacidade de três litros.",
    name: "Regador Verde 3L",
    price: "R$ 79.99",
    isPromo: false,
    prevPrice: "R$ 79.99",
  },

  {
    src: "/images/products/8.jpg",
    alt: "Kit de jardinagem Tramontina com várias ferramentas, como pá, ancinho e tesoura.",
    name: "Kit Jardinagem Tramontina",
    price: "R$ 108.10",
    isPromo: true,
    prevPrice: "R$ 120.50",
  },

  {
    src: "/images/products/9.jfif",
    alt: "Adubo orgânico farelado da marca Bokashi",
    name: "Bokashi Premium Adubo Orgânico",
    price: "R$ 149.99",
    isPromo: false,
    prevPrice: "R$ 149.99",
  },

  {
    src: "/images/products/11.webp",
    alt: "Lírio da paz com três flores brancas em um vaso também branco.",
    name: "Lírio da Paz",
    price: "R$ 36.50",
    isPromo: false,
    prevPrice: "R$ 36.50",
  },

  {
    src: "/images/carousel/3.jpg",
    alt: "Trevo de quatro folhas em um vaso preto.",
    name: "Trevo de Quatro Folhas",
    price: "R$ 16.50",
    isPromo: true,
    prevPrice: "R$ 26.50",
  },

  {
    src: "/images/carousel/5.webp",
    alt: "Tulipas alaranjadas em um vaso de vidro transparente.",
    name: "Vaso de Tulipas",
    price: "R$ 146.50",
    isPromo: false,
    prevPrice: "R$ 146.50",
  },

  {
    src: "/images/carousel/5.jpg",
    alt: "Cinco cachepots de macramé nas cores creme, verde, roxo, amarelo e preto.",
    name: "Cachepot Macramé",
    price: "R$ 46.50",
    isPromo: false,
    prevPrice: "R$ 46.50",
  },

  {
    src: "/images/carousel/6.jpg",
    alt: "Pessoa branca segurando tesoura de poda elétrica na cor azul prestes a cortar um galho fino de uma árvore.",
    name: "Tesoura de Poda Elétrica Profissional",
    price: "R$ 399.99",
    isPromo: true,
    prevPrice: "R$ 449.99",
  },
];

export default product_list;
