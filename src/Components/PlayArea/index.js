import React from 'react';
import { Container, Row, Col } from 'react-grid';
import './style.css';
import { WORDS } from "../Words/words.js"

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
        guess1Letters: [],
        guess2Letters: [],
        guess3Letters: [],
        guess4Letters: [],
        guess5Letters: [],
        guess6Letters: [],
        guesses: [],
        answer: "",
        lettersUsed: [],
        winArr: [2, 2, 2, 2, 2],
        scoreTotal: 0,
        scoreLog: [0, 0, 0, 0, 0],
        scoreLogGuess1: [],
        scoreLogGuess2: [],
        scoreLogGuess3: [],
        scoreLogGuess4: [],
        scoreLogGuess5: [],
        scoreLogGuess6: [],
        color: "red",
    };

    onChange = e => {
        this.setState({ entry: e.target.value });
    };

    componentDidMount() {
        this.chooseWord();
    }

    resetForm = () => {
        this.setState({
            entry: '',
        })
    }

    // Randomly Choose the word that will be used
    chooseWord() {
        // Add the word to the state
        this.state.answer = WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();

        console.log("this is the word used", this.state.answer);
    }


    handleGuessSubmit = event => {
        event.preventDefault();
        // Check for duplicate entries
        if (!this.state.guesses.includes(this.state.entry.toLowerCase())) {
            // Check for real words
            if (WORDS.includes(this.state.entry.toLowerCase())) {
                //   Guess 1
                if (this.state.count === 1) {
                    this.state.guess1 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 1:", this.state.guess1);
                    // Split the letters to fill letters array
                    this.state.guess1Letters = this.state.guess1.split("");
                    // Game Logic
                    this.gameLogic(1);
                }
                //   Guess 2
                if ((this.state.count === 2)) {
                    this.state.guess2 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 2:", this.state.guess2);
                    // Split the letters to fill letters array
                    this.state.guess2Letters = this.state.guess2.split("");
                    // Game Logic
                    this.gameLogic(2);
                }
                //   Guess 3  
                if (this.state.count === 3) {
                    this.state.guess3 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 3:", this.state.guess3);
                    // Split the letters to fill letters array
                    this.state.guess3Letters = this.state.guess3.split("");
                    // Game Logic
                    this.gameLogic(3);
                }
                //   Guess 4
                if (this.state.count === 4) {
                    this.state.guess4 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 4:", this.state.guess4);
                    // Split the letters to fill letters array
                    this.state.guess4Letters = this.state.guess4.split("");
                    // Game Logic
                    this.gameLogic(4);
                }
                //   Guess 5  
                if (this.state.count === 5) {
                    this.state.guess5 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 5:", this.state.guess5);
                    // Split the letters to fill letters array
                    this.state.guess5Letters = this.state.guess5.split("");
                    // Game Logic
                    this.gameLogic(5);
                }
                //   Guess 6  
                if (this.state.count === 6) {
                    this.state.guess6 = this.state.entry.toLowerCase();
                    this.state.guesses.push(this.state.entry.toLowerCase());
                    console.log("guess 6:", this.state.guess6);
                    // Split the letters to fill letters array
                    this.state.guess6Letters = this.state.guess6.split("");
                    // Game Logic
                    this.gameLogic(6);
                    alert("You Lose. The answer was " + this.state.answer);

                    // Reload page

                    window.location.reload();
                }

                console.log(this.state.guesses);

                console.log(this.state.lettersUsed);
                this.state.count++;

                // Fill graveyard
                this.fillGraveYard();

                this.state.entry = "";
            }
            // Alert user if they're using a fake word
            else{
                alert("Nope, that's not a real word, try again!");
            }
        }
        // Alert user if they used same word twice
        else {
            alert("Duplicate Entry Please Try Again");
        }

        // Resets the form after submit 

        this.resetForm();

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

    gameLogic(guessNum) {
        let scoreArr = [];
        let entryArr = this.state.entry.split("");
        let answerArr = this.state.answer.split("");

        for (let i = 0; i < 5; i++) {
            let letter = entryArr[i];
            if (answerArr[i] === letter) {
                scoreArr.push(2);
            }
            else if (answerArr.includes(letter)) {
                scoreArr.push(1);
            }
            else {
                scoreArr.push(0);
            }
        }
        console.log("score arr", scoreArr, "score total:", scoreArr.reduce((a, b) => a + b, 0));

        // Win condition check if the score = 10
        if (scoreArr.reduce((a, b) => a + b, 0) === 10) {

            // Alert Player of Win

            alert("You did it! Congrats!");

            // Reload page

            window.location.reload();

        }

        this.state.scoreLog = scoreArr;

        for (let i = 0; i < scoreArr.length; i++) {
            if (scoreArr[i] == 2) {
                scoreArr[i] = "green";
            }
            else if (scoreArr[i] == 1) {
                scoreArr[i] = "yellow";
            }
            else {
                scoreArr[i] = "grey";
            }
        }

        if (guessNum === 1) {
            this.state.scoreLogGuess1 = scoreArr;
            console.log("1", this.state.scoreLogGuess1);
        }
        if (guessNum === 2) {
            this.state.scoreLogGuess2 = scoreArr;
            for (let number of this.state.scoreLogGuess2) {
                if (number === 2) {
                    number = "green";
                }
                else if (number === 1) {
                    number = "yellow";
                }
                else {
                    number = "grey";
                }
            }
            console.log("2", this.state.scoreLogGuess2);
        }
        if (guessNum === 3) {
            this.state.scoreLogGuess3 = scoreArr;
            for (let number of this.state.scoreLogGuess3) {
                if (number === 2) {
                    number = "green";
                }
                else if (number === 1) {
                    number = "yellow";
                }
                else {
                    number = "grey";
                }
            }
            console.log("3", this.state.scoreLogGuess3);
        }
        if (guessNum === 4) {
            this.state.scoreLogGuess4 = scoreArr;
            for (let number of this.state.scoreLogGuess4) {
                if (number === 2) {
                    number = "green";
                }
                else if (number === 1) {
                    number = "yellow";
                }
                else {
                    number = "grey";
                }
            }
            console.log("4", this.state.scoreLogGuess4);
        }
        if (guessNum === 5) {
            this.state.scoreLogGuess5 = scoreArr;
            for (let number of this.state.scoreLogGuess5) {
                if (number === 2) {
                    number = "green";
                }
                else if (number === 1) {
                    number = "yellow";
                }
                else {
                    number = "grey";
                }
            }
            console.log("5", this.state.scoreLogGuess5);
        }
        if (guessNum === 6) {
            this.state.scoreLogGuess6 = scoreArr;
            for (let number of this.state.scoreLogGuess6) {
                if (number === 2) {
                    number = "green";
                }
                else if (number === 1) {
                    number = "yellow";
                }
                else {
                    number = "grey";
                }
            }
            console.log("6", this.state.scoreLogGuess6);
        }
    }

    render() {
        return (
            <div className='play-area'>
                <Container>
                    <Row>
                        <Col>
                            <div className='game-board'>
                                <Container>
                                    {/* Grid Row 1 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess1[0] === "green") ? "green-block" : (this.state.scoreLogGuess1[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess1Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess1[1] === "green") ? "green-block" : (this.state.scoreLogGuess1[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess1Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess1[2] === "green") ? "green-block" : (this.state.scoreLogGuess1[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess1Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess1[3] === "green") ? "green-block" : (this.state.scoreLogGuess1[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess1Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess1[4] === "green") ? "green-block" : (this.state.scoreLogGuess1[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess1Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* Grid Row 2 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess2[0] === "green") ? "green-block" : (this.state.scoreLogGuess2[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess2Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess2[1] === "green") ? "green-block" : (this.state.scoreLogGuess2[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess2Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess2[2] === "green") ? "green-block" : (this.state.scoreLogGuess2[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess2Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess2[3] === "green") ? "green-block" : (this.state.scoreLogGuess2[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess2Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess2[4] === "green") ? "green-block" : (this.state.scoreLogGuess2[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess2Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* Grid Row 3 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess3[0] === "green") ? "green-block" : (this.state.scoreLogGuess3[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess3Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess3[1] === "green") ? "green-block" : (this.state.scoreLogGuess3[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess3Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess3[2] === "green") ? "green-block" : (this.state.scoreLogGuess3[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess3Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess3[3] === "green") ? "green-block" : (this.state.scoreLogGuess3[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess3Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess3[4] === "green") ? "green-block" : (this.state.scoreLogGuess3[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess3Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* Grid Row 4 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess4[0] === "green") ? "green-block" : (this.state.scoreLogGuess4[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess4Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess4[1] === "green") ? "green-block" : (this.state.scoreLogGuess4[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess4Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess4[2] === "green") ? "green-block" : (this.state.scoreLogGuess4[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess4Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess4[3] === "green") ? "green-block" : (this.state.scoreLogGuess4[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess4Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess4[4] === "green") ? "green-block" : (this.state.scoreLogGuess4[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess4Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* Grid Row 5 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess5[0] === "green") ? "green-block" : (this.state.scoreLogGuess5[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess5Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess5[1] === "green") ? "green-block" : (this.state.scoreLogGuess5[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess5Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess5[2] === "green") ? "green-block" : (this.state.scoreLogGuess5[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess5Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess5[3] === "green") ? "green-block" : (this.state.scoreLogGuess5[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess5Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess5[4] === "green") ? "green-block" : (this.state.scoreLogGuess5[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess5Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* Grid Row 6 */}
                                    <div className='grid-row'>
                                        <Row>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess6[0] === "green") ? "green-block" : (this.state.scoreLogGuess6[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess6Letters[0]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess6[1] === "green") ? "green-block" : (this.state.scoreLogGuess6[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess6Letters[1]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess6[2] === "green") ? "green-block" : (this.state.scoreLogGuess6[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess6Letters[2]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess6[3] === "green") ? "green-block" : (this.state.scoreLogGuess6[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess6Letters[3]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className='grid-col'>
                                                <Col>
                                                    <div className={(this.state.scoreLogGuess6[4] === "green") ? "green-block" : (this.state.scoreLogGuess6[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                                        <h3 className="letter-display">{this.state.guess6Letters[4]}</h3>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div className='form-and-entry'>
                                <div className='entry-text-display'>
                                    <h3 className='user-text'>{this.state.entry}</h3>
                                </div>
                                <div className='entry-form'>
                                    <form onSubmit={this.handleGuessSubmit}>
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
                                </div>
                            </div>
                        </Col>
                        <div className='letter-graveyard'>
                            <Col>
                                <h5>Letters Used</h5>
                                <h5>{this.state.lettersUsed.sort().join(", ")}</h5>
                            </Col>
                        </div>
                    </Row>
                    <div className='mobile-letter-graveyard'>
                        <Row>
                            <Col>
                                <h4>Letters Used</h4>
                                <h5>{this.state.lettersUsed.sort().join(", ")}</h5>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default PlayArea;