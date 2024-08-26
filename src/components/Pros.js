import React from "react";
import num1 from '../assets/images/num1.png';
import num2 from '../assets/images/num2.png';
import num3 from '../assets/images/num3.png';
import num4 from '../assets/images/num4.png';
import num5 from '../assets/images/num5.png';
import num6 from '../assets/images/num6.png';
import { useTranslation } from "react-i18next";
import './Pros.css';

export const Pros = ()=>{
    const {t} = useTranslation();
    return(
        <div className="pros">
            <h1 className="pros-title">{t('advantage.header')}</h1>
                <div className="container pros-container">
                    <ul className="pros-list">
                        <li className="pros-item">
                            <img src={num1} alt="num1"/>
                            <h2>{t('advantage.professionalTeachers')}</h2>
                            <p>{t('advantage.professionalTeachersDesc')}</p>
                        </li>
                        <li className="pros-item">
                            <img src={num2} alt="num2"/>
                            <h2>{t('advantage.freeCoworking')}</h2>
                            <p>{t('advantage.freeCoworkingDesc')}</p>
                        </li>
                        <li className="pros-item">
                            <img src={num3} alt="num3"/>
                            <h2>{t('advantage.weeklyEvents')}</h2>
                            <p>{t('advantage.weeklyEventsDesc')}</p>
                        </li>
                        <li className="pros-item">
                            <img src={num4} alt="num4"/>
                            <h2>{t('advantage.freeMockExams')}</h2>
                            <p>{t('advantage.freeMockExamsDesc')}</p>
                        </li>
                        <li className="pros-item">
                            <img src={num5} alt="num5"/>
                            <h2>{t('advantage.assistantCurators')}</h2>
                            <p>{t('advantage.assistantCuratorsDesc')}</p>
                        </li>
                        <li className="pros-item">
                            <img src={num6} alt="num6"/>
                            <h2>{t('advantage.consultingServices')}</h2>
                            <p>{t('advantage.consultingServicesDesc')}</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
}