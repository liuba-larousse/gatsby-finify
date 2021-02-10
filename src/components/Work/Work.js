/** @format */

import React from 'react';
import { projects } from './data';
import s from './styles.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
var classNames = require('classnames');

export default function Work() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "projects" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const list = projects.map((each) => (
    <div className={classNames(s.card, 'card')}>
      <div className={s.imageWrap}>
        {' '}
        <Img
          fluid={
            data.allFile.nodes[each.imgindex]
              .childImageSharp.fluid
          }
        />
        <div className={s.imageOverlay}></div>
      </div>

      <a href={each.url} className={s.link}>
        <p className={s.cardTitle}>{each.name}</p>
      </a>
      <p className={s.cardPass}>
        password: {each.password}
      </p>
      <p className={s.cardDescr}>{each.desc}</p>
    </div>
  ));
  return (
    <section className={s.section} id='work'>
      <h2>featured work</h2>
      <div className={s.flexlist}>{list}</div>
    </section>
  );
}
