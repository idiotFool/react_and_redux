import React, {Component} from "react";
import SummaryStore from "../stores/SummaryStore.js"; 

class Summary extends Component{
	constructor(props){
		super(props);
		this.updateChange = this.updateChange.bind(this);
		this.state = {
			summary: SummaryStore.getSummary()
		}
	}
	componentDidMount(){
		SummaryStore.addChangeListener(this.updateChange)
	}
	componentWillUnmount(){
		SummaryStore.removeChangeListener(this.updateChange)
	}
	updateChange(){
		this.setState({
			summary: SummaryStore.getSummary()
		})
	}
	render(){
		return (
			<span>{this.state.summary}</span>
		);
	}
}

export default Summary;

