/** @format */

import React from 'react';

import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import scrollTo from 'gatsby-plugin-smoothscroll';

import ThemeContext from '~/context/ThemeContext';
import s from './styles.module.scss';

var classNames = require('classnames');

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [open, setOpen] = React.useState(false);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <nav>
          <div className={s.logoWrap}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt={siteTitle}
            />
          </div>

          <div className={s.navItems}>
            <button
              className={classNames(
                s.navButton,
                s.menuIcon
              )}
              onClick={() => setOpen(!open)}
            >
              <span className='navItem'>
                <FiMenu />
              </span>
            </button>
            <ul
              className={
                open
                  ? s.dropdown
                  : classNames(s.dropdown, s.visuallyHidden)
              }
            >
              <li>
                <button
                  className={s.navButton}
                  onClick={() => scrollTo('#about')}
                >
                  <span className='navItem'>About</span>
                </button>
              </li>
              <li>
                <button
                  className={s.navButton}
                  onClick={() => scrollTo('#work')}
                >
                  <span className='navItem'>Work</span>
                </button>
              </li>
              <li>
                <button
                  className={s.navButtonQuote}
                  onClick={() => scrollTo('#contact')}
                >
                  <span className='buttonQuote'>
                    Get a quote
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={s.darkSwitcher}
                  onClick={theme.toggleDark}
                >
                  {theme.light ? (
                    <span className='navItem'>
                      <FaMoon />
                    </span>
                  ) : (
                    <span className='navItem'>
                      <FaSun />
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: ``,
};
export default Header;
