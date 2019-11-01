import * as types from './../constants/ActionTypes'
var initialState = [];
var appReducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        
        default: return state;
    }
};
export default appReducer;