"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`faq-item ${isOpen ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
            >
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                {/* SVG Chevron Down */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </button>
            <div 
              className="faq-answer-wrapper" 
              style={{ maxHeight: isOpen ? "500px" : "0", opacity: isOpen ? 1 : 0 }}
            >
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
