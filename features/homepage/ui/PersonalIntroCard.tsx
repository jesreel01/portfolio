import React from 'react';
import PortfolioPhoto from '../../../components/PortfolioPhoto';
import PersonalIntro from '../../../components/PersonalIntro';

type Props = {};

const PersonalIntroCard = (props: Props) => {
  return (
    <div className="flex-1 w-full sm:max-w-2xl sm:flex">
      {/* <div className="flex flex-1 justify-center mb-2 sm:hidden">
        <PortfolioPhoto
          className="w-[160px] h-[160px]"
          src="/portfolio-profile-img.jpg"
          alt="Jesreel John Miole"
          size={160}
        />
      </div>

      <div className="hidden sm:flex justify-center mr-10">
        <div className="w-44 h-44 rounded-full bg-slate-700">
          <PortfolioPhoto
            src="/portfolio-profile-img.jpg"
            alt="Jesreel John Miole"
            size={176}
          />
        </div>
      </div> */}

      <PersonalIntro />
    </div>
  );
};

export default PersonalIntroCard;
