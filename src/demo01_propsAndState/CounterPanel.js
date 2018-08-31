import React, {Component} from 'react';
import Counter from './Counter';

class CounterPanel extends Component{
	constructor(props){
		super(props)
		this.onClickUpdate = this.onClickUpdate.bind(this)
		this.initVals = [0, 10, 20];

		const total = this.initVals.reduce((a,b) => a+b, 0) 
		this.state = {
			total: total,
		}
	}
	onClickUpdate(newVal, previousVal){
		const changedval= newVal - previousVal;
		this.setState({
			total: this.state.total + changedval
		})
	}
	render(){
		return (
			<div>
				<Counter 
					initVal={this.initVals[0]} 
					updateVal={this.onClickUpdate} 
					counterName="first counter" />
				<Counter initVal={this.initVals[1]} counterName="second counter" />
				<Counter initVal={this.initVals[2]} counterName="third counter" />
				<hr/>
				<span>总计：{this.state.total}</span>				
			</div>
		);
	}
}

export default CounterPanel;