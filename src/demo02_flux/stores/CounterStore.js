import AppDispatcher from "../dispatcher/AppDispatcher";
import * as ActionTypes from '../action/ActionTypes.js';
import {EventEmitter} from "events";

const counterVals = {
	"first": 0,
	"second": 10,
	"third": 20 
};
const CHANGE_EVENT = "changed";

const CounterStore = Object.assign({}, EventEmitter.prototype, {
	getCounterVal: function(){
		return counterVals;
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

CounterStore.dispatchToken = AppDispatcher.register((action) => {
	if (action.type === ActionTypes.INCREMENT) {
		counterVals[action.counterCaption] ++;
		CounterStore.emitChange();
	} else if (action.type === ActionTypes.DECREMENT) {
		counterVals[action.counterCaption] --;
		CounterStore.emitChange();
	}
})

export default CounterStore; 