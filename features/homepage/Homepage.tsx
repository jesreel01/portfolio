import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import PersonalIntroCard from './ui/PersonalIntroCard';
import Avatar from '../../components/Avatar/Avatar';

const Homepage = () => {
  return (
    <PageLayout>
      <Header />
      <Content>
        <div id="intro" className="mt-4 sm:mt-16">
          <PersonalIntroCard />
        </div>
      </Content>

      <Footer />
    </PageLayout>
  );
};

export default Homepage;
