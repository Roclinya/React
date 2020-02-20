export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//Action Creater 接收參數，回傳Oboject
const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value //Reducer接收的時候要依照這個名稱去查
})// ({代表回傳Object
const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})
const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

const actionCreators = {
    changeInput,
    addTodo,
    deleteTodo,
    toggleTodo,
}
//把type包成物件再export出去比單獨一個一個傳出去方便

export const types = {
    CHANGE_INPUT,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO
}
export default actionCreators
