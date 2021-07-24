import { React } from 'react';
import context from '../core/context';

const Input = () =>
	<input
		value={ context.state.answer }
		onChange={ (evt) => {
			// eslint-disable-next-line no-console
			console.log(evt);
			context.actions.setInput(evt.target.value);
		} }
	/>;

export default Input;
