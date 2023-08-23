const initialState = {
    value : 0
}
export function CountReducer(state = initialState,action){
    switch(action.type){
        case 'counter/increase':
            return {
                ...state,
                value: state.value + 1
            }
        case 'counter/decrease':
            return {
                ...state,
                value : state.value - 1
            }
        default:
            return state;        
    }
}