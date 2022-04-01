import React, { Component } from "react";
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 'six',
            die2: 'six',
            isRolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        // pick 2 new faces for each die
        const newDie1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        const newDie2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];

        // set state with the new rolled faces to the dies
        this.setState({die1: newDie1, die2: newDie2, isRolling: true});

        // set isRolling to false after a second
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 200);
    }

    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-DiceContainer">
                    <Die face={this.state.die1} wobbling={this.state.isRolling}/>
                    <Die face={this.state.die2} wobbling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling dice...' : 'Roll dice'}</button>
            </div>
        )
    }
}

export default RollDice;