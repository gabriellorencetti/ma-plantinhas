import React from "react";
import styles from "../styles/Card.module.css";
import Form from 'react-bootstrap/Form';
import Image from "next/image";

export default function Card() {
    return (
        <>
            <Form className={styles.form}>
                <div className={styles.formRows}>
                    <div className={`${styles.fields} ${styles.firstField}`}>
                        <Form.Group className={styles.boxField} controlId="formBasicEmail" >
                            <Form.Label className={styles.label}>Numero do Cartão:</Form.Label>
                            <Form.Control type="email" placeholder="Digite o numero do cartão" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Nome impresso no cartão:</Form.Label>
                            <Form.Control type="password" placeholder="Digite o nome impresso no cartão" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Validade:</Form.Label>
                            <Form.Control type="password" placeholder="Digte a validade do seu cartão" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Cod Segurança:</Form.Label>
                            <Form.Control type="password" placeholder="Digite o código de segurança" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Parcelamento:</Form.Label>
                            <Form.Control type="password" placeholder="ex: 4" className={styles.Field} />
                        </Form.Group>
                    </div>
                </div>
            </Form>
            <div className={styles.card}>
                <Image src="/images/card.jpg" width={500} height={600} className={styles.img}/>
            </div>
        </>
    );
}
