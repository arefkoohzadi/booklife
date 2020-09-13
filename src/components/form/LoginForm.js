import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppForm, AppFormField, SubmitButton } from ".";
import * as Yup from "yup";
import { auth } from "../../store/actions/auth";
import { Helmet } from "react-helmet";

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

const Login = (props) => {
  const loading = useSelector((state) => state.auth.loading);
  const isAuth = !!useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  let spinner = (
    <svg
      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  if (loading) {
    spinner = (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }

  let authRedirect = null;
  if (isAuth) {
    authRedirect = <Redirect to="/" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>کتاب خوان | ورود به سایت</title>
      </Helmet>
      {authRedirect}
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
            ورود به حساب کاربری
          </h2>
        </div>
        <div className="mt-10">
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              dispatch(auth(values.email, values.password, false))
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
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  ثبت نام نکرده اید؟
                </Link>
              </div>
            </div>

            <SubmitButton title="ورود">{spinner}</SubmitButton>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
