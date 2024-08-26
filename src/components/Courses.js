import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import roof1 from '../assets/images/roof1.png';
import roof2 from '../assets/images/roof2.png'
import temple from '../assets/images/temple.png'
import { useTranslation } from "react-i18next";
import './Courses.css';


export const Courses = () =>{
    const {t} = useTranslation();
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [open,setOpen] = useState(false);
    const sendMessage =()=>{
      const token = "6801934716:AAHWx3JmxDfEjJiJBmk4wBmZ3o_3aKO48OE",
      chatId = 6801934716;
       const text = `Name: ${name}\nNumber: ${number}`
       fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            "chat_id":chatId,
            "text":text
            })
        }
      )
      .then(res=>res.json())
      .then(
        data=>alert(t('message.send'))
      )
      .catch(
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
        <div className="courses">
          <h1 className="course-heading">{t("course.heading")}</h1>
            <div className="container courses-container">
                  <ul className="course-list">
                    <img className="course-img" src={roof1}/>
                    <li className="course-upperText">  
                    <h2 className='course-type'>{t("course.intensiveType")}</h2>
                    <div className="course-buttonShape">{t('course.durationLabel')} 5 {t('course.month')}</div>
                    </li>
                    <li className="course-lowerText">
                      <p className="course-info">{t('course.intensiveDesc')}</p>
                      <div className="space">
                      <span><button className="course-button" onClick={showModal}>{t('course.registerButton')}</button></span>
                      <span className="course-costText">970.000 so'm{t('course.perMonth')}</span>
                      </div>
                      <Modal open={open} footer={null} onCancel={hideModal}>
                        <Form>
                            <Form.Item label={t("message.name")}>
                                <FormControl onChange={(e)=>setName(e.target.value)} placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.tel')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} placeholder={t('message.tel')}/>
                            </Form.Item>
                            <Button onClick={sendMessage}></Button>
                        </Form>
                    </Modal>
                    </li>
                  </ul>
                  <ul className="course-list">
                  <img className="course-img" src={roof2}/>
                    <li className="course-upperText">  
                    <h2 className='course-type'>{t("course.regularType")}</h2>
                    <div className="course-buttonShape">{t('course.durationLabel')} 5 {t('course.month')}</div>
                    </li>
                    <li className="course-lowerText">
                      <p className="course-info">{t('course.regularDesc')}</p>
                      <div className="space">
                      <span><button className="course-button">{t('course.registerButton')}</button></span>
                      <span className="course-costText">970.000 so'm{t('course.perMonth')}</span>
                      </div>
                      <Modal open={open} footer={null} onCancel={hideModal}>
                        <Form>
                            <Form.Item label={t("message.name")}>
                                <FormControl onChange={(e)=>setName(e.target.value)} placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.tel')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} placeholder={t('message.tel')}/>
                            </Form.Item>
                            <Button onClick={sendMessage}></Button>
                        </Form>
                    </Modal>
                    </li>
                  </ul>
                  <ul className="course-list">
                  <img className="course-img" src={temple}/>
                    <li className="course-upperText">  
                    <h2 className='course-type'>{t("course.individualType")}</h2>
                    <div className="course-buttonShape">{t('course.durationLabel')} 5 {t('course.month')}</div>
                    </li>
                    <li className="course-lowerText">
                      <p className="course-info">{t('course.individualDesc')}</p>
                      <div className="space">
                      <span><button className="course-button">{t('course.registerButton')}</button></span>
                      <span className="course-costText">970.000 so'm{t('course.perMonth')}</span>
                      </div>
                      <Modal open={open} footer={null} onCancel={hideModal}>
                        <Form>
                            <Form.Item label={t("message.name")}>
                                <FormControl onChange={(e)=>setName(e.target.value)} placeholder={t('message.name')}/>
                            </Form.Item>
                            <Form.Item label={t('message.tel')}>
                                <FormControl onChange={(e)=>setNumber(e.target.value)} placeholder={t('message.tel')}/>
                            </Form.Item>
                            <Button onClick={sendMessage}></Button>
                        </Form>
                    </Modal>
                    </li>
                  </ul>
                </div>
            </div>
    )
}