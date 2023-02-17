import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
     <Route path='/' exact component={ExercisesList} />
    <Route path='/edit/:id' component={EditExercises} />
    <Route path='/create' component={CreateExercise} />
    <Route path='/user' component={CreateUsers} /> 
    </div>
    </Router>
  );
}

export default App;
