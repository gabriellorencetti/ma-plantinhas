import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import mySvg from '../public/images/cart.svg'
import Minus from '../public/images/minus.svg'
import Plus from '../public/images/plus.svg'
import Trash from '../public/images/trash.svg'

import product_list from "../pages/api/product_list";



export default function Cart() {
  const [mainImage, setMainImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <span className={styles.title}>Carrinho</span>
        <Image src={mySvg} width={35} height={35} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
      </div>
      <div className={styles.cartBox}>
        <div className={styles.compraInfo}>
          <div className={styles.cardProduct}>
            <div className={styles.mainImage}>
              <Image
                src={product_list[0].productImages[mainImage].src}
                alt={product_list[0].productImages[mainImage].alt}
                width={170}
                height={170}
                className={styles.pictureProduct}
              />
            </div>
            <div className={styles.infoImage}>
              <div className={styles.titleBox}><span>Muda de Violetas</span></div>
              <div className={styles.descBox}>
                <span>Em Estoque</span>
                <span>Não Prejudica animais</span>
              </div>
              <div className={styles.quantPriceBox}>
                <div className={styles.cardButtons}>
                  <Image src={Minus} width={30} height={30} className={styles.Icons} alt="Imagem de incone de ajuda" />
                  <span>1</span>
                  <Image src={Plus} width={30} height={30} className={styles.Icons} alt="Imagem de incone de ajuda" />
                </div>
                <div className={styles.priceProduct}>
                  <span>R$ 26,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalBox}>
          <div className={styles.clearCart}>
            <span>Limpar Carrinho</span>
            <Image src={Trash} width={35} height={35} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
          </div>
          <div className={styles.totalPrice}>
            <span>Total: 26,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
