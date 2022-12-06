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
                            <Form.Control type="email" placeholder="Digite o seu CEP" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Nome impresso no cartão:</Form.Label>
                            <Form.Control type="password" placeholder="Digite o nome da sua rua" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Bairro:</Form.Label>
                            <Form.Control type="password" placeholder="Digite seu bairro" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Cidade:</Form.Label>
                            <Form.Control type="password" placeholder="Digite o nome da sua cidade" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Numero:</Form.Label>
                            <Form.Control type="password" placeholder="ex: 256" className={styles.Field} />
                        </Form.Group>
                    </div>
                </div>
            </Form>
            <div className={styles.card}>
                <Image src="/images/card.png" width={300} height={200}/>
            </div>
        </>
    );
}
