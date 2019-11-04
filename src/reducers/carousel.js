import * as types from './../constants/ActionTypes'
var initialState = 0; // index
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_INDEX:
            state = state +1 ;
            return state;    
        default: return state;

        case types.REDUCTION_INDEX:
            state = state - 1 ;
            return state;    
    }
};
export default appReducer;