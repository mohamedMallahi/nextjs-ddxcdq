import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from '../components/hooks';

const SignUp = () => {
  const [values, changeHandler, clearFields] = useForm({
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
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
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            value={values.password}
            onChange={changeHandler}
            name="password"
            type="password"
            name="password"
          />
        </div>
        <button className="btn-green btn-block" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <Link href="/signin">Sign In</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
