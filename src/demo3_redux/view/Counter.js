import Store from '../Store';
import React, {Component} from 'react';
import * as Actions from '../action/Actions';

class Counter extends Component{
	constructor(props){
		super(props);
		this.onIncrease = this.onIncrease.bind(this);
		this.onDecrease = this.onDecrease.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState()
	}
	getOwnState(){
		return {
			value: Store.getState()[this.props.caption] 
		}
	}
	onChange(){
		this.setState(this.getOwnState())
	}
	componentDidMount(){
		Store.subscribe(this.onChange)
	}
	componentWilUnmount(){
		Store.unsubscribe(this.onChange)
	}
	onIncrease(){
		Store.dispatch(Actions.increase(this.props.caption))
	}
	onDecrease(){
		Store.dispatch(Actions.decrease(this.props.caption))
	}
	render(){
		return (
			<div>
				<button onClick={this.onIncrease}>+</button>
				<button onClick={this.onDecrease}>-</button>
				<span>{this.props.caption}: {this.state.value}</span>
			</div>	
		);
	}
}

export default Counter;
