import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import './SendQuestion.css';
import { useTranslation } from "react-i18next";

function SendMessage() {
    const { t } = useTranslation();
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    const sendMessageFunc = () => {
        const token = "6801934716:AAHWx3JmxDfEjJiJBmk4wBmZ3o_3aKO48OE";
        const chatId = 6801934716;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const message = `Name : ${name},\nPhone number : ${number}`;
        
        axios.post(url, {
            chatId: chatId,
            text: message
        })
        .then(res => {
            console.log(res.data);
            alert("Message sent successfully!");
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="send-question">
            <div className="container send-question__container">
                <ul className="send-question__list">
                    <li className="send-question__item">
                        <h1 className="send-question__title">{t('message.heading')}</h1>
                        <p className="send-question__text">{t('message.desc')}</p>
                    </li>
                    <li className="send-question__item">
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>{t("message.name")}</Form.Label>
                                <FormControl 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="input-name" 
                                    placeholder={t('message.name')} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formNumber">
                                <Form.Label>{t('message.tel')}</Form.Label>
                                <FormControl 
                                    onChange={(e) => setNumber(e.target.value)} 
                                    className="input-number" 
                                    placeholder={t('message.tel')} 
                                />
                            </Form.Group>
                            <Button className="button" onClick={sendMessageFunc}>
                                {t('message.button')}
                            </Button>
                        </Form>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SendMessage;
