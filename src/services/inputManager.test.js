/* eslint-disable max-lines-per-function */
import config from '../core/config';
import InputManager from './inputManager';

describe('InputManager', () => {
	const { checkInput, setReset } = InputManager;

	test('checkInput return true when the question & answer is equal', () => {
		const question = 'abcd';
		const answer = 'abcd';

		const result = checkInput(question, answer);

		expect(result).toEqual(true);
	});

	test('checkInput return false when the question & answer is unequal',
		() => {
			const question = 'abcd';
			const answer = 'abce';

			const result = checkInput(question, answer);

			expect(result).toEqual(false);
		});

	test('setReset reset question when the second is equal to'
		+ 'resetQuestionSecond', () => {
		const second = 8;

		const result = setReset(second);

		expect(result).toEqual(second === config.resetQuestionSecond);
	});

	test('setReset should not reset question when the second is not equal to'
		+ 'resetQuestionSecond', () => {
		const second = config.resetQuestionSecond;

		const result = setReset(second);

		expect(result).toEqual(second === config.resetQuestionSecond);
	});
});
