import {createStore} from 'redux';
import Reducer from './Reducer';

const initState = {
	first: 0,
	second: 10,
	third: 20
}

//如果有多个reducer该怎么办?
const Store = createStore(Reducer, initState) 

export default Store;