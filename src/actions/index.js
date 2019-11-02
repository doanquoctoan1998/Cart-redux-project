import * as types from './../constants/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const controlCarousel = (isId) => {
    return {
        type: types.CONTROL_CAROUSEL,
        isId,
    }
}