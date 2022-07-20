import React, { useState } from 'react';
import Head from 'next/head';

// React Quill Require.
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import slug from 'slug';

import { useForm } from '../../utils/hooks';
import addArticle from '../../utils/addArticle';
import AdminLayout from '../../components/AdminLayout';

export default function NewArticle() {
  const [values, changeHandler] = useForm({
    title: '',
    image: '',
  });
  const [body, setBody] = useState('');

  const publishHandler = async (e) => {
    e.preventDefault();
    console.log({ ...values, body });
    let articleSlug = slug(values.title);
    await addArticle({ ...values, body, slug: articleSlug });
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
      </Head>
      <form className="new-form">
        <input
          name="title"
          value={values.title}
          onChange={changeHandler}
          className="w-100 py-2 px-3"
          type="text"
          placeholder="Title"
        />
        <ReactQuill
          theme="snow"
          value={body}
          onChange={(value) => setBody(value)}
        />
        <div className="mt-2">
          <label>Image URL: </label>
          <input
            className="w-100 py-2 px-3"
            type="url"
            name="image"
            value={values.image}
            onChange={changeHandler}
            placeholder="https://"
          />
        </div>
        <div className="mt-2">
          <button className="me-2  btn btn-info">Save</button>
          <button className="btn btn-success" onClick={publishHandler}>
            Publish
          </button>
        </div>
      </form>
      {/* <div>{parse(text)}</div> */}
    </>
  );
}

NewArticle.getLayout = (page) => {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};
