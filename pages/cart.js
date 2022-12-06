import AdressBox from "../components/Adress";
import Cart from "../components/Cart";
import Payment from "../components/Payment";

export default function CartPage() {
  return (
    <div>
      <Cart />
      <AdressBox></AdressBox>
      <Payment></Payment>
    </div>
  );
}
