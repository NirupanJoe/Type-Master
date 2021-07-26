import { React, useEffect } from 'react';
import './App.scss';
import Screen from './components/screen';
import ticker from './services/ticker';

const App = () => {
	useEffect(ticker.state, []);

	return <div className="App">
		{Screen()}
	</div>;
};

export default App;
