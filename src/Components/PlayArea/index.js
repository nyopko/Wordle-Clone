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
    };
  
    onChange = e => {
      this.setState({ entry: e.target.value });
    };
  
    handleGuessSubmit = event => {
      event.preventDefault();
        if(this.state.count === 1){
          this.state.guess1 = this.state.entry;
          console.log("guess 1:",this.state.guess1);
        }
        if(this.state.count === 2){
            this.state.guess2 = this.state.entry;
            console.log("guess 2:",this.state.guess2);
        }
        if(this.state.count === 3){
            this.state.guess3 = this.state.entry;
            console.log("guess 3:",this.state.guess3);
        }
        if(this.state.count === 4){
            this.state.guess4 = this.state.entry;
            console.log("guess 4:",this.state.guess4);
        }
        if(this.state.count === 5){
            this.state.guess5 = this.state.entry;
            console.log("guess 5:",this.state.guess5);
        }
        if(this.state.count === 6){
            this.state.guess6 = this.state.entry;
            console.log("guess 6:",this.state.guess6);
        }
        this.state.count++;
    };
  
    render() {
      return (
        <form onSubmit={this.handleGuessSubmit}>
              <h1>{this.state.entry}</h1>
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