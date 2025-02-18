import React, { useState } from 'react';
import SectionTitle from './SectionTitle'; // Импортируем компонент заголовка

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div tabIndex={0} className={`collapse collapse-arrow border-base-300 bg-base-200 border ${isOpen ? 'collapse-open' : ''}`} onClick={toggleOpen}>
      <div className="collapse-title text-xl font-medium">{question}</div>
      {isOpen && (
        <div className="collapse-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = ({ faqData }) => {
  return (
    <div className="container mx-auto my-10">
         <SectionTitle
                        badgeText="FAQ"
                        badgeBgColor="bg-blue-500"
                        badgeTextColor="text-white"
                     
                        title="Вопросы и ответы"
                        
                    />
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
