import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import category_list from "../pages/api/category_list";

function HomeCategoryItem({ src, alt, name }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/">
        <Card className={styles.homeCategoriesItem}>
          <Image alt={alt} src={src} fill style={{ borderRadius: "100%" }} />
        </Card>
      </Link>
      <div style={{}} className={styles.homeCategoriesName}>
        {name}
      </div>
    </div>
  );
}

function HomeCategories() {
  return (
    <div className={styles.homeCategories}>
      {category_list.map((category, id) => (
        <HomeCategoryItem
          src={category.src}
          alt={category.alt}
          name={category.name}
          key={id}
        />
      ))}
    </div>
  );
}

export default HomeCategories;
