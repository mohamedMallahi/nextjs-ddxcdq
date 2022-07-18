// comp
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer'

// hooks
import { useRouter } from 'next/router';
import { useForm } from '../utils/hooks';
import { useAuth } from '../contexts/AuthContext';


const SignUp = () => {
  const { signup } = useAuth();
  const router = useRouter();

  const [values, changeHandler, clearFields] = useForm({
    fullname: '',
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signup(values.email, values.password);
      router.push('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>NetBlogger | Sign Up</title>
      </Head>
      <div className="form-sign">
        <form onSubmit={submitHandler}>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign up</h1>
          <div className="form-floating">
            <input
              className="form-control"
              value={values.fullname}
              onChange={changeHandler}
              name="fullname"
              type="text"
              name="fullname"
            />
            <label htmlFor="fullname">Fullname</label>
          </div>
          <div className="form-floating">
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
          <div className="form-floating">
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
          <button className="btn btn-success" type="submit">
            Sign Up
          </button>
          <p>
            Already have an account?{' '}
            <Link href="/signin">
              <a className="text-light">Sign In</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

SignUp.getLayout = PageLayout = (page) => {
  return (
    <>
      {page}
      <Footer/>
    </>
  )
}

export default SignUp;
