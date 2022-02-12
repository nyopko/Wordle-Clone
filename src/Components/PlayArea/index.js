import React from 'react';
import { Container, Row, Col } from 'react-grid';
import './style.css';

class PlayArea extends React.Component {
    state = {
      count: 1,
      entry: "",
      guess1: "",
      guess2: "",
      guess3: "",
      guess4: "",
      guess5: "",
      guess6: "",
      guesses: [],
      answer: "beers",
    };
  
    onChange = e => {
      this.setState({ entry: e.target.value });
    };
  
    handleGuessSubmit = event => {
      event.preventDefault();
      // Win Condition
      if(this.state.entry === this.state.answer){
        alert("you win");
      }
      else{
        if(!this.state.guesses.includes(this.state.entry)){
            //   Guess 1
            if(this.state.count === 1){
                this.state.guess1 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 1:",this.state.guess1);
              }
            //   Guess 2
              if((this.state.count === 2)){
                  this.state.guess2 = this.state.entry;
                  this.state.guesses.push(this.state.entry);
                  console.log("guess 2:",this.state.guess2);
              }
            //   Guess 3  
              if(this.state.count === 3){
                  this.state.guess3 = this.state.entry;
                  this.state.guesses.push(this.state.entry);
                  console.log("guess 3:",this.state.guess3);
              }
            //   Guess 4
              if(this.state.count === 4){
                  this.state.guess4 = this.state.entry;
                  this.state.guesses.push(this.state.entry);
                  console.log("guess 4:",this.state.guess4);
              }
            //   Guess 5  
              if(this.state.count === 5){
                  this.state.guess5 = this.state.entry;
                  this.state.guesses.push(this.state.entry);
                  console.log("guess 5:",this.state.guess5);
              }
            //   Guess 6  
              if(this.state.count === 6){
                  this.state.guess6 = this.state.entry;
                  this.state.guesses.push(this.state.entry);
                  console.log("guess 6:",this.state.guess6);
                  alert("You Lose. Game over.")
              }
    
              console.log(this.state.guesses);
              this.state.count++;
            //   event.target.reset();
    
          }
          else{
              alert("Duplicate Entry Please Try Again");
          }
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleGuessSubmit}>
              <h4>{this.state.guess1}</h4>
              <h4>{this.state.guess2}</h4>
              <h4>{this.state.guess3}</h4>
              <h4>{this.state.guess4}</h4>
              <h4>{this.state.guess5}</h4>
              <h4>{this.state.guess6}</h4>
              <h3>{this.state.entry}</h3>
          <label>
            <input
              maxLength="5"
              placeholder=""
              value={this.state.entry}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default PlayArea;