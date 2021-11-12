import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [hogwartsStudent , sethogwartsStudent]=useState([])

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then((response)=>response.json())
    .then((response)=>sethogwartsStudent(response))
    .catch((err)=>console.log(err))
  }, [])

  // console.log(Math.round(Math.random()*100))
  // console.log(hogwartsStudent.length)

  const randomGen = () =>{
    let ran = Math.round(Math.random()*100)
    while(ran>79){
    ran = Math.round(Math.random()*100)
    }
    return ran
  }
  const myWizardList = () => {
    let ranList=[]
    for (let i=0; i<3;i++){
      const ran =randomGen()
      if (ranList.find((current)=>current===ran)){
        console.log("Estudante já existente",ran)
        i--
      }
      else{
        ranList.push(ran)
      }
    }
    return ranList
  }

  console.log(myWizardList()[0])

  // console.log(hogwartsStudent[randomGen])

  let newWizards1 =hogwartsStudent[myWizardList()[0]]
  let newWizards2 =hogwartsStudent[myWizardList()[1]]
  let newWizards3 =hogwartsStudent[myWizardList()[2]]

  // console.log(newWizards1)

  return (
    <div className="App">
      <header className="App-header">
        <div>Nome: {newWizards1.name}</div>
        <div>Nome: {newWizards2.name}</div>
        <div>Nome: {newWizards3.name}</div>
      </header>
    </div>
  );
}

export default App;
