import React from 'react';
import './App.css';
import Quiz from './Quiz'

function App() {

  const nameChange = (e) =>{
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <Quiz change={ nameChange } />
    </div>
  );
}

export default App;
