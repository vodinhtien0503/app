import {combineReducers} from 'redux';
import products from './products';
import productspecials from './productspecials';
import cart from './cart';



const appReducers=combineReducers({
	products,
	productspecials,
	cart
});
export default appReducers;