import React from "react"
import { useTranslation } from "react-i18next"
import './Scholarship.css';
import scholarship from '../assets/images/scholarship.png';

export const Scholarship = () =>{
    const {t} = useTranslation();
    return(
        <div className="scholarship">
            <h1 className="scholarship-title">{t('scholarship.title')}</h1>
             <div className="container scholarship-container">
                <div className="container-left">
                    <img src={scholarship}/>
                </div>
                <div className="container-right">
                <ul className="scholarship-list">
                    <li className="list-item">
                        <h1 className="gks-title" >{t('scholarship.gksGrantTitle')}</h1>
                        <p className="gks-description">{t('scholarship.gksGrantDescription')}</p>
                    </li>
                    <li className="list-item">
                        <h1 className="gks-provides-title">{t('scholarship.whatGKSProvidesTitle')}</h1>
                        <ul>
                            <li><p className="gks-point1">{t('scholarship.whatGKSProvides.point1')}</p></li>
                            <li><p className="gks-point2">{t('scholarship.whatGKSProvides.point2')}</p></li>
                            <li><p className="gks-point3">{t('scholarship.whatGKSProvides.point3')}</p></li>
                        </ul>
                    </li>
                </ul>
                </div>
             </div>
        </div>
    )
}