// import { types } from './todoActions';
import * as  types from './todoActions';


const initialState = {
    input: '',
    todoMap: {},
    index: -1
}

//新增一個Function,並給他一個switch case
//reducer預設數值回傳原本的state & action
//state=initialState為一個default參數的用法
function reducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_INPUT:
            return {
                ...state,
                input: action.value
            }
        case types.ADD_TODO:
            const { input, todoMap, index } = state
            const newIdx = index + 1
            return {
                ...state,
                todoMap: {
                    ...todoMap,
                    [newIdx]: {
                        isCompleted: false,
                        title: input,
                        id: newIdx
                    }
                }
            }
        case types.DELETE_TODO: {
            const newTodo = { ...state.todoMap }

            delete newTodo[action.id]
            return {
                ...state,
                todoMap: newTodo
            }
        }
        case types.TOGGLE_TODO: {
            const newTodo = { ...state.todoMap }
            newTodo[action.id] = {
                ...newTodo[action.id],
                isCompleted: !newTodo[action.id].isCompleted
            }
            return {
                ...state,
                todoMap: newTodo
            }
        }
        default:
            return {
                state
            }
    }
}



export default reducer