import Head from 'next/head';
import React from 'react';
import { useForm } from '../components/hooks';

const Contact = () => {
  const [values, changeHandler, clearFields] = useForm({
    email: '',
    subject: '',
    message: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>NetBlogger | Contact Us</title>
      </Head>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            value={values.email}
            onChange={changeHandler}
            name="email"
            type="text"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            className="form-control"
            value={values.subject}
            onChange={changeHandler}
            name="subject"
            type="text"
            name="subject"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            value={values.message}
            onChange={changeHandler}
            name="message"
            type="text"
            name="message"
          />
        </div>
        <button className="btn btn-block" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;
