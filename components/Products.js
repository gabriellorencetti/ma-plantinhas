import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import product_list from "../pages/api/product_list";

export default function Products({ title, background, light }) {
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
        {product_list.map((el, id) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={id}>
            <Link href="/productPage">
              <Card style={{ width: "200px", height: "200px" }}>
                <Image alt={el.alt} src={el.src} width="200" height="200" />
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
