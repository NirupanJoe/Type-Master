const checkInput = (question, answer) => question === answer;

const addScore = (score, update) => (update ? score + 1 : score);

const setReset = (second) => second === 0;

const setHighlight = (que, ans) => {
	const check = que.split('').findIndex((char, i) =>
		char !== ans.substr(i, 1));

	return {
		question: que.slice(check),
		highlight: que.slice(0, check),
	};
};

const InputManager = {
	checkInput,
	setReset,
	setHighlight,
	addScore,
};

export default InputManager;
