import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import VideoPage from "./VideoPage/VideoPage";
import Login from "./Login/Login";
import Logout from './auth/Logout';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Container from "@material-ui/core/Container";
import Upload from "./Upload/Upload";
import Contact from "./Contact/Contact";
import About from "./About/About";
import uuid from "uuid";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/authActions";


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const initialState = {
    courses: [
      //testni podatki
      {
        name: "Python",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Assembler",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Fitness",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Python",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Assembler",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Fitness",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Python",
        opis: "",
        dolzina: 5,
      },
      {
        name: "Assembler",
        opis: "",
        dolzina: 5,
      },
    ],
    current: [
      {
        name: "Assembler",
        opis: "",
        dolzina: 5,
      },
    ],
  };

  const [state, setState] = useState({...initialState});

  const currentSetter = (item) => {
    setState(
      ...(initialState.current = [
        {
          name: item.name,
          opis: item.opis,
          dolzina: item.dolzina,
        },
      ])
    );
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Container>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/register" exact component={RegisterModal} />
          <Route path="/login" exact component={LoginModal} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact>
            <HomePage key={uuid()} podatki={initialState.courses} setter={currentSetter} />
          </Route>
          <Route path="/video" exact component={VideoPage} />
          <Route path="/upload" exact component={Upload} />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
