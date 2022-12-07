import React  from 'react';
import styles from "../styles/Card.module.css";
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import mySvg from '../public/images/questionMark.svg'
import ReactTooltip from "react-tooltip";

export default function Card() {

   
        
    
    var numero = ''
    var formErrors = { number: '', password: '' }
    var numberValid = false
    var formValid = false
    
    
    function handleUserInput(e) {
        
        const name = e.target.name;
        const value = e.target.value;
        // console.log(num)
        numero = e.target.value
        validateField(name, value);
    };

    function validateField(fieldName, value) {
        let fieldValidationErrors = formErrors;
        let numVal = numberValid;
        // let passwordValid = state.passwordValid;

        switch (fieldName) {
            case 'numero':
                // console.log("2",numVal)
                var reg = /^\d+$/;
                numVal = value.match(reg);

                // console.log("3",numVal)
                fieldValidationErrors.number = numVal ? '' : ' is invalid';
                break;
            // case 'password':
            //     passwordValid = value.length >= 6;
            //     fieldValidationErrors.password = passwordValid ? '' : ' is too short';
            //     break;
            default:
                break;
        }

        
        formErrors = fieldValidationErrors,
        numberValid = numVal,
            // passwordValid: passwordValid
        validateForm();
    }

    function validateForm() {
        // setState({formValid: state.emailValid});
        console.log("1",numberValid)
        formValid = numberValid
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
                            {formValid  ? <Form.Text  id="passwordHelpBlock" muted>alo</Form.Text> : null}
                            
                            <Form.Control type="text" placeholder="Digite o numero do cartão" className={styles.Field} name="numero"  onChange={(event) => handleUserInput(event)} />

                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Nome impresso no cartão:
                                <Image data-tip data-for="registerTip1" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                <ReactTooltip id="registerTip1" place="top" effect="solid" className={styles.tooltip}>
                                    Por exemplo: Fulaninho da silva
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Digite o nome impresso no cartão" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Validade:
                                <Image data-tip data-for="registerTip2" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                <ReactTooltip id="registerTip2" place="top" effect="solid" className={styles.tooltip}>
                                    Use o formato XX/XX, por exemplo: 12/12
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Digte a validade do seu cartão" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Cod Segurança:
                                <Image data-tip data-for="registerTip3" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                <ReactTooltip id="registerTip3" place="top" effect="solid" className={styles.tooltip}>
                                    Tres numeros atras do cartão, por ex: 123
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Digite o código de segurança" className={styles.Field} />
                        </Form.Group>
                    </div>
                    <div className={styles.fields}>
                        <Form.Group className={styles.boxField} controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Parcelamento:
                                <Image data-tip data-for="registerTip4" src={mySvg} width={20} height={20} className={styles.infoIcons} alt="Imagem de incone de ajuda" />
                                <ReactTooltip id="registerTip4" place="top" effect="solid" className={styles.tooltip}>
                                    Digite apenas o de parcelas, por ex: 2
                                </ReactTooltip>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Digite o numero de parcelas" className={styles.Field} />
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