import * as ActionTypes from '../action/ActionTypes.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

export const increment = (counterCaption) => {
	AppDispatcher.dispatch({
		type: ActionTypes.INCREMENT,
		counterCaption: counterCaption 
	})	
};

export const decrement = (counterCaption) => {
	AppDispatcher.dispatch({
		type: ActionTypes.DECREMENT,
		counterCaption: counterCaption 
	})		
};