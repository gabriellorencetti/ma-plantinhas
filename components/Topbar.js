import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Topbar.module.css";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import Link from "next/link";

function Topbar() {
  return (
    <Navbar variant="dark" expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="/images/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MaPlantinhas
        </Navbar.Brand>
        <div className={styles.navbarLeftItems}>
          <Navbar.Text href="account">Acessibilidade</Navbar.Text>
          <Navbar.Text>
            <Link href="account">
              <UserIcon />
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link href="cart">
              <CartIcon />
            </Link>
          </Navbar.Text>
        </div>
      </Container>
    </Navbar>
  );
}

export default Topbar;
