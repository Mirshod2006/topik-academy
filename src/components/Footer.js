import React from "react";
import topic_logo from '../assets/images/topic_logo.png';
import youTube from '../assets/images/youtube.png';
import Instagram from '../assets/images/instagram.png';
import telegram from '../assets/images/telegram.png';
import phone from '../assets/images/phone.png';
import './Footer.css';
import { useTranslation } from "react-i18next";

function Footer(){
    const {t} = useTranslation();
    return(
        <div className=" container footer">
            <div className="footer__logo">
                <img src={topic_logo}/>
            </div>
            <div className="footer__link">
                <a href="#">{t('whyUs')}</a>
                <a href="#">{t('results')}</a>
                <a href="#">{t('courses')}</a>
                <a href="#">{t('faq')}</a>
            </div>
            <div className="footer__social">
                <a href="#"><img className="footer__icon" src={youTube}/></a>
                <a href="#"><img className="footer__icon" src={telegram}/></a>
                <a href="#"><img className="footer__icon" src={Instagram}/></a>
                <a href="#"><img className="footer__icon" src={phone}/></a>
            </div>
        </div>
    )
}
export default Footer;
