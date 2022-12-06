import product_list from "../pages/api/product_list";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";
import React from "react";
import Rating from "@mui/material/Rating";
import Products from "./Products";

// Para acessibilidade https://mui.com/material-ui/react-rating/

export default function SpecificProdut({ id }) {
  const [mainImage, setMainImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div className={styles.productPage}>
      <div className={styles.path}>
        home {">"} produtos em promoção {">"} <b>{product_list[0].name}</b>
      </div>

      <div className={styles.product}>
        <div className={styles.productImages}>
          {product_list[0]?.productImages.map((img, iid) => (
            <Image
              key={iid}
              src={img.src}
              alt={img.alt}
              width="74"
              height="74"
              className={styles.image}
              onClick={(_) => setMainImage(iid)}
            />
          ))}
        </div>

        <div className={styles.mainImage}>
          <Image
            src={product_list[0].productImages[mainImage].src}
            alt={product_list[0].productImages[mainImage].alt}
            layout="fill"
            className={styles.image}
          />
        </div>

        <div className={styles.productInfo}>
          <h1>{product_list[0].name}</h1>
          <hr />
          <div className={styles.rating}>
            <Rating
              value={product_list[0].rating}
              precision={0.5}
              size="large"
              getLabelText={(value) => value + "estrelas"}
              style={{ color: "#582d18" }}
              readOnly
            />
            {product_list[0].avaliationNumbers} avaliações
          </div>
          Cuidados:
          <ul>
            {product_list[0].instructions.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          Quantidade:
          <input
            type="number"
            id="quantity"
            min="0"
            max={product_list[0].inStock}
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>

        <div className={styles.buyInfo}>
          <div className={styles.price}>
            {product_list[0].isPromo && <h2>{product_list[0].prevPrice}</h2>}
            <h1>{product_list[0].price}</h1>
          </div>

          <div className={styles.buyButtons}>
            <Link href="/cart">
              <input
                type="button"
                value="comprar agora"
                className={styles.buyNow}
              />
            </Link>

            <Link href="/cart">
              <input
                type="button"
                value="adicionar ao carrinho"
                className={styles.addToCart}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.recommendations}>
        <hr />
        <Products title="Você também pode gostar:" light="False" initial="1" />

        <Products
          title="Outros usuários também compraram:"
          light="False"
          initial="1"
        />
      </div>
    </div>
  );
}
