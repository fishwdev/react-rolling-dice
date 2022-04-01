import React, { Component } from "react";
import './Die.css';

class Die extends Component {
    static defaultProps = {
        face: 'six',
        wobbling: false
    };
    render() {
        return(
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.wobbling ? 'wobbling' : 'still'}`}/>
        )
    }
}

export default Die;