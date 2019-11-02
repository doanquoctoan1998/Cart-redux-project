import * as types from './../constants/ActionTypes'
var initialState = true
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CONTROL_CAROUSEL:
                state =action.isId
            return state
                    
        default: return state;
    }
};
export default appReducer;