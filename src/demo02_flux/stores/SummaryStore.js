import AppDispatcher from "../dispatcher/AppDispatcher";
import * as ActionTypes from '../action/ActionTypes.js';
import CounterStore from "./CounterStore.js";
import {EventEmitter} from "events";

function computeSum(counterVal){
	let sum = 0;
	for (const key in counterVal) {
		if (counterVal.hasOwnProperty(key)) {
			sum += counterVal[key];
		}
	}

	return sum;
}

const CHANGE_EVENT = "changeSum";
const SummaryStore = Object.assign({}, EventEmitter.prototype, {
	getSummary: function(){
		return computeSum(CounterStore.getCounterVal());
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	} 
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
	if (action.type === ActionTypes.INCREMENT ||
		action.type === ActionTypes.DECREMENT) {
		AppDispatcher.waitFor([CounterStore.dispatchToken])
		SummaryStore.emitChange();
	} 
})

export default SummaryStore;
