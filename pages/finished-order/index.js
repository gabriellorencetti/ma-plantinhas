import Link from "next/link";
import React from "react";
import Products from "../../components/Products";
import styles from "../../styles/FinishedOrder.module.css";

export default function FinishedOrder() {
  return (
    <div className={styles.finishedOrderDiv}>
      <div
        className={styles.path}
        style={{ paddingLeft: "1em", paddingBottom: "1em" }}
      >
        home {">"} produtos em promoção {">"} <b>compra finalizada</b>
      </div>
      <div className={styles.finishedOrder}>
        <h1 className={styles.title}>Obrigada pela sua compra!</h1>
        <p className={styles.warning}>
          O seu pedido foi aceito e está sendo processado!
        </p>
        <p className={styles.warning2}>
          Você irá receber uma notificação com os detalhes do pedido no seu
          e-mail
        </p>
        <Link href="/" className={styles.link}>
          Voltar para a página inicial
        </Link>
      </div>
      <Products
        title="Você também pode gostar"
        background="var(--color-secondary-ultra-light)"
        light= "False"
      />
      <Products
        title="Outros usuários também compraram"
        background="var(--color-secondary-ultra-light)"
        light= "False"
      />
    </div>
  );
}
