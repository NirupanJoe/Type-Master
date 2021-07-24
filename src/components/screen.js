import { React } from 'react';
import context from '../core/context';
import Input from './input';

const Screen = () =>
	<div>
		<div>Score: {context.state.score}</div>
		<div>{context.state.question}</div>
		<div>{Input()}</div>
	</div>;

export default Screen;
