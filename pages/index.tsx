import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '../components/Layout/PageLayout'
import Header from '../components/Layout/Header'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import PersonalIntro from '../components/PersonalIntro'
import PortfolioPhoto from '../components/PortfolioPhoto'

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Content>
        <div id="intro" className="flex mt-4 sm:mt-16">
          <PortfolioPhoto
            src="/portfolio-profile-img.jpg"
            alt="Jesreel John Miole"
            size={180}
          />

          <div className="flex-1 max-w-md ml-10">
            <PersonalIntro />
          </div>
        </div>
      </Content>
      <Footer />
    </PageLayout>
  )
}
