import Head from 'next/head';
import React from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from '../components/hooks';

const Contact = () => {
  const [values, changeHandler, clearFields] = useForm({
    email: '',
    subject: '',
    message: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const docRef = await addDoc(collection(db, 'messages'), { ...values });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
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
