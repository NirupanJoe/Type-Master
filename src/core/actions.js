import { rndString } from '@laufire/utils/random';
import InputManager from '../services/inputManager';
import config from './config';

const setInput = ({ state, data }) => {
	const update = InputManager.checkInput(state.question, data);

	return {
		answer: update === 1 ? '' : data,
		score: state.score + update,
		question: update === 1
			? rndString(config.refreshIDLength)
			: state.question,
		second: update === 1 ? 0 : state.second,
	};
};

const setSecond = ({ state }) => ({
	second: state.second - 1,
});

const setReset = ({ state }) => {
	const update = InputManager.setReset(state.second);

	return {
		answer: update ? '' : state.answer,
		question: update ? rndString(config.refreshIDLength) : state.question,
		// eslint-disable-next-line no-magic-numbers
		second: update ? 10 : state.second,
	};
};

const actions = {
	setInput,
	setReset,
	setSecond,
};

export default actions;
