import * as types from '../constants/ActionTypes'
var initialState = 0; // index on Trending
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_TRENDINGINDEX:
            state = state + 1;
            return state;
        default: return state;

        case types.REDUCTION_ITRENDINGINDEX:
            state = state - 1;
            return state;
    }
};
export default appReducer;