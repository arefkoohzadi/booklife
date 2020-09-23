import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppForm, AppFormField, SubmitButton } from ".";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import { auth, authErorToNull } from "../../store/actions/auth";
import Alert from "../Alert";
import { errorMessage } from "../../utility/errorMessage";

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
  const loading = useSelector((state) => state.auth.loading);
  const isAuth = !!useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  let spinner = (
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

  const closeHandler = () => {
    dispatch(authErorToNull());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>کتاب خوان | ثبت نام در سایت</title>
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
            ثبت نام در کتاب خوان
          </h2>
        </div>
        <div className="mt-10">
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              dispatch(auth(values.email, values.password, true))
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

            <SubmitButton title="ثبت نام">{spinner}</SubmitButton>
          </AppForm>
        </div>
      </div>
      {!!error && (
        <Alert
          subject="خطای ثبت نام"
          description={errorMessage(error.message)}
          okTitle="باشد!"
          close={closeHandler}
        />
      )}
    </div>
  );
};

export default Register;
