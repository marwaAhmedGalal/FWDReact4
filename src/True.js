import React, {Component} from 'react';

class TrueBtn extends Component{
   constructor(props){
       super(props);
       
        const values = this.newNumbers();
        this.state ={
        value1: values[0],
        value2: values[1],
        value3: values[2],
        proposedAnswer: values[3],
       } }

       newNumbers =()=>{
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3
        return [value1 , value2 , value3 , proposedAnswer];
        
       }

       updateState = newVal => {
           this.setState(CurentState => ({
            value1: newVal[0],
            value2: newVal[1],
            value3: newVal[2],
            proposedAnswer: newVal[3],
           }))
       }
       updateNewS = event =>{
        console.log(event);
        const newVal = this.newNumbers();
        this.updateState(newVal);
        const CorrectAns = this.evaluateAnswer(event.target.name);
        this.props.updateNewS(CorrectAns);
     }

       evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;
    
        return (
          (corrAnswer === proposedAnswer && givenAnswer === 'true') || 
          (corrAnswer !== proposedAnswer && givenAnswer === 'false')
        );
      }

      
  
render(){
const { value1, value2, value3, proposedAnswer } = this.state;
return (
    <div>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
         <button onClick={this.updateNewS} name="true">True</button>
          <button onClick={this.updateNewS} name="false">False</button>
          <p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </p>
    </div>

)
}


}


export default TrueBtn;