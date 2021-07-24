import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import Screen from './components/screen';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{Screen()}
		</div>
	);
};

export default App;
