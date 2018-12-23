import Store from '../Store';
import React, {Component} from 'react';

class Summary extends Component{
	constructor(){
		super();
		this.state = this.getTotal();
		this.onChange = this.onChange.bind(this);
	}
	getTotal(){
		const val = Store.getState();
		let sum = 0;
		for (let key in val) {
			sum += val[key]	
		}
		return {
			sum: sum
		};
	}
	onChange(){
		this.setState(this.getTotal());
	}
	componentDidMount(){
		Store.subscribe(this.onChange);
	}
	componentWillUnmount(){
		Store.unsubscribe(this.onChange);	
	}
	render(){
		return (
			<button>{this.state.sum}</button>
		);
	}
}

export default Summary;
