/** @format */

import React from 'react';
import s from './styles.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.contact}>
        <span>Tel: +18571234567</span>
        <span>hello@finify.expert</span>
      </div>
      <div className={s.navigation}>
        <p>SITE</p>
        <button
          className={s.link}
          onClick={() => scrollTo('#about')}
        >
          <span className='navItem'>About</span>
        </button>
        <button
          className={s.link}
          onClick={() => scrollTo('#work')}
        >
          <span className='navItem'>Work</span>
        </button>
      </div>
    </footer>
  );
}
