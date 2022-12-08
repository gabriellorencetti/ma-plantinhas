import React, { useState } from 'react';
import styles from "../styles/Card.module.css";
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import mySvg from '../public/images/questionMark.svg'
import ReactTooltip from "react-tooltip";

export default function Card() {

    var [numero, setNumero] = useState("")
    var [data, setData] = useState("")
    var [codSeg, setCodSeg] = useState("")
    var [parcelas, setParcelas] = useState("")
    
    var formErrors = { number: '', password: '' }
    var [numberValid, setNumberValid] = useState(true)
    var [nameValid, setNameValid] = useState(true)
    var [dateValid, setDateValid] = useState(true)
    var [codValid, setCodValid] = useState(true)
    var [parcelasValid, setParcelasValid] = useState(true)


    function containsNumbers(str) {
        return /^[a-z A-Z]+$/.test(str);
    }

    function containsLetters(str) {
        return /[a-z A-Z]+$/.test(str);
    }

    function validadeDate(str) {
        return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(str);
    }

    function handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        validateField(name, value);
    };

    function validateField(fieldName, value) {
        let numVal = numberValid;
        let nameVal = nameValid
        let dateVal = dateValid
        let numCod = codValid
        let parcelasVal = parcelasValid

        switch (fieldName) {
            case 'numero':
                setNumero(value)
                if (value.length > 16) {
                    setNumero(value.slice(0, -1))
                    value = value.slice(0, -1)
                }
                if (value.length != 16 || value.length == 0 || containsLetters(value)) {
                    numVal = false
                } else {
                    numVal = true
                }
                break;

            case 'nome':
                if (containsNumbers(value)) {
                    nameVal = true
                } else {
                    nameVal = false
                }
                break;

            case 'data':
                setData(value)
                if (value.length > 5) {
                    setData(value.slice(0, -1))
                    value = value.slice(0, -1)
                }
                if (validadeDate(value)) {
                    dateVal = true
                } else {
                    dateVal = false
                }
                break;

            case 'cod':
                setCodSeg(value)
                if (value.length > 3) {
                    setCodSeg(value.slice(0, -1))
                    value = value.slice(0, -1)
                }
                if (value.length != 3 || containsNumbers(value)) {
                    numCod = false
                } else {
                    numCod = true
                }
                break;

            case 'parcelas':
                setParcelas(value)
                if (value.length > 1) {
                    setParcelas(value.slice(0, -1))
                    value = value.slice(0, -1)
                }
                if (value.length != 1 || containsNumbers(value) || value.length == 0) {
                    parcelasVal = false
                } else {
                    parcelasVal = true
                }
                break;

            default:
                break;
        }
        setNumberValid(numVal)
        setNameValid(nameVal)
        setDateValid(dateVal)
        setCodValid(numCod)
        setParcelasValid(parcelasVal)
    }
    return (
        <>
            <Form className={styles.form}>
                <div className={styles.formRows}>
                    <div className={`${styles.fields} ${styles.firstField}`}>
                        <Form.Group className={styles.boxField} controlId="formBasicEmail" >
                            <Form.Label className={styles.label}>Numero do Cartão:
                                <Image data-tip data-for="registerTip" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                <ReactTooltip id="registerTip" place="top" effect="solid" className={styles.tooltip}>
                                    Por exemplo: 1223 3221 5445 7664 seria escrito como 1223322154457664
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="number" placeholder="Digite o numero do cartão" className={styles.Field} value={numero} name="numero" onChange={(event) => handleUserInput(event)} />
                            {numberValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Entrada Incorreta</span>}
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Nome impresso no cartão:
                                <Image data-tip data-for="registerTip1" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda cartão" />
                                <ReactTooltip id="registerTip1" place="top" effect="solid" className={styles.tooltip}>
                                    Por exemplo: Fulaninho da silva
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome impresso no cartão" className={styles.Field} name="nome" onChange={(event) => handleUserInput(event)} />
                            {nameValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Entrada Incorreta</span>}
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Validade:
                                <Image data-tip data-for="registerTip2" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda validade" />
                                <ReactTooltip id="registerTip2" place="top" effect="solid" className={styles.tooltip}>
                                    Use o formato XX/XX, por exemplo: 12/12
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Digte a validade do seu cartão" className={styles.Field} value={data} name="data" onChange={(event) => handleUserInput(event)} />
                            {dateValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Entrada Incorreta</span>}

                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Cod Segurança:
                                <Image data-tip data-for="registerTip3" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda codigo segurança cartao" />
                                <ReactTooltip id="registerTip3" place="top" effect="solid" className={styles.tooltip}>
                                    Tres numeros atras do cartão, por ex: 123
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="number" placeholder="Digite o código de segurança" className={styles.Field} value={codSeg} name="cod" onChange={(event) => handleUserInput(event)} />
                            {codValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Entrada Incorreta</span>}
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Parcelamento:
                                <Image data-tip data-for="registerTip4" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda parcelamento" />
                                <ReactTooltip id="registerTip4" place="top" effect="solid" className={styles.tooltip}>
                                    Digite apenas o de parcelas, por ex: 2
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="number" placeholder="Digite o numero de parcelas" className={styles.Field} value={parcelas} name="parcelas" onChange={(event) => handleUserInput(event)} />
                            {parcelasValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Entrada Incorreta</span>}
                        </Form.Group>
                    </div>
                </div>
            </Form>
            <div className={styles.card}>
                <Image src="/images/card.jpg" width={400} height={550} className={styles.img} alt="Imagem de um cartão indicando os campos" />
            </div>
        </>
    );

}