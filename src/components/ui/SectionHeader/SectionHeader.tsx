import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  textAlign?: 'left' | 'right' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, textAlign = 'left' }) => (
  <div className={`flex flex-col items-${textAlign} text-${textAlign}`} data-aos="fade-down">
    <div className={`flex items-center justify-between ${textAlign === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      <p className={`text-[24px] font-extrabold md:text-[48px] ${textAlign === 'right' ? 'text-right' : 'text-left'}`}>{title}</p>
      <hr className={`border-primary-500 rounded-xl border-[3px] flex-grow ${textAlign === 'center' ? 'w-1/2' : 'max-w-[50%] md:max-w[50%]'}`} />
    </div>
    <p className={`text-primary-500 text-[16px] font-semibold md:text-[24px] mt-2 ${textAlign === 'right' ? 'text-right' : 'text-left'}`}>{subtitle}</p>
  </div>
);

export default SectionHeader;
