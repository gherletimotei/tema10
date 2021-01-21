import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            isXTurn: true,
            winner: null
        };
    }

    onSquareClick(index) {
        const squares = [...this.state.squares];

        console.log(this.state);
        if (this.state.winner || squares[index]) {
            return;
        }

        squares[index] = this.state.isXTurn ? 'X' : '0';
        const winner = this.getWinner(squares);

        this.setState({
            squares,
            isXTurn: !this.state.isXTurn,
            winner: winner
        })
    }

    getWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const fullLane = lines.find(line => {
            const [a, b, c] = line;
            return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
        });

        if (fullLane) {
            return squares[fullLane[0]];
        }
    }

    resetGame() {
        this.setState({
            squares: Array(9).fill(null),
            isXTurn: true,
            winner: null
        });
    }

    render() {
        return <div className="board">
            {
                this.state.squares.map(
                    (value, index) =>
                        <Square key={index}
                                value={value}
                                onSquareClick={() => this.onSquareClick(index)}
                        />
                )
            }

            <div>{this.state.winner ? "The winner is " + this.state.winner : ''} </div>
            <br/>
            <div>{this.state.winner ?
                <input type="button" value="Reset game" onClick={() => this.resetGame()}/> : ''
            }</div>

        </div>;
    }
}
