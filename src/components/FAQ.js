import React,{useState} from "react";
import { useTranslation } from 'react-i18next';

const Accordion = ({title,isOpen,onToggle,index,children}) =>{
    return(
        <div>
            <button
            onClick={()=>onToggle(index)}
            style={{width: '100%',padding: '10px',lineHeight:"36px", textAlign: 'left',border: 'none',borderBottom: '1px solid #ddd',display: 'flex',justifyContent: 'space-between', alignItems: 'center',}}>
                {title}
                <span>{isOpen?'x':'+'}</span>
            </button>
            {isOpen && (
        <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
          {children}
        </div>
      )}
        </div>
    )
}

const FAQ = () =>{
    const {t} = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return(
        <div className="container faq-container">
            <Accordion
            title={t('faqs.question1')}
             isOpen={openIndex===0}
             onToggle={handleToggle}
             index={0}
            >
            <p>{t('faqs.answer1')}</p>
            </Accordion>
            <Accordion
            title={t('faqs.question2')}
             isOpen={openIndex===0}
             onToggle={handleToggle}
             index={0}
            >
            <p>{t('faqs.answer2')}</p>
            </Accordion>
            <Accordion
            title={t('faqs.question3')}
             isOpen={openIndex===0}
             onToggle={handleToggle}
             index={0}
            >
            <p>{t('faqs.answer3')}</p>
            </Accordion>
            <Accordion
            title={t('faqs.question4')}
             isOpen={openIndex===0}
             onToggle={handleToggle}
             index={0}
            >
            <p>{t('faqs.answer4')}</p>
            </Accordion>
            <Accordion
            title={t('faqs.question5')}
             isOpen={openIndex===0}
             onToggle={handleToggle}
             index={0}
            >
            <p>{t('faqs.answer5')}</p>
            </Accordion>
        </div>
    )
}
export default FAQ;