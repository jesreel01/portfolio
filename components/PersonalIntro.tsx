import React from 'react';
import Button from './Button/Button';

type Props = {};

const PersonalIntro = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2 text-center sm:text-4xl sm:text-start">
        I&apos;m Jesreel John Miole
      </h1>
      <h3 className="text-base text-center font-medium mb-3  sm:text-xl sm:text-start">
        I am a full-stack developer from the Philippines, passionate about
        building robust and innovative solutions with cutting-edge technology.
      </h3>
      <div className="space-x-3 flex justify-center sm:justify-start">
        <Button size="lg">Project</Button>
        <Button size="base">Contact</Button>
        <Button size="sm">Contact</Button>
      </div>
    </div>
  );
};

export default PersonalIntro;
