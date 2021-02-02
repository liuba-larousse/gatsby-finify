/** @format */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import s from './styles.module.scss';

export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={s.section}>
      <div className={s.bg}></div>
      <div className={s.colorBox}></div>
      <div className={s.imageAndTitle}>
        <div className={s.imageWrap}>
          <Img
            imgStyle={{ objectFit: 'cover' }}
            fluid={data.file.childImageSharp.fluid}
            alt={'happy woman'}
          />
        </div>

        <div className={s.title}>
          <div className='titleFirst'>
            <span>web</span>
            <span>design,</span>
            <span>carefully </span>
          </div>
          <div className='titleSecond'>
            <span>taylored</span>
            <span>for your</span>
            <span>brand </span>
          </div>
        </div>
      </div>
    </section>
  );
}
