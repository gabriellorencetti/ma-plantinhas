import Image from "next/image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Topbar.module.css";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";

import { useEffect, useState } from "react";

const contrastStrgKey = "isAtHighContrast";
const cssContrastClass = "contrast";
const resizeStrgKey = "isTextResized";
const cssResizeClass = "larger-text";

function Topbar() {
  const [checked, setChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Set high contrast functions in the page
  useEffect(() => {
    (function () {
      const Contrast = {
        isAtHC: false,
        toggle: function () {
          this.setContrast(!this.isAtHC);
        },
        setContrast: function (isAtHighContrast) {
          localStorage[contrastStrgKey] = "" + isAtHighContrast;
          this.isAtHC = isAtHighContrast;
          this.updateSiteBody();
        },
        updateSiteBody: function () {
          const body = document.body;
          if (!body) return;

          this.isAtHC = this.isAtHC || localStorage[contrastStrgKey] === "true";

          if (this.isAtHC) {
            body.classList.add(cssContrastClass);
          } else {
            body.classList.remove(cssContrastClass);
          }
        },
      };

      window.toggleContrast = function () {
        Contrast.toggle();
      };

      Contrast.updateSiteBody();
    })();

    // Set text resizing functions in the page
    (function () {
      const TextResize = {
        isResized: false,
        toggle: function () {
          this.setResize(!this.isResized);
        },
        setResize: function (isResized) {
          localStorage[resizeStrgKey] = "" + isResized;
          this.isResized = isResized;
          this.updateSiteBody();
        },
        updateSiteBody: function () {
          const body = document.body;
          if (!body) return;

          this.isResized =
            this.isResized || localStorage[resizeStrgKey] === "true";

          if (this.isResized) {
            body.classList.add(cssResizeClass);
          } else {
            body.classList.remove(cssResizeClass);
          }
        },
      };

      window.toggleResize = function () {
        TextResize.toggle();
      };

      TextResize.updateSiteBody();
    })();
  });

  return (
    <Navbar variant="dark" expand="lg" className={styles.navbar}>
      <Container>
        <Link href="/">
          <Navbar.Brand className={styles.navbarBrand}>
            <Image
              alt=""
              src="/images/logo.svg"
              width="48"
              height="48"
              className="d-inline-block align-top"
            />{" "}
            MaPlantinhas
          </Navbar.Brand>
        </Link>

        <div className={styles.navbarLeftItems}>
          <Dropdown className={styles.dropdownColor} autoClose="outside">
            <Dropdown.Toggle className={styles.dropdownColor}>
              Acessibilidade
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  window.toggleContrast();
                }}
                onKeyDown={() => {
                  window.toggleContrast();
                }}
                accessKey="1"
              >
                <div className={styles.row}>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    ></input>
                    <span className={styles.slider}></span>
                  </label>
                  Alto contraste
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  window.toggleResize();
                }}
                onKeyDown={() => {
                  window.toggleResize();
                }}
                accessKey="2"
              >
                Aumentar/diminuir texto
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Text>
            {loggedIn ? (
              <input
                type="button"
                value="Boas vindas, Karen!"
                className={styles.loginButton}
                onClick={(event) =>
                  setLoggedIn((lastLoginState) => !lastLoginState)
                }
              />
            ) : (
              <input
                type="button"
                value="Entrar"
                className={styles.loginButton}
                onClick={(event) =>
                  setLoggedIn((lastLoginState) => !lastLoginState)
                }
              />
            )}
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
