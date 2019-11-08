import {combineReducers} from 'redux'
import products from './products'
import carousel from './carousel'
import trendingcarousel from './trendingcarousel'
const appReducer = combineReducers({
    products,
    carousel,
    trendingcarousel,
    
});
export default appReducer;