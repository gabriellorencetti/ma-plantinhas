import AdressBox from "../components/Adress";
import Cart from "../components/Cart";
import Payment from "../components/Payment";
import styles from "../styles/CartPage.module.css";
import Link from "next/link";


export default function CartPage() {
  return (
    <div>
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
