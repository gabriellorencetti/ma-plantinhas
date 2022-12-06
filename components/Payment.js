import React from "react";
import styles from "../styles/Payment.module.css";
import Form from 'react-bootstrap/Form';
import Card from "./Card"

export default function Payment() {
    return (
        <div className={styles.containerExtern}>
            <div className={styles.containerIntern}>
                <div className={styles.containerTop}>
                    <span className={styles.title}>Formas de Pagamento</span>
                </div>
                <div className={styles.blockPayment}>
                    <Card/>
                </div>
            </div>
        </div>
    );
}
