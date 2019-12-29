import React, { Component } from 'react';
import Button from './Button.jsx';
import Star from './Star.jsx';
import './App.css';
import { createArrayWithElements } from './tools.js';

class App extends Component {
  state = {
    buttons: createArrayWithElements(9, ''),
    wantedNumber: 5,
  };

  currentSum = 0;

  currentButtonSet = [];

  generateANewChallange() {

  }

  render() {
    const onClick = (number, on) => {
      const {wantedNumber, buttons} = this.state;

      if (on) {
        this.currentSum += number;
        this.currentButtonSet.push(number);
        
        if (this.currentSum === wantedNumber) {
          this.currentSum = 0;


          this.currentButtonSet.forEach((number) => {
            buttons[number - 1] = 'positive';
          });

          this.currentButtonSet = [];

          //TODO: check if the game has ended
          //TODO: generate a new number
        } else if (this.currentSum < wantedNumber) {
          this.currentButtonSet.forEach((number) => {
            buttons[number - 1] = 'primary';
          });

        } else if (this.currentSum > wantedNumber) {
          this.currentButtonSet.forEach((number) => {
            buttons[number - 1] = 'negative';
          });

        } 

        
      } else {
        this.currentButtonSet.splice(this.currentButtonSet.indexOf(number), 1);
        buttons[number - 1] = '';
        this.currentSum -= number;

        if (this.currentSum < wantedNumber) {
          this.currentButtonSet.forEach((number) => {
            buttons[number - 1] = 'primary';
          });

        } else if (this.currentSum === wantedNumber) {
          this.currentButtonSet.forEach((number) => {
            buttons[number - 1] = 'positive';
          });
        }
      }

      this.setState({
        buttons
      }); 
    }

    return (
      <>

        <h1 className="ui header center aligned top">Enjoy Playing!!</h1>
        
        <div className="ui grid container">
          <div className="eight wide column ui grid">
            {createArrayWithElements(this.state.wantedNumber).map((number) => {
              return (
                <div key={number} className="five wide column"><Star /></div>
              )
              
            })}
          </div>
    
          <div className="eight wide column ui grid">
          {this.state.buttons.map((status, number) => {
            return (
              <div key={number} className="five wide column"><Button on={status === 'negative' || status === 'primary'} handleClick={onClick} number={number + 1} disabled={status === 'positive'} color={status}/></div>
            )  
          })}
          </div>
        </div>
      </>
    );
  }
}

export default App;