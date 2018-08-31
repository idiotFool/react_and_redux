import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js'; 

class CounterPanel extends Component{
	render(){
		return (
			<div>
				<Counter caption="first" />
				<Counter caption="second" />
				<Counter caption="third" />
				<hr/>
				<Summary />
			</div>
		);
	}
}

export default CounterPanel;