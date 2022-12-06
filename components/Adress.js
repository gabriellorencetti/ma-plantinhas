import React from "react";
import styles from "../styles/AdressBox.module.css";
import Form from 'react-bootstrap/Form';

export default function AdressBox() {
    return (
        <div className={styles.containerExtern}>
            <div className={styles.containerIntern}>
                <div className={styles.containerTop}>
                    <span className={styles.title}>Endereço</span>
                </div>
                <Form className={styles.form}>
                    <div className={styles.formRows}>
                        <div className={styles.cep}>
                            <Form.Group className={styles.boxField} controlId="formBasicEmail" >
                                <Form.Label className={styles.cepLabel}>CEP:</Form.Label>
                                <Form.Control type="email" placeholder="Digite o seu CEP"  className={styles.cepField}/>
                            </Form.Group>
                        </div>
                        <div className={styles.rua}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.ruaLabel}>Rua:</Form.Label>
                                <Form.Control type="password" placeholder="Digite o nome da sua rua" className={styles.ruaField}/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className={styles.formRows1}>
                        <div className={styles.bairro}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.bairroLabel}>Bairro:</Form.Label>
                                <Form.Control type="password" placeholder="Digite seu bairro" className={styles.bairroField}/>
                            </Form.Group>
                        </div>
                        <div className={styles.cidade}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.cidadeLabel}>Cidade:</Form.Label>
                                <Form.Control type="password" placeholder="Digite o nome da sua cidade" className={styles.cidadeField}/>
                            </Form.Group>
                        </div>
                        <div className={styles.numero}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.numeroLabel}>Numero:</Form.Label>
                                <Form.Control type="password" placeholder="ex: 256" className={styles.numeroField}/>
                            </Form.Group>
                        </div>  
                    </div>
                </Form>
            </div>
        </div>
    );
}
