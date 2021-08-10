import config from './config';
import faker from 'faker';

const seed = {
	score: 0,
	question: faker.lorem.word(config.questionLength),
	answer: '',
	second: config.second,
};

export default seed;
