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
        answer: "yopko",
        lettersUsed: [],
        winArr: [2, 2, 2, 2, 2],
        scoreTotal: 0,
    };

    onChange = e => {
        this.setState({ entry: e.target.value });
    };

    handleGuessSubmit = event => {
        event.preventDefault();
        // Win Condition
            if (!this.state.guesses.includes(this.state.entry)) {
                //   Guess 1
                if (this.state.count === 1) {
                    this.state.guess1 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 1:", this.state.guess1);
                }
                //   Guess 2
                if ((this.state.count === 2)) {
                    this.state.guess2 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 2:", this.state.guess2);
                }
                //   Guess 3  
                if (this.state.count === 3) {
                    this.state.guess3 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 3:", this.state.guess3);
                }
                //   Guess 4
                if (this.state.count === 4) {
                    this.state.guess4 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 4:", this.state.guess4);
                }
                //   Guess 5  
                if (this.state.count === 5) {
                    this.state.guess5 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 5:", this.state.guess5);
                }
                //   Guess 6  
                if (this.state.count === 6) {
                    this.state.guess6 = this.state.entry;
                    this.state.guesses.push(this.state.entry);
                    console.log("guess 6:", this.state.guess6);
                    alert("You Lose. Game over.")
                }

                console.log(this.state.guesses);

                console.log(this.state.lettersUsed);
                this.state.count++;

                // Fill graveyard
                this.fillGraveYard();

                // Game Logic

                this.gameLogic();
                //   event.target.reset();

            }
            else {
                alert("Duplicate Entry Please Try Again");
            }

        
    };
    // Fill Letter Graveyard
    fillGraveYard() {

        // Split Entry into arr of Letters

        let entryArr = this.state.entry.split("");

        // CHeck if letter has been used then add it to array if not

        for (let letter of entryArr) {
            if (!this.state.lettersUsed.includes(letter)) {
                this.state.lettersUsed.push(letter);
            }
        }

    }

     // Addition function to get score for  win calculation
     getScoreTotal(accumulator, a) {
        this.state.scoreTotal =  accumulator + a;
    }

    gameLogic() {
        let scoreArr = [];
        let entryArr = this.state.entry.split("");
        let answerArr = this.state.answer.split("");

        for(let i = 0; i < 5; i++){
            let letter = entryArr[i];
            if(answerArr[i] === letter){
                scoreArr.push(2);
            }
            else if(answerArr.includes(letter)){
                scoreArr.push(1);
            }
            else{
                scoreArr.push(0);
            }
        }
        console.log("score arr", scoreArr, "score total:", scoreArr.reduce((a, b) => a + b, 0));

        // Win condition check if the score = 10
        if(scoreArr.reduce((a, b) => a + b, 0) === 10){
        
            // Alert Player of Win

            alert("You did it! Congrats!");

        // Reload page
        window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className='letter-graveyard'>
                                <h3>Graveyard</h3>
                                <h3>{this.state.lettersUsed.join(",")}</h3>
                            </div>
                        </Col>
                        <Col>
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
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PlayArea;