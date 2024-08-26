import React, { useState } from "react";
import './StudyAid.css';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import certificate from '../assets/images/certificate.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import axios from "axios";

export const StudyAid = ()=>{
    const {t} = useTranslation();
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [open,setOpen] = useState(false);
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
    const showModal = ()=>{
        setOpen(true);
    }
    const hideModal = ()=>{
        setOpen(false);
    }
    return(
        <div className="aid">
            <h1 className="heading">{t('success.title')}</h1>
            <div className="container aid-container">
                <div className="container-left">
                    <p className="aid-desc"> 
                        <span className="green">TOPIK Academy Consulting </span><span>{t('success.description')}</span>
                    </p>
                    <p className="aid-ref">{t('success.consultationInfo')}</p>
                    <button className="aid-button" onClick={showModal}>{t('success.applyButton')}</button>
                    {open && (<Modal open={open} footer={null} onCancel={hideModal}>
                        <Form>
                            <Form.Item label={t("message.name")}>
                                <FormControl onChange={(e)=>setName(e.target.value)} placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.tel')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} placeholder={t('message.tel')}/>
                            </Form.Item>
                            <Button onClick={sendMessage}></Button>
                        </Form>
                    </Modal>)}
                </div>
                <div className="container-right">
                    <Marquee direction="left" autoFill="true" className="aid-marquee">
                        <img className="aid-img" src={certificate} alt="Certificate"/>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}