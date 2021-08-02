import faker from 'faker';
import InputManager from '../services/inputManager';
import config from './config';

const setInput = ({ state, data }) =>
	(InputManager.checkInput(state.question, data)
		? {
			answer: '',
			score: state.score + 1,
			question: faker.lorem.word(),
			second: config.second,
		}
		: {
			answer: data,
		});

const setSecond = ({ state }) => ({
	second: state.second - 1,
});

const setReset = ({ state }) =>
	InputManager.setReset(state.second) && {
		answer: '',
		question: faker.lorem.word(),
		second: config.second,
	};

const actions = {
	setInput,
	setReset,
	setSecond,
};

export default actions;
