import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../components/Layout/PageLayout';
import Header from '../components/Layout/Header';
import Content from '../components/Layout/Content';
import Footer from '../components/Layout/Footer';
import PersonalIntro from '../components/PersonalIntro';
import PortfolioPhoto from '../components/PortfolioPhoto';
import Homepage from '../features/homepage/Homepage';

export default function Home() {
  return <Homepage />;
}
