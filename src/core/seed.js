import { rndString } from '@laufire/utils/random';
import config from './config';

const seed = {
	score: 0,
	question: rndString(config.refreshIDLength),
	answer: '',
	second: 10,
};

export default seed;
