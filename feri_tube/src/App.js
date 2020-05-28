import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import VideoPage from "./VideoPage/VideoPage";
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
        opis: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
        dolzina: 5,
      },
      {
        name: "Assembly language",
        opis: "In computer programming, assembly language, often abbreviated asm, is any low-level programming language in which there is a very strong correlation between instructions in the language and the architecture's machine code instructions.",
        dolzina: 5,
      },
      {
        name: "Fitness",
        opis: "Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and...",
        dolzina: 5,
      },
      {
        name: "C++",
        opis: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. C++ allows procedural programming for intensive functions of CPU and to provide control over hardware...",
        dolzina: 5,
      },
      {
        name: "C",
        opis: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
        dolzina: 5,
      },
      {
        name: "Java",
        opis: "Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment.",
        dolzina: 5,
      },
      {
        name: "OOP",
        opis: "Object-oriented programming is a programming paradigm based on the concept of 'objects', which can contain data, in the form of fields, and code, in the form of procedures. A feature of objects is an object's procedures that can access and often modify the data...",
        dolzina: 5,
      },
      {
        name: "Web",
        opis: "Web programming refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. The most common languages used for Web programming are XML, HTML, JavaScript...",
        dolzina: 5,
      },
    ],
    current: [
      {
        name: "Python",
        opis: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
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
          <Route path="/videoSubject" exact component={VideoPage} />
          <Route path="/videoFitness" exact component={VideoPage} />
          <Route path="/upload" exact component={Upload} />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
