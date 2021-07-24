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
	};
};

const actions = {
	setInput,
};

export default actions;
