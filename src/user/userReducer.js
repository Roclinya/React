//引入userAcitons各個常數
import { FETCH_USER_LIST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from './userActions'
// import * as types from './userActions' line2第二種寫法
//定義一個initialstate作為預設參數值
const initialState = {
    userList: [],
    error: [],
    isLoading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_LIST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.data,
                isLoading: false
            }
        case FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                userList: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
export default reducer