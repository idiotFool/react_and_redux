import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			count: props.initVal
		}; 
		this.onIncrease = this.onIncrease.bind(this);
		this.onDecrease = this.onDecrease.bind(this);
	}
	shouldComponentUpdate(nextProps, nextState){
		return (nextProps.counterName !== this.props.counterName) ||
			(nextState.count !== this.state.count)
	}
	updateCount(isIncreace){
		const previousVal = this.state.count;
		const newVal = isIncreace ? previousVal + 1 : previousVal - 1;
		this.setState({
			count: newVal 
		})
		this.props.updateVal(newVal, previousVal)
	}
	onIncrease(){
		this.updateCount(true)
	}
	onDecrease(){
		this.updateCount(false)
	}
	render(){
		return (
			<div>
				<button onClick={this.onIncrease}>+</button>
				<button onClick={this.onDecrease}>-</button>
				<span>{this.props.counterName}: {this.state.count}</span>
			</div>
		);
	}
}


Counter.propTypes = {
	counterName: PropTypes.string.isRequired
};

Counter.defaultProps = {
	initVal: 0
};

export default Counter;