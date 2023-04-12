import PageLayout from '../components/Layout/PageLayout';
import Header from '../components/Layout/Header';
import Content from '../components/Layout/Content';
import Footer from '../components/Layout/Footer';

export default function AboutPage() {
  return (
    <PageLayout>
      <Header />
      <Content>About Page</Content>
      <Footer />
    </PageLayout>
  );
}
