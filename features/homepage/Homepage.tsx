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
        <div id="intro" className="flex mt-4 sm:mt-16">
          <PersonalIntroCard />
        </div>
      </Content>
      <Avatar
        size="default"
        className="inline-flex rounded-full bg-slate-600 h-10 w-10"
      />
      <div className="bg-emerald-400">sdfsdfsdfsdfsdf</div>
      <Footer />
    </PageLayout>
  );
};

export default Homepage;
