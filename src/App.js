
import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return(
  <div className="App">
    <PersonCard firstName = {"Shahnoor"} lastName="Chowdhury" age="27" hairColor = "Black"></PersonCard>
    <PersonCard firstName = {"Tiara"} lastName="Harris" age="27" hairColor = "Black"></PersonCard>
    <PersonCard firstName = {"Bruce"} lastName="Wen" age="28" hairColor = "Black"></PersonCard>

    <PersonCard firstName = {"Paha"} lastName="Chowdhury" age="32" hairColor = "Black"></PersonCard>
    <PersonCard firstName = {"Vasanthi"} lastName="Chowdhury" age="28" hairColor = "Black"></PersonCard>
    

  </div>
  );
  
}

export default App;
