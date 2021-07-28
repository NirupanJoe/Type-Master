import { React } from 'react';
import context from '../core/context';
import InputManager from '../services/inputManager';
import Input from './input';
import Second from './second';

const Screen = () => {
	const { question, highlight } = InputManager
		.setHighlight(context.state.question, context.state.answer);

	return <div className="container">
		<div className="score">Score: {context.state.score}</div>
		<div>{Second()}</div>
		<div>Question:{}
			<span className="highlight">{highlight}</span>
			<span>{question}</span>
		</div>
		<div>{Input()}</div>
	</div>;
};

export default Screen;
