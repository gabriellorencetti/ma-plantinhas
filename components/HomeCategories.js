import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function HomeCategoryItem() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/">
        <Card style={{ width: "250px", height: "250px", borderRadius: "100%" }}>
          <Image
            alt=""
            src="/images/carousel/c1.jpeg"
            width="250"
            height="250"
            style={{ borderRadius: "100%" }}
          />
        </Card>
      </Link>
      <div style={{}} className={styles.homeCategoriesName}>
        Categoria
      </div>
    </div>
  );
}

function HomeCategories() {
  return (
    <div className={styles.homeCategories}>
      <HomeCategoryItem />
      <HomeCategoryItem />
      <HomeCategoryItem />
      <HomeCategoryItem />
    </div>
  );
}

export default HomeCategories;
