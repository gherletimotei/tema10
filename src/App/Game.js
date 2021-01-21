import React, {Component} from 'react'
import GameBoard from './Board'

export default class Game extends Component {
	render() {
		return <div className="game">
			<div>tic tac toe game</div>
			<GameBoard />
		</div>
	}
}
