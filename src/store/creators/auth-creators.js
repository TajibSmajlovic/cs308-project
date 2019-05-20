import { SET_DATA } from "../types/auth-types";

export const setData = data => {
    return{
        type: SET_DATA,
        data
    }
}

export const logout = () => async dispatch => {
    await localStorage.removeItem('user')
    await localStorage.removeItem('token')
    dispatch(setData({token: null, user: null}))
}

export const checkCookies = () => async dispatch => {
    /*const user = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('token'))
    if(user && token)
        dispatch(setData({user, token}))*/
}

export const storeCookies = async (data) => {
    await localStorage.setItem('user', JSON.stringify(data.user))
    await localStorage.setItem('token', JSON.stringify(data.token))
}