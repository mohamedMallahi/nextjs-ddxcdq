import Head from 'next/head';
import Link from 'next/link';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from '../utils/hooks';

const SignUp = () => {
  const [values, changeHandler, clearFields] = useForm({
    fullname,
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
      await user.updateProfile({
        displayName: values.fullname,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>NetBlogger | Contact Us</title>
      </Head>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            className="form-control"
            value={values.fullname}
            onChange={changeHandler}
            name="fullname"
            type="text"
            name="fullname"
          />
        </div>
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
