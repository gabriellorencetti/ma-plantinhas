import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import product_list from "../pages/api/product_list";

export default function Products({
  title,
  background,
  light,
  initial = 0,
  final = 6,
}) {
  return (
    <div
      style={{
        background: background,
        color: light ? "var(--color-secondary-dark" : "var(--color-text)",
      }}
    >
      <div
        className={light ? styles.productsTitleLight : styles.productsTitleDark}
      >
        {title}
      </div>
      <div className={styles.homeProducts}>
        {product_list.slice(initial, final).map((el, id) => (
          <div className={styles.product} key={id}>
            <Link href="/productPage">
              <Card className={styles.productCard}>
                <Image alt={el.alt} src={el.src} fill />
              </Card>
            </Link>
            <div className={styles.productName}>{el.name}</div>
            {el.isPromo && (
              <div className={styles.productOldPrice}>{el.prevPrice}</div>
            )}
            <div className={styles.productPrice}>{el.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
