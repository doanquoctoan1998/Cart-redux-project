import {combineReducers} from 'redux'
import products from './products'
import carousel from './carousel'
import trendingcarousel from './trendingcarousel'
import trendingproducts from './trendingproducts'
import trendingphone from './trendingphone'
import trendinglaptop from './trendinglaptop'
import cart from './cart'
import message from './messege'
const appReducer = combineReducers({
    products,
    carousel,
    trendingcarousel,
    trendingproducts,
    trendingphone,
    trendinglaptop,
    cart,
    message
    
});
export default appReducer;