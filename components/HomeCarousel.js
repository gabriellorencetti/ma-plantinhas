import Image from "next/image";
import Carousel, { Item } from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/carousel/header.png"
          alt="Logo do Maplantinhas, composto por duas flores, acompanhado da frase compre plantas sem sair de casa! e um fundo contendo uma costela de adão. "
          width={1920}
          height={500}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/carousel/1.png"
          alt="Especial dia dos namorados, com o subtítulo Aproveite nossas promoções e presenteie sua pessoa querida e um fundo contendo sete flores de tipos e cores diversas e oito folhas amareladas. "
          width={1920}
          height={500}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/carousel/2.png"
          alt="Entrega grátis, com o subtítulo Compre hoje e ganhe 10% de desconto na sua próxima compra. Ao lado esquerdo, há uma imagem de uma pessoa branca segurando um buquê de girassois."
          width={1920}
          height={500}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
