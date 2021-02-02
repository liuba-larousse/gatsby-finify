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

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
      <About />
      <Testimonials />
      <Work />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
