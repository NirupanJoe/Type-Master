import { React } from 'react';
import context from '../core/context';
import Input from './input';

const Screen = () =>
	<div className="container">
		<div className="score">Score: {context.state.score}</div>
		<div>Question: {context.state.question}</div>
		<div>second: {context.state.second}</div>
		<div>{Input()}</div>
	</div>;

export default Screen;
