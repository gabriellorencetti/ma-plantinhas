import Image from "next/image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Topbar.module.css";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { style } from "@mui/system";
import Hamburger from 'hamburger-react'

function Topbar() {
  const [checked, setChecked] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <Navbar variant="dark" expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <Image
            alt=""
            src="/images/logo.svg"
            width="48"
            height="48"
            className="d-inline-block align-top"
          />{" "}
          MaPlantinhas
        </Navbar.Brand>

        <div className={styles.shortcuts + ' ' + styles.noMobile}>
          <p>Dia dos namorados</p>
          <p>Categorias</p>
          <p>As mais vendidas</p>
        </div>

        <div className={styles.navbarLeftItems + ' ' + styles.noMobile}>
          <Dropdown className={styles.dropdownColor} autoClose="outside">
            <Dropdown.Toggle className={styles.dropdownColor}>
              Acessibilidade
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setChecked(!checked)}>
                <div className={styles.row}>
                  <label className={styles.switch}>
                    <input type="checkbox" checked={checked}></input>
                    <span className={styles.slider}></span>
                  </label>
                  Auto-Contraste
                </div>
              </Dropdown.Item>

              <Dropdown.Item onCLick={() => {}}>Fonte Pequena</Dropdown.Item>

              <Dropdown.Item
                onCLick={() => {
                  document.body.style.fontSize = 1.2;
                }}
              >
                Fonte Média
              </Dropdown.Item>

              <Dropdown.Item
                onCLick={() => {
                  document.body.style.fontSize = 1.4;
                }}
              >
                Fonte Grande
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Text>
            {loggedIn ?
              <input
              type="button"
              value="Boas vindas, Karen"
              className={styles.loginButton}
              onClick={(event) => setLoggedIn(lastLoginState => !lastLoginState)}
              />
              :
              <input
              type="button"
              value="Entrar"
              className={styles.loginButton}
              onClick={(event) => setLoggedIn(lastLoginState => !lastLoginState)}
              />
            }
          </Navbar.Text>
          <Navbar.Text>
            <Link href="cart">
              <CartIcon />
            </Link>
          </Navbar.Text>
        </div>


        <div className={styles.onMobile}>
          {!menuIsActive &&
          <Dropdown className={styles.dropdownColor} autoClose="outside">
            <Dropdown.Toggle className={styles.dropdownColor}>
              Acessibilidade
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setChecked(!checked)}>
                <div className={styles.row}>
                  <label className={styles.switch}>
                    <input type="checkbox" checked={checked}></input>
                    <span className={styles.slider}></span>
                  </label>
                  Auto-Contraste
                </div>
              </Dropdown.Item>

              <Dropdown.Item onCLick={() => {}}>Fonte Pequena</Dropdown.Item>

              <Dropdown.Item
                onCLick={() => {
                  document.body.style.fontSize = 1.2;
                }}
              >
                Fonte Média
              </Dropdown.Item>

              <Dropdown.Item
                onCLick={() => {
                  document.body.style.fontSize = 1.4;
                }}
              >
                Fonte Grande
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }
          <Hamburger
          toggled={menuIsActive}
          toggle={setMenuIsActive}
          />
        </div>
          



          {menuIsActive &&
          <div className={styles.menu}>
            <ul>
              <li>Dia dos namorados</li>
              <li>Categorias</li>
              <li>As mais vendidas</li>
            </ul>
            {loggedIn ?
              <UserIcon/>
              :
              <input
              type="button"
              value="Entrar"
              className={styles.loginButton}
              onClick={(event) => setLoggedIn(lastLoginState => !lastLoginState)}
              />}
            <Link href="cart">
              <CartIcon />
            </Link>
          </div>
          }

        
        

      </Container>
    </Navbar>
  );
}

export default Topbar;
