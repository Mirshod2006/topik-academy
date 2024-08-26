import certificate from '../assets/images/certificate.png'
import React from 'react';
import'./HorizonScroll.css';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

export const HorizonScroll = () =>{
    const {t} = useTranslation();
    return(
        <div id='results' className='horizonScroll'>
            <div className='container horizonScroll-container'>
                <h1 className='horizonScroll-title'>{t('result.heading')}</h1>
                <Marquee direction="right" className='horizonScroll-marquee' autoFill={true}>
                    <img className='horizonScroll-img' src={certificate} alt=''/>
                </Marquee>
                <Marquee direction="left" className='horizonScroll-marquee' autoFill={true}>
                    <img className='horizonScroll-img' src={certificate} alt=''/>
                </Marquee>
            </div>
        </div>
    )
}