import axios from "axios";
import React from "react";
import { Form,FormControl,Button } from "react-bootstrap";
import './SendQuestion.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Send(){
    const {t} = useTranslation();
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const sendMessage = ()=>{
            const token = "6801934716:AAHWx3JmxDfEjJiJBmk4wBmZ3o_3aKO48OE",
            chatId = 6801934716;
            const url = `https://api.telegram.org/bot${token}/sendMessage`
            const message = `Name : ${name},\nPhone number : ${number}`;
            axios(
                url,{
                    method: 'POST',
                    body: JSON.stringify({
                    "chatId":chatId,
                    "text" :message
                })
                }
            ).then(
                res=>res.json()
            ).then(
                data=>alert("Send")
            ).catch(
                err=>console.log(err)
            )
    } 
    return(
        <div className="send-question">
                <div className="container send-question__container">
                    <ul className="send-question__list">
                        <li className="send-question__item">
                            <h1 className="send-question__title">{t('message.heading')}</h1>
                            <p className="send-question__text">{t('message.desc')}</p>
                        </li>
                        <li className="send-question__item">
                        <Form>
                            <Form.Item label={t("message.name")}>
                                <FormControl onChange={(e)=>setName(e.target.value)} className="input-name" placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.tel')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} className="input-number" placeholder={t('message.tel')}/>
                            </Form.Item>
                            <Button className="button" onClick={sendMessage}>{t('message.button')}</Button>
                        </Form>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
export default Send;