import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center">
        <div className="">
          <h1 className="text-4xl font-semibold mb-2">
            I'm Jesreel John Miole
          </h1>
          <h3 className="text-xl font-medium mb-3">
            - Fullstack developer based in the Philippines.
          </h3>
          <div className="space-x-3">
            <button className="border-2 p-1 border-black rounded">
              Project
            </button>
            <button className="border-2 p-1 border-black rounded">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div>Testing lang</div>
    </div>
  )
}
