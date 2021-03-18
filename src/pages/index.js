/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';
import '~/styles/main.scss';

import Layout from '~/components/Layout/Layout';
import Hero from '~/components/Hero/Hero';
import About from '~/components/About/About';
import Testimonials from '~/components/Testimonials/Testimonials';
import Work from '~/components/Work/Work';
import ContactForm from '~/components/ContactForm/ContactForm';
import SEO from '~/components/SEO/SEO';

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <SEO title='E-Commerce Web Development Studio' />
      <Hero />
      <About />
      <Testimonials />
      <Work />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
