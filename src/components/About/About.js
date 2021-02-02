/** @format */

import React from 'react';
import s from './styles.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const data = useStaticQuery(graphql`
    {
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service: file(relativePath: { eq: "service.jpeg" }) {
        childImageSharp {
          fluid(cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={s.section} id='about'>
      <div className={s.aboutText}>
        <h2>about us</h2>
        <p>
          We help small and medium creative businesses start
          their profitable online store. We build unique
          presence for your service or product.
        </p>
      </div>
      <div className={s.aboutImg}>
        <div className={s.imageWrap}>
          <Img
            imgStyle={{ objectFit: 'cover' }}
            fluid={data.about.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className={s.serviceText}>
        <h2>we can help you with</h2>
        <div className={s.checkmark}>
          <span className='checkmark'>
            <FaCheckCircle />
          </span>
          <p>Store set up</p>
        </div>
        <div className={s.checkmark}>
          <span className='checkmark'>
            <FaCheckCircle />
          </span>
          <p>Development</p>
        </div>
        <div className={s.checkmark}>
          <span className='checkmark'>
            <FaCheckCircle />
          </span>
          <p>Troubleshooting</p>
        </div>
      </div>
      <div className={s.serviceImg}>
        <div className={s.imageWrap}>
          <Img
            imgStyle={{ objectFit: 'cover' }}
            fluid={data.service.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
}
