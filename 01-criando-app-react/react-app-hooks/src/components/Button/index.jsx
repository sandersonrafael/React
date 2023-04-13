import { Component } from 'react';
import './styles.css';

export class Button extends Component {
    render() {
        const { text, click, disabled } = this.props;
        return (
            <button
                disabled={disabled}
                className="button"
                onClick={click} // trata-se do onClick de evento mesmo. O termo "click" é uma props
            >
                {text}
            </button>
        );
    }
}
