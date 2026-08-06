import React from 'react';

export interface IndustryItem {
  name: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  [key: string]: any;
}

export interface IndustrySwiperProps {
  industries?: IndustryItem[];
  [key: string]: any;
}

declare const IndustrySwiper: React.FC<IndustrySwiperProps>;
export default IndustrySwiper;
