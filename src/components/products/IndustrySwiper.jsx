import React, { useRef, useState } from 'react';
import './IndustrySwiper.css';

const IndustrySwiper = ({ industries = [] }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="industry-swiper-wrapper group">
      
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className={`industry-swiper-container ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {industries.map((ind, i) => {
          const bgUrl = ind.image ? encodeURI(ind.image) : '';
          return (
            <div 
              key={ind.name || i}
              className="industry-swiper-card"
            >
              {/* Background Image */}
              <div 
                className="industry-swiper-bg"
                style={{ backgroundImage: bgUrl ? `url("${bgUrl}")` : undefined }}
              />
              
              {/* Gradient Overlay */}
              <div className="industry-swiper-overlay" />
              
              {/* Content Container */}
              <div className="industry-swiper-content">
                
                {/* Text Content */}
                <div className="industry-swiper-text">
                  <div className="industry-swiper-header" style={{ marginBottom: 0 }}>
                    {ind.icon && React.isValidElement(ind.icon)
                      ? React.cloneElement(ind.icon, { size: 24, color: "#ffffff", className: "flex-shrink-0" })
                      : ind.icon && (typeof ind.icon === "function" || typeof ind.icon === "object")
                      ? React.createElement(ind.icon, { size: 24, color: "#ffffff", className: "flex-shrink-0" })
                      : null}
                    <h3 className="industry-swiper-title">
                      {ind.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustrySwiper;
