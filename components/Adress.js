import React, { useState } from "react";
import styles from "../styles/AdressBox.module.css";
import Form from 'react-bootstrap/Form';
import mySvg from '../public/images/questionMark.svg'
import ReactTooltip from "react-tooltip";
import Image from "next/image";



export default function AdressBox() {

    var [cep, setCep] = useState("")
    var [cepValid, setCepValid] = useState(true)

    var [rua, setRua] = useState("")
    var [ruaValid, setRuaValid] = useState(true)

    var [bairro, setBairro] = useState("")
    var [bairroValid, setBairroValid] = useState(true)

    var [cidade, setCidade] = useState("")
    var [cidadeValid, setCidadeValid] = useState(true)

    function formatarCEP(str) {
        var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/; // Pode usar ? no lugar do *

        if (re.test(str)) {
            setCep(str.replace(re, "$1.$2-$3"));
            return true
        } else {
            return false
        }
    }

    function containsLetters(str) {
        return /[a-z A-Z]+$/.test(str);
    }

    function handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        validateField(name, value);
    };

    function validateField(fieldName, value) {
        let cepVal = cepValid;
        let ruaVal = ruaValid;
        let bairroVal = bairroValid;
        let cidadeVal = cidadeValid;


        switch (fieldName) {
            case 'cep':
                setCep(value)
                if (value.length > 9) {
                    setCep(value.slice(0, -1))
                    value = value.slice(0, -1)
                }
                if (formatarCEP(value)) {
                    cepVal = true
                } else {
                    cepVal = false
                }
                break;
            case 'rua':
                setRua(value)
                if (value.length > 150) {
                    setRua(value.slice(0, -1))
                    value = value.slice(0, -1)
                }

                if (containsLetters(value)) {
                    ruaVal = true
                } else {
                    ruaVal = false
                }
                break;

            case 'bairro':
                setBairro(value)
                if (value.length > 30) {
                    setBairro(value.slice(0, -1))
                    value = value.slice(0, -1)
                }

                if (containsLetters(value)) {
                    bairroVal = true
                } else {
                    bairroVal = false
                }
                break;

            case 'cidade':
                setCidade(value)
                if (value.length > 30) {
                    setCidade(value.slice(0, -1))
                    value = value.slice(0, -1)
                }

                if (containsLetters(value)) {
                    cidadeVal = true
                } else {
                    cidadeVal = false
                }
                break;

            default:
                break;
        }
        setCepValid(cepVal)
        setRuaValid(ruaVal)
        setBairroValid(bairroVal)
        setCidadeValid(cidadeVal)

    }

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
                                <Form.Label className={styles.cepLabel}>CEP:
                                    <Image data-tip data-for="registerTip5" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                    <ReactTooltip id="registerTip5" place="top" effect="solid" className={styles.tooltip}>
                                        Por exemplo: 13181-643
                                    </ReactTooltip>
                                </Form.Label>
                                <Form.Control type="email" placeholder="Digite o seu CEP" className={styles.cepField} value={cep} name="cep" onChange={(event) => handleUserInput(event)} />
                                {cepValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>CEP invalido</span>}
                            </Form.Group>
                        </div>
                        <div className={styles.rua}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.ruaLabel}>Rua:
                                    <Image data-tip data-for="registerTip6" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                    <ReactTooltip id="registerTip6" place="top" effect="solid" className={styles.tooltip}>
                                        Por exemplo: Rua Domingos Conrado
                                    </ReactTooltip>
                                </Form.Label>
                                <Form.Control type="text" placeholder="Digite o nome da sua rua" className={styles.ruaField} value={rua} name="rua" onChange={(event) => handleUserInput(event)} />
                                {ruaValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Rua invalida</span>}

                            </Form.Group>
                        </div>
                    </div>
                    <div className={styles.formRows1}>
                        <div className={styles.bairro}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.bairroLabel}>Bairro:
                                    <Image data-tip data-for="registerTip7" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                    <ReactTooltip id="registerTip7" place="top" effect="solid" className={styles.tooltip}>
                                        Por exemplo: Jardim Bom Retiro
                                    </ReactTooltip>
                                </Form.Label>
                                <Form.Control type="text" placeholder="Digite seu bairro" className={styles.bairroField} value={bairro} name="bairro" onChange={(event) => handleUserInput(event)} />
                                {bairroValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Bairro invalida</span>}

                            </Form.Group>
                        </div>
                        <div className={styles.cidade}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.cidadeLabel}>Cidade:
                                    <Image data-tip data-for="registerTip8" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                    <ReactTooltip id="registerTip8" place="top" effect="solid" className={styles.tooltip}>
                                        Por exemplo: Sumaré
                                    </ReactTooltip>
                                </Form.Label>
                                <Form.Control type="text" placeholder="Digite o nome da sua cidade" className={styles.cidadeField} value={cidade} name="cidade" onChange={(event) => handleUserInput(event)}/>
                                {cidadeValid ? <div class={styles.aux}></div> : <span class={styles.boxHelp}>Cidade invalida</span>}
                            </Form.Group>
                        </div>
                        <div className={styles.numero}>
                            <Form.Group className={styles.boxField} controlId="formBasicPassword">
                                <Form.Label className={styles.numeroLabel}>Numero:
                                    <Image data-tip data-for="registerTip9" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                    <ReactTooltip id="registerTip9" place="top" effect="solid" className={styles.tooltip}>
                                        Digite o numero da sua casa, Por exemplo: 265
                                    </ReactTooltip>
                                </Form.Label>
                                <Form.Control type="number" placeholder="ex: 256" className={styles.numeroField} />
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}
