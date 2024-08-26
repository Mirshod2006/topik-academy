import React  from "react";
import "./Navbar.css";
import topic_image from "../assets/images/topic_image.png";
import { useTranslation } from "react-i18next";


export const Navbar = () =>{
    const {t, i18n} = useTranslation();
    const lng = localStorage.getItem('i18nextLng');
    
    const changeLan = (e) =>{
        const selected = e.target.value;
        i18n.changeLanguage(selected);
    }
    return(
        <div className="navbar">
            <div className="container navbar-container">
                <ul className="navbar-list1">
                <img className="navbar-img" src={topic_image}/>
                <p className="navbar-text">{t('logoText')}</p>
                </ul>
                <ul className="navbar-list2">
                    <li className="navbar-item"><a href="#whyUs" className="navbar-link">{t('whyUs')}</a></li>
                    <li className="navbar-item"><a href="#results" className="navbar-link">{t('results')}</a></li>
                    <li className="navbar-item"><a href="#courses" className="navbar-link">{t('courses')}</a></li>
                    <li className="navbar-item"><a href="#faq" className="navbar-link">{t('faq')}</a></li>
                </ul>
                <ul className="navbar-list3">
                    <li className="navbar-item">
                    <section name="LNG" id="lan" onChange={changeLan} value={lng}>
                        <option value="uz">O'zbek</option>
                        <option value="ru">Русский</option>
                        <option value="eng">English</option>
                    </section>
                    </li>
                    <li className="navbar-item">
                        <p className="navbar-number">+998 (33) 306 0098</p>
                        <p className="navbar-claim">{t('connectNow')}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

