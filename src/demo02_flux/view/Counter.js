import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CounterStore from "../stores/CounterStore.js";
import * as Actions from "../action/Actions.js";

class Counter extends Component{
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this);
		this.onIncrease = this.onIncrease.bind(this);
		this.onDecrease = this.onDecrease.bind(this);
		this.state = {
			count: CounterStore.getCounterVal()[props.caption]
		}
	}
	componentDidMount(){
		CounterStore.addChangeListener(this.onChange)
	}
	componentWillUnmount(){
		CounterStore.removeChangeListener(this.onChange)
	}
	onChange(){
		const newCount = CounterStore.getCounterVal()[this.props.caption];
		this.setState({
			count: newCount
		})
	}
	onIncrease(){
		Actions.increment(this.props.caption)
	}
	onDecrease(){
		Actions.decrement(this.props.caption)
	}
	render(){
		return (
			<div>
				<button onClick={this.onIncrease}>+</button>
				<button onClick={this.onDecrease}>-</button>
				<span>{this.props.caption}: {this.state.count}</span>
			</div>
		);
	}

}
Counter.propTypes = {
	caption: PropTypes.string.isRequired
};

export default Counter;