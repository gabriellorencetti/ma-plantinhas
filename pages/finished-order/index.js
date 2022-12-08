import Link from "next/link";
import React from "react";
import Products from "../../components/Products";
import styles from "../../styles/FinishedOrder.module.css";

export default function FinishedOrder() {
  return (
    <div className={styles.finishedOrderDiv}>
      <div style={{ paddingLeft: "1em", paddingBottom: "1em" }}>
        <Link href="/">página inicial</Link>
        {" > "}
        <Link href="/cart">carrinho</Link>
        {" > "}
        <Link href="/finished-order">
          <b>compra finalizada</b>
        </Link>
      </div>
      <div className={styles.finishedOrder}>
        <h1>Obrigada pela sua compra!</h1>
        <h2>O seu pedido foi aceito e está sendo processado!</h2>
        <h3>
          Você irá receber uma notificação com os detalhes do pedido no seu
          e-mail
        </h3>
        <Link href="/" className={styles.link}>
          Voltar para a página inicial
        </Link>
      </div>
      <Products
        title="Você também pode gostar"
        background="var(--color-secondary-ultra-light)"
        light="False"
      />
      <Products
        title="Outros usuários também compraram"
        background="var(--color-secondary-ultra-light)"
        light="False"
      />
    </div>
  );
}
