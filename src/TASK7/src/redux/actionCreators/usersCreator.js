import {
    SET_USERS_IS_LOADING,
    RESET_USERS_IS_LOADING,
    SET_USERS,
    SET_USERS_ERROR
} from '../actionTypes'

export const setUsersIsLoading = () => ({type:SET_USERS_IS_LOADING});
export const resetUsersIsLoading = () => ({type:RESET_USERS_IS_LOADING});
export const setUsers = (payload) =>({type: SET_USERS, payload});
export const setUsersError = (payload) => ({type:SET_USERS_ERROR, payload});
