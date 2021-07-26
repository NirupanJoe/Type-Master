const getSecond = 11;

const checkInput = (question, answer) =>
	(question === answer ? 1 : 0);

const setReset = (second) => second === getSecond;

const InputManager = {
	checkInput,
	setReset,
};

export default InputManager;
