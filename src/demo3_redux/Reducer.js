import * as ActionTypes from './action/ActionTypes'; 

export default (state, action) => {
	const {caption} = action;

	switch(action.type) {
		case ActionTypes.INCREAMENT:
			return {...state, [caption]: state[caption] + 1}
		case ActionTypes.DECREAMENT:
			return {...state, [caption]: state[caption] - 1}
		default:
			return state;
	}
}