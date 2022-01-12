import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrueBtn from './True';


// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
  
  state = {
  numQuestions:0,
  numCorrect : 0
  }
  updateNewS = CorrectAns =>{
    if(CorrectAns){
    this.setState((CurentState)=>({
      numCorrect:  CurentState.numCorrect + 1
    
    }))}
  
    this.setState((CurentState)=>({
      numQuestions:  CurentState.numQuestions + 1 

    }))

  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
        <h2>Mental Math</h2>
          
          <TrueBtn updateNewS={this.updateNewS} numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
