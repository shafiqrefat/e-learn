import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import fakeData from './fakeData/courses'
import { useState } from 'react';

function App() {
  const [availableCourses,setavailableCourses] = useState(fakeData);
  return (
    <div className="App">
      <h1 className='available-courses'>Available Courses : {availableCourses.length}</h1>
      <Courses ></Courses>
    </div>
  );
}

export default App;
