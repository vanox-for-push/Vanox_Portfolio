import React, { useState } from 'react';

const IndustryAccordion = ({ industries }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[600px] gap-4 p-4 md:p-8 max-w-[1400px] mx-auto">
      {industries.map((ind, i) => {
        const isActive = active === i;

        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden cursor-pointer rounded-[2rem] bg-slate-100 border border-slate-200/50 ${
              isActive ? 'shadow-2xl shadow-purple-500/20' : 'shadow-sm hover:shadow-md'
            }`}
            style={{ 
              flex: isActive ? 4 : 1,
              transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
              backgroundImage: `url(${ind.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: isActive ? '200px' : '80px',
            }}
          >
            {/* Gradient Overlay for Text Readability */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive 
                  ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-100' 
                  : 'bg-slate-900/70 opacity-100 hover:bg-slate-900/50'
              }`} 
            />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              
              {/* Header (Icon + Title) */}
              <div className="flex items-center gap-4 text-white z-20">
                <div 
                  className={`flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isActive ? 'bg-purple-600 p-4 shadow-lg shadow-purple-600/50' : 'bg-white/10 p-4 backdrop-blur-md'
                  }`}
                >
                  {React.cloneElement(ind.icon, { size: isActive ? 28 : 24 })}
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-500 flex items-center ${
                    isActive ? 'max-w-full opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-4'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap pl-2">
                    {ind.name}
                  </h3>
                </div>
              </div>

              {/* Collapsed State Title (Vertical Text on Desktop) */}
              <div 
                className={`hidden md:flex absolute inset-0 flex-col items-center justify-start pt-10 pointer-events-none transition-opacity duration-300 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h3 
                  className="text-white font-bold text-xl tracking-widest uppercase"
                  style={{ 
                    writingMode: 'vertical-rl', 
                    textOrientation: 'mixed'
                  }}
                >
                  {ind.name}
                </h3>
              </div>

              {/* Collapsed State Title (Horizontal on Mobile) */}
              <div 
                className={`md:hidden absolute inset-0 flex items-center pl-[6.5rem] pointer-events-none transition-opacity duration-300 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h3 className="text-white font-bold text-xl tracking-wide">
                  {ind.name}
                </h3>
              </div>
              
              {/* Expanded State Description */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out z-20 ${
                  isActive ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-slate-200 text-lg md:text-xl max-w-lg leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustryAccordion;
