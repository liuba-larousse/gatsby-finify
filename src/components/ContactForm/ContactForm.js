/** @format */

import React from 'react';
import s from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_PZif8Iis5wYhDFKv7GSLp');

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm();
  //const onSubmit = (data) => console.log(data);

  const [contactNumber, setContactNumber] = React.useState(
    '000000'
  );

  //submitionstatus
  const [statusMessage, setStatusMessage] = React.useState(
    'Message'
  );

  const generateContactNumber = () => {
    const numStr =
      '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    console.log(data);
    const form = document.querySelector('#contact-form');
    const statusMessage = document.querySelector(
      '.status-message'
    );

    generateContactNumber();
    sendForm(
      'contact_form',
      'template_lmcspt9',
      '#contact-form'
    ).then(
      function (response) {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        );
        setStatusMessage('Message sent!');
        statusMessage.className = 'status-message success';
        setTimeout(() => {
          statusMessage.className = 'status-message';
        }, 5000);
        form.reset();
      },
      function (error) {
        console.log('FAILED...', error);
        setStatusMessage(
          'Failed to send message! Please try again later.'
        );
        statusMessage.className = 'status-message failure';
        setTimeout(() => {
          statusMessage.className = 'status-message';
        }, 5000);
      }
    );
  };

  return (
    <section className={s.section} id='contact'>
      <h2>Contact us</h2>
      <p className='status-message'>{statusMessage}</p>
      <form
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='hidden'
          name='contact_number'
          value={contactNumber}
        />
        {errors.user_name &&
          errors.user_name.type === 'required' && (
            <div role='alert'>
              Name is required
              <br />
            </div>
          )}
        <input
          type='text'
          name='user_name'
          placeholder='Name'
          maxLength='50'
          aria-invalid={errors.user_name ? 'true' : 'false'}
          ref={register({ required: true })}
        />
        <br />
        {errors.user_email &&
          errors.user_email.type === 'required' && (
            <div role='alert'>
              Email is required
              <br />
            </div>
          )}
        <input
          type='email'
          name='user_email'
          placeholder='Email'
          maxLength='50'
          aria-invalid={
            errors.user_email ? 'true' : 'false'
          }
          ref={register({ required: true })}
        />
        <br />
        {errors.message &&
          errors.message.type === 'required' && (
            <div role='alert'>
              Message is required
              <br />
            </div>
          )}
        <textarea
          name='message'
          maxLength='1500'
          aria-invalid={errors.message ? 'true' : 'false'}
          ref={register({ required: true })}
          placeholder='Message'
        />
        <br />

        <input type='submit' value='Send' />
      </form>
    </section>
  );
}
