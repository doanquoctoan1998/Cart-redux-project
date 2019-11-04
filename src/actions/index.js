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