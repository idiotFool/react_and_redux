import * as ActionTypes from './ActionTypes';

export function increase(caption){
	return {
		type: ActionTypes.INCREAMENT,
		caption: caption
	}
}

export function decrease(caption){
	return {
		type: ActionTypes.DECREAMENT,
		caption: caption
	}
}