import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import YoutubeIcon from "../icons/YoutubeIcon";
import InstagramIcon from "../icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link href="/contact">Contato</Link>
        <Link href="/about-us">Sobre nós</Link>
        <Link href="/privacy-policy">Política de privacidade</Link>
        <Link href="/terms-of-use">Termos de serviço</Link>
      </div>
      <div className={styles.center}>
        <div>2022</div>
        <div>Todos os direitos reservados</div>
      </div>
      <div className={styles.right}>
        <Link href="/">
          <YoutubeIcon />
        </Link>
        <Link href="/">
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
}
