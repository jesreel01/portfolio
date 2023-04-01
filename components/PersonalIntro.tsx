import React from 'react'

type Props = {}

const PersonalIntro = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-2">
        I&apos;m Jesreel John Miole
      </h1>
      <h3 className="text-xl font-medium mb-3">
        I am a full-stack developer from the Philippines, passionate about
        building robust and innovative solutions with cutting-edge technology.
      </h3>
      <div className="space-x-3">
        <button className="border-2 p-1 border-black rounded">Project</button>
        <button className="border-2 p-1 border-black rounded">Resume</button>
      </div>
    </div>
  )
}

export default PersonalIntro
