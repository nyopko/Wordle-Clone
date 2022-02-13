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

    // Randomly Choose the word that will be used
    chooseWord() {
        let words = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth"];

        // Add the word to the state

        this.state.answer = words[Math.floor(Math.random() * words.length)].toLowerCase();

        console.log("this is the word used", this.state.answer);
    }


    handleGuessSubmit = event => {
        event.preventDefault();
        // Win Condition
        if (!this.state.guesses.includes(this.state.entry)) {
            //   Guess 1
            if (this.state.count === 1) {
                this.state.guess1 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 1:", this.state.guess1);
                // Game Logic
                this.gameLogic(1);
            }
            //   Guess 2
            if ((this.state.count === 2)) {
                this.state.guess2 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 2:", this.state.guess2);
                // Game Logic
                this.gameLogic(2);
            }
            //   Guess 3  
            if (this.state.count === 3) {
                this.state.guess3 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 3:", this.state.guess3);
                // Game Logic
                this.gameLogic(3);
            }
            //   Guess 4
            if (this.state.count === 4) {
                this.state.guess4 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 4:", this.state.guess4);
                // Game Logic
                this.gameLogic(4);
            }
            //   Guess 5  
            if (this.state.count === 5) {
                this.state.guess5 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 5:", this.state.guess5);
                // Game Logic
                this.gameLogic(5);
            }
            //   Guess 6  
            if (this.state.count === 6) {
                this.state.guess6 = this.state.entry;
                this.state.guesses.push(this.state.entry);
                console.log("guess 6:", this.state.guess6);
                // Game Logic
                this.gameLogic(6);
                alert("You Lose. The answer was " + this.state.answer);
            }

            console.log(this.state.guesses);

            console.log(this.state.lettersUsed);
            this.state.count++;

            // Fill graveyard
            this.fillGraveYard();

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

        this.state.scoreLog = scoreArr;

        for(let i = 0; i < scoreArr.length; i++){
            if(scoreArr[i] == 2){
                scoreArr[i] = "green";
            }
            else if(scoreArr[i] == 1){
                scoreArr[i] = "yellow";
            }
            else{
                scoreArr[i] = "grey";
            }
        }

        if(guessNum === 1){
            this.state.scoreLogGuess1 = scoreArr;
            console.log("1", this.state.scoreLogGuess1);
        }
        if(guessNum === 2){
            this.state.scoreLogGuess2 = scoreArr;
            for(let number of this.state.scoreLogGuess2){
                if(number === 2){
                    number = "green";
                }
                else if(number === 1){
                    number = "yellow";
                }
                else{
                    number = "grey";
                }
            }
            console.log("2", this.state.scoreLogGuess2);
        }
        if(guessNum === 3){
            this.state.scoreLogGuess3 = scoreArr;
            for(let number of this.state.scoreLogGuess3){
                if(number === 2){
                    number = "green";
                }
                else if(number === 1){
                    number = "yellow";
                }
                else{
                    number = "grey";
                }
            }
            console.log("3", this.state.scoreLogGuess3);
        }
        if(guessNum === 4){
            this.state.scoreLogGuess4 = scoreArr;
            for(let number of this.state.scoreLogGuess4){
                if(number === 2){
                    number = "green";
                }
                else if(number === 1){
                    number = "yellow";
                }
                else{
                    number = "grey";
                }
            }
            console.log("4", this.state.scoreLogGuess4);
        }
        if(guessNum === 5){
            this.state.scoreLogGuess5 = scoreArr;
            for(let number of this.state.scoreLogGuess5){
                if(number === 2){
                    number = "green";
                }
                else if(number === 1){
                    number = "yellow";
                }
                else{
                    number = "grey";
                }
            }
            console.log("5", this.state.scoreLogGuess5);
        }
        if(guessNum === 6){
            this.state.scoreLogGuess6 = scoreArr;
            for(let number of this.state.scoreLogGuess6){
                if(number === 2){
                    number = "green";
                }
                else if(number === 1){
                    number = "yellow";
                }
                else{
                    number = "grey";
                }
            }
            console.log("6", this.state.scoreLogGuess6);
        }

        // Win condition check if the score = 10
        if (scoreArr.reduce((a, b) => a + b, 0) === 10) {

            // Alert Player of Win

            alert("You did it! Congrats!");

            // Reload page

            window.location.reload();

        }
    }

    render() {
        let greyBlock = {
            color: "grey"
          };
          let greenBlock = {
            color: "green"
          };
          let yellowBlock = {
            color: "yellow"
          };

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>


                        <Container>
                            {/* Grid Row 1 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess1[0] === "green") ? "green-block" : (this.state.scoreLogGuess1[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess1[1] === "green") ? "green-block" : (this.state.scoreLogGuess1[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess1[2] === "green") ? "green-block" : (this.state.scoreLogGuess1[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess1[3] === "green") ? "green-block" : (this.state.scoreLogGuess1[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess1[4] === "green") ? "green-block" : (this.state.scoreLogGuess1[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                            {/* Grid Row 2 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess2[0] === "green") ? "green-block" : (this.state.scoreLogGuess2[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess2[1] === "green") ? "green-block" : (this.state.scoreLogGuess2[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess2[2] === "green") ? "green-block" : (this.state.scoreLogGuess2[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess2[3] === "green") ? "green-block" : (this.state.scoreLogGuess2[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess2[4] === "green") ? "green-block" : (this.state.scoreLogGuess2[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                            {/* Grid Row 3 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess3[0] === "green") ? "green-block" : (this.state.scoreLogGuess3[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess3[1] === "green") ? "green-block" : (this.state.scoreLogGuess3[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess3[2] === "green") ? "green-block" : (this.state.scoreLogGuess3[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess3[3] === "green") ? "green-block" : (this.state.scoreLogGuess3[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess3[4] === "green") ? "green-block" : (this.state.scoreLogGuess3[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                            {/* Grid Row 4 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess4[0] === "green") ? "green-block" : (this.state.scoreLogGuess4[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess4[1] === "green") ? "green-block" : (this.state.scoreLogGuess4[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess4[2] === "green") ? "green-block" : (this.state.scoreLogGuess4[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess4[3] === "green") ? "green-block" : (this.state.scoreLogGuess4[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess4[4] === "green") ? "green-block" : (this.state.scoreLogGuess4[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                            {/* Grid Row 5 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess5[0] === "green") ? "green-block" : (this.state.scoreLogGuess5[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess5[1] === "green") ? "green-block" : (this.state.scoreLogGuess5[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess5[2] === "green") ? "green-block" : (this.state.scoreLogGuess5[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess5[3] === "green") ? "green-block" : (this.state.scoreLogGuess5[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess5[4] === "green") ? "green-block" : (this.state.scoreLogGuess5[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                            {/* Grid Row 6 */}
                            <Row>
                                <Col>
                                <div className={(this.state.scoreLogGuess6[0] === "green") ? "green-block" : (this.state.scoreLogGuess6[0] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess6[1] === "green") ? "green-block" : (this.state.scoreLogGuess6[1] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess6[2] === "green") ? "green-block" : (this.state.scoreLogGuess6[2] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess6[3] === "green") ? "green-block" : (this.state.scoreLogGuess6[3] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                                <Col>
                                <div className={(this.state.scoreLogGuess6[4] === "green") ? "green-block" : (this.state.scoreLogGuess6[4] === "yellow") ? "yellow-block" : "grey-block"}>
                                </div>
                                </Col>
                            </Row>
                        </Container>






                            <h4>{this.state.guess1}</h4>
                            <h4>{this.state.guess2}</h4>
                            <h4>{this.state.guess3}</h4>
                            <h4>{this.state.guess4}</h4>
                            <h4>{this.state.guess5}</h4>
                            <h4>{this.state.guess6}</h4>
                            <h3>{this.state.entry}</h3>
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
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='letter-graveyard'>
                                <h3>Graveyard</h3>
                                <h3>{this.state.lettersUsed.join(",")}</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PlayArea;