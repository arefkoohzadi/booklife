import React, { useEffect, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import Login from "./components/form/LoginForm";
import Register from "./components/form/RegisterForm";
import Home from "./components/Home";
import Book from "./components/book/Book";
import Author from "./components/author/Author";
import CreateBook from "./components/form/CreateBook";
import CreateAuthor from "./components/form/CreateAuthor";
import Logout from "./components/Logout";
import NotFound from "./components/not-found/NotFound";
import ProgressBar from "./components/common/ProgressBar";
import { fetchBooks } from "./store/actions/book";
import { fetchAuthors } from "./store/actions/author";
import { authCheckState } from "./store/actions/auth";

const Cv = React.lazy(() => import("./components/cv/Cv"));
const MyBooks = React.lazy(() => import("./components/myBook/MyBooks"));

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<ProgressBar loading={true} />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/createbook" component={CreateBook} />
            <Route path="/createauthor" component={CreateAuthor} />
            <Route path="/cv" component={Cv} />
            <Route path="/my-books" component={MyBooks} />
            <Route path="/book/:id" component={Book} />
            <Route path="/author/:id" component={Author} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
