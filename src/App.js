import './App.css';
import {useEffect, useState} from 'react'
import Student from './components/student';

function App() {

  const [hogwartsStudent , sethogwartsStudent]=useState([])
  const [randomHogwarts , setRandomHogwarts]=useState([])

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then((response)=>response.json())
    .then((response)=>sethogwartsStudent(response))
    .catch((err)=>console.log(err))
  }, [])


  return (
    <div className="App">
       <Student list={hogwartsStudent}></Student>
    </div>
  );
}

export default App;
