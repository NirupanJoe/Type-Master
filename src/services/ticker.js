import context from '../core/context';

const state = () => {
	const { tickerDelay } = context.config;
	const { setReset, setSecond } = context.actions;

	setInterval(() => {
		setSecond();
		setReset();
	},
	tickerDelay);
};

const ticker = {
	state,
};

export default ticker;
