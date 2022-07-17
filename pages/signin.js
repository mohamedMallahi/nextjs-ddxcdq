import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from '../utils/hooks';

const SignUp = () => {
  const [values, changeHandler, clearFields] = useForm({
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const userCredential = await signInWithEmailAndPassword(
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
        <button className="btn btn-success" type="submit">
          Sign In
        </button>
        <p>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
