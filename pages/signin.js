import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../utils/hooks';

const SignUp = () => {
  const { user, signin } = useAuth();
  const router = useRouter();

  const [values, changeHandler, clearFields] = useForm({
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signin(values.email, values.password);
      router.push('/admin');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>NetBlogger | Contact Us</title>
      </Head>
      <div className="form-sign">
        <form onSubmit={submitHandler}>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
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
            Don't have an account?{' '}
            <Link href="/signup">
              <a className="text-light">Sign up</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
