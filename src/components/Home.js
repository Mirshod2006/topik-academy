import roof_img from '../assets/images/roof_img.png';
import leaf from  '../assets/images/leaf_img.png'
import './Home.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () =>{
    const {t} = useTranslation();
    return (
        <div className='home'>
            <div className='container home-container'>
                <div className='home-left'>
                    <ul className='home-list1'>
                        <p className='home-text'>{t('home.subtitle')}</p>
                    </ul>
                    <h1 className='home-title'>{t('home.title')}</h1>
                    <ul className='home-list1' >
                        <li className='home-lists'>
                            <img className='home-img' src={leaf}/>
                            <p className='home-benefit1'>{t('home.benefit1')}</p>
                        </li>
                        <li className='home-lists'>
                            <img className='home-img' src={leaf}/>
                            <p className='home-benefit2'>{t('home.benefit2')}</p>
                        </li>
                    </ul>
                    <ul className='home-list2'>
                        <button className='home-btn'>{t('home.buttonText')}</button>
                        <p className='home-promoT'>{t('home.promoText')}</p>
                    </ul>
                </div>
                <img className='home-backImg' src={roof_img}/>
            </div>
        </div>
    );
}