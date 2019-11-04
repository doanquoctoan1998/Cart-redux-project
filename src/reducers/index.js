import {combineReducers} from 'redux'
import products from './products'
import carousel from './carousel'
const appReducer = combineReducers({
    products,
    carousel
    
});
export default appReducer;