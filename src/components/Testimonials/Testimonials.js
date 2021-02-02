/** @format */

import React from 'react';
import { testimonials } from './data';
import s from './styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var classNames = require('classnames');

export default function Testimonials() {
  const list = testimonials.map((each) => (
    <div
      className={classNames(s.testimonial, 'testimonials')}
    >
      <p>{each.name}</p>
      <p>{each.text}</p>
    </div>
  ));
  return (
    <section className={s.section}>
      <Carousel>{list}</Carousel>
    </section>
  );
}
