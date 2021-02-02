/** @format */

import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import ThemeContext from '~/context/ThemeContext';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import './layout.scss';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div
          className={
            theme.light ? 'wrapper light' : 'wrapper dark'
          }
        >
          <Header
            siteTitle={data.site.siteMetadata.title}
          />
          <div>
            {children}
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
