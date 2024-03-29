// comp
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

// hooks
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../utils/hooks';

const SignIn = () => {
  const { user, signin } = useAuth();
  const router = useRouter();

  const [values, changeHandler, clearFields] = useForm({
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signin(values.email, values.password);
      setAlert({
        type: 'success',
        message: 'Account connected successfully',
      });
      router.push('/admin');
    } catch (err) {
      if (err.message.includes('wrong-password')) {
        setAlert({
          type: 'warning',
          message: 'Password is wrong',
        });
        setTimeout(() => setAlert(null), 2000);
      }
    }
  };

  return (
    <>
      <Head>
        <title>NetBlogger | Contact Us</title>
      </Head>
      <div className="container-sign">
        <div className="form-sign">
          <form onSubmit={submitHandler}>
            <h1 className="h3 mb-3 fw-normal text-center">Please Sign In</h1>
            {alert && (
              <div className={`alert alert-${alert.type}`} role="alert">
                {alert.message}
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                className="form-control"
                value={values.email}
                onChange={changeHandler}
                name="email"
                type="text"
                name="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                value={values.password}
                onChange={changeHandler}
                name="password"
                type="password"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-success mb-2" type="submit">
              Sign In
            </button>
            <p>
              Don't have an account?{' '}
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

SignIn.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default SignIn;
