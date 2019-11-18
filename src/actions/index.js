import * as types from './../constants/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const increaseIndex = () => {
    return {
        type: types.INCREASE_INDEX,
    }
}

export const reductionIndex = () => {
    return {
        type: types.REDUCTION_INDEX,
    }
}

export const increaseTrendingIndex = () => {
    return {
        type: types.INCREASE_TRENDINGINDEX,
    }
}

export const reductionTrendingIndex = () => {
    return {
        type: types.REDUCTION_ITRENDINGINDEX,
    }
}
export const listProductTrending = () => {
    return {
        type: types.LIST_PRODUCT_TRENDING
    }
}
export const listPhoneTrending = () => {
    return {
        type: types.LIST_PHONE_TRENDING
    }
}
export const listLatopTrending = () => {
    return {
        type: types.LIST_LAPTOP_TRENDING
    }
}
export const actAddToCart = (product,quantity) =>{
    return{
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message) =>{
    return{
        type : types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart = (product) => {
    return{
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product,quantity) => {
    return{
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
