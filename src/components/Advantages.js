import target from '../assets/images/target.png';
import rocket from '../assets/images/rocket.png';
import money from '../assets/images/money.png';
import key from '../assets/images/key.png';
import suitcase from '../assets/images/suit_case.png';
import message from '../assets/images/message.png';//src\assets\images\message_icon.png
import './Advantages.css';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';

export const Advantages = () =>{
    const [name, setName] = useState();
    const [number,setNumber] = useState();
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    const sendMessage = () =>{
        const token = "6801934716:AAHWx3JmxDfEjJiJBmk4wBmZ3o_3aKO48OE",
            chatId = 6801934716;
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const message = `Name : ${name}\n Phone : ${number}`
        fetch(
            url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": message
            })
        }
        ).then(res=>res.json())
        .then(data=>{
            alert(t("message.success"))
        }).catch(
            err=>{console.log(err)}
        )
    }
    const showModal = () =>{
        setOpen(true)
    }
    const hideModal = () =>{
        setOpen(false)
        }
    return(
        <div className='advan'>
            <div className='container advan-container'>
                <h1 className='advan-heading'>{t('choose.heading')}</h1>
                <ul className='advan-list'>
                    <li className='advan-item'>
                        <img className='advan-img' src={message} alt="message"/>
                        <p className='advan-text'>{t('choose.item1')}</p>
                    </li>
                    <li className='advan-item'>
                        <img className='advan-img' src={rocket} alt="rocket"/>
                        <p className='advan-text'>{t('choose.item2')}</p>
                    </li>
                    <li className='advan-item'>
                        <img className='advan-img' src={money} alt="money"/>
                        <p className='advan-text'>{t('choose.item3')}</p>
                    </li>
                    <li className='advan-item'>
                        <img className='advan-img' src={suitcase} alt="suitcase"/>
                        <p className='advan-text'>{t('choose.item4')}</p>
                    </li>
                    <li className='advan-item'>
                        <img className='advan-img' src={target} alt="target"/>
                        <p className='advan-text'>{t('choose.item5')}</p>
                    </li>
                    <li className='advan-item'>
                        <img className='advan-img' src={key} alt="key"/>
                        <p className='advan-text'>{t('choose.item6')}</p>
                    </li>
                </ul>
                <ul className='advan-list'>
                    <Button className='advan-btn' onClick={showModal}>{t('choose.button')}</Button>
                    {open && (<Modal>
                        <Form open={open} footer={null} onCancel={hideModal}>
                            <Form.Item label={t('message.name')}>
                                <FormControl onChange={(e)=>setName(e.target.value)} className='advan-input' placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.phone')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} className='advan-input' placeholder={t('message.phone')}/>
                            </Form.Item>
                            <Button onClick={sendMessage}>{t("modal.btnFree")}</Button>
                        </Form>
                    </Modal>)}
                </ul>
            </div>
        </div>
    );
}