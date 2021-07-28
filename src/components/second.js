import { React } from 'react';
import context from '../core/context';

const ThirtyTwo = 32;

const style = () => ({
	transform: `rotate(${ context.state.second * ThirtyTwo }deg)`,
});

const Second = () =>
	<div className="second-container">
		<div className="second-digital">{context.state.second}</div>
		<div className="second-circle">
			<div style={ style() } className="second-line"/>
		</div>
	</div>;

export default Second;