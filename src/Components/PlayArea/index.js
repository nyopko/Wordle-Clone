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
                alert("You Lose. The answer was " + this.state.answer);
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

    gameLogic() {
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

        // Win condition check if the score = 10
        if (scoreArr.reduce((a, b) => a + b, 0) === 10) {

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
                        </Col>
                        <Col>
                            <div>{this.state.scoreLog.map(o => `${o}`)}</div>
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