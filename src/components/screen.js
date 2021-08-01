import { React } from 'react';
import context from '../core/context';
import InputManager from '../services/inputManager';
import Input from './input';
import Second from './second';

const Screen = () => {
	const { question, highlight } = InputManager
		.setHighlight(context.state.question, context.state.answer);

	return <div className="container">
		<h2 className="score">Score: {context.state.score}</h2>
		<div>{Second()}</div>
		<h1 className="question">Question:{}
			<span className="highlight">{highlight}</span>
			<span>{question}</span>
		</h1>
		<div id="input">{Input()}</div>
	</div>;
};

export default Screen;
