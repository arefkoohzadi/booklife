import React from "react";
import { Link } from "react-router-dom";
import { AppForm, AppFormField, SubmitButton } from ".";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل صحیح نمی باشد.")
    .required("وارد کردن ایمیل الزامی ست.")
    .label("ایمیل"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد.")
    .required("وارد کردن رمز عبور الزامی ست.")
    .label("رمز عبور"),
});

const Register = (props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <svg
            className="fill-current text-teal-700 text-opacity-75 h-16 w-16 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
          </svg>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            ثبت نام در کتاب خوان
          </h2>
        </div>
        <div className="mt-10">
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              axios
                .post(
                  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVkpd6U-C8OqSo4ErlfwvW2PI_4Bpo2Cs",
                  {
                    email: values.email,
                    password: values.password,
                    returnSecureToken: true,
                  }
                )
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
            }
            validationSchema={validationSchema}
          >
            <div>
              <div>
                <AppFormField name="email" type="email" placeholder="ایمیل" />
              </div>
              <div className="mt-8">
                <AppFormField
                  name="password"
                  type="password"
                  placeholder="رمز عبور"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="text-sm leading-5">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  قبلا ثبت نام کرده اید؟
                </Link>
              </div>
            </div>

            <SubmitButton title="ثبت نام">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </SubmitButton>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
