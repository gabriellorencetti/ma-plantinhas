import AdressBox from "../components/Adress";
import Cart from "../components/Cart";
import Payment from "../components/Payment";
import styles from "../styles/CartPage.module.css";
import Link from "next/link";

export default function CartPage() {
  return (
    <div>
      <div
        style={{
          paddingLeft: "1em",
          paddingTop: "1em",
          color: "var(--color-secondary-dark",
        }}
      >
        <Link href="/">página inicial</Link>
        {" > "}
        <Link href="/cart">
          <b>carrinho</b>
        </Link>
      </div>
      <Cart />
      <AdressBox></AdressBox>
      <Payment></Payment>
      <div className={styles.buttonFimCompra}>
        <Link href="/finished-order">
          <input
            type="button"
            value="comprar agora"
            className={styles.buyNow}
          />
        </Link>
      </div>
    </div>
  );
}
