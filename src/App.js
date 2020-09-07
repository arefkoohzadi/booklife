import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import Login from "./components/form/LoginForm";
import Register from "./components/form/RegisterForm";
import Home from "./components/Home";
import Cv from "./components/cv/Cv";
import Book from "./components/book/Book";
import Author from "./components/Author/Author";
import CreateBook from "./components/form/CreateBook";
import { fetchBooks } from "./store/actions/book";
import { fetchAuthors } from "./store/actions/author";
import { authCheckState } from "./store/actions/auth";
import CreateAuthor from "./components/form/CreateAuthor";
import Logout from "./components/Logout";

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
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/createbook" component={CreateBook} />
          <Route path="/createauthor" component={CreateAuthor} />
          <Route path="/cv" component={Cv} />
          <Route path="/book/:id" component={Book} />
          <Route path="/author/:id" component={Author} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
