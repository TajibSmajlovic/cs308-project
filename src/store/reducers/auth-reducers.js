import { SET_DATA } from '../types/auth-types'

const initialState = {
    user: null,
    token: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA: return{
            ...state,
            ...action.data
        }
        default:
            return state
    }
}

export default reducer;