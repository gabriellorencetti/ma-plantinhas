const product_list = [
    {
        src: "/images/carousel/c1.jpeg",
        alt:"",
        name: "Mandacaru",
        price: "R$ 169.90",
        isPromo: true,
        prevPrice: "R$ 189.90",
        // Daqui pra baixo só precisa pro produto que for ter tela própria.
        productImages: [
            "/images/products/2.jpg",
            "/images/products/index.jpg"
        ],
        rating: 4.5,
        avaliationNumbers: 121,
        instructions:[
            'deve ser plantado tanto em sol intenso, quanto em ambientes de meia sombra;',
            'frutos do cacto mandacaru costumam aparecer de janeiro até março;',
            'realizar as podas apenas quando a planta estiver com as copas formadas;',
            'gire o vaso constantemente, para que a planta receba sol de todos os lados;',
            'solo indicado precisa conter cascalhos e ser arenoso;',
            'certifique que a terra não irá reter tanta umidade, pois isso poderia danificar a raiz da planta.'
        ],
        inStock: 10
    },
]

export default product_list