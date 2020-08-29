import React from "react";
import { AppForm, AppFormField, SubmitButton } from ".";
import * as Yup from "yup";
import axios from "../../api/axios-books";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("وارد کردن نام کتاب الزامی ست.")
    .label("نام کتاب"),
  imageUrl: Yup.string()
    .required("وارد کردن لینک تصویر الزامی ست.")
    .label("تصویر"),
  author: Yup.string()
    .required("وارد کردن نویسنده الزامی ست.")
    .label("نویسنده"),
  description: Yup.string()
    .required("وارد کردن توضیحات الزامی ست.")
    .label("توضیحات"),
  pages: Yup.string()
    .required("وارد کردن تعداد صفحات الزامی ست.")
    .label("تعداد صفحات"),
  publisher: Yup.string()
    .required("وارد کردن انتشارات الزامی ست.")
    .label("انتشارات"),
});

const CreateBook = (props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="mt-10">
          <AppForm
            initialValues={{
              title: "",
              imageUrl: "",
              author: "",
              description: "",
              pages: "",
              publisher: "",
            }}
            onSubmit={(values) => axios.post("/books.json", values)}
            validationSchema={validationSchema}
          >
            <div>
              <div>
                <AppFormField name="title" placeholder="نام کتاب" />
              </div>
              <div className="mt-8">
                <AppFormField name="imageUrl" placeholder="تصویر" />
              </div>
              <div className="mt-8">
                <AppFormField name="author" placeholder="نویسنده" />
              </div>
              <div className="mt-8">
                <AppFormField name="description" placeholder="توضیحات" />
              </div>
              <div className="mt-8">
                <AppFormField name="pages" placeholder="تعداد صفحات" />
              </div>
              <div className="my-8">
                <AppFormField name="publisher" placeholder="انتشارات" />
              </div>
            </div>

            <SubmitButton title="ثبت کتاب">
              <svg
                className="pencil-alt w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </SubmitButton>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
