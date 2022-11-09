import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function Product() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/">
        <Card style={{ width: "200px", height: "200px" }}>
          <Image
            alt=""
            src="/images/carousel/c1.jpeg"
            width="200"
            height="200"
          />
        </Card>
      </Link>
      <div className={styles.productName}>Mandacaru</div>
      <div className={styles.productOldPrice}>R$ 189,90</div>
      <div className={styles.productPrice}>R$ 169,90</div>
    </div>
  );
}

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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
