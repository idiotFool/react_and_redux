import Counter from './Counter';
import Summary from './Summary';
import React, {Component} from 'react';

class CounterPanel extends Component{
	constructor(props){
		super();
	}
	render(){
		return (
			<div>
				<Counter caption='first' />
				<Counter caption='second' />
				<Counter caption='third' />
				<hr/>
				<Summary />
			</div>
		);
	}
}

export default CounterPanel;