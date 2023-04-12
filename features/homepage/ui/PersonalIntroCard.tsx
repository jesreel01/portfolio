import React from 'react';
import PersonalIntro from '../../../components/PersonalIntro';
import Avatar from '../../../components/Avatar/Avatar';

type Props = {};

const PersonalIntroCard = (props: Props) => {
  return (
    <div className="flex space-x-8">
      <Avatar
        src="/portfolio-profile-img.jpg"
        size={185}
        className="grayscale -mt-2"
      />

      <PersonalIntro />
    </div>
  );
};

export default PersonalIntroCard;
