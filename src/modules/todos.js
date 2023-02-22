// 1. 액션 타입
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DEL_TODO = "DEL_TODO";

// 2. 액션 생성 함수
// {type: ADD_TODO, todo: {id:1 , text: '텍스트', isDone: false}}
// addTodo('리덕스 너무 어렵다') 를 호출 하면 아래가 반환됨
// {type: ADD_TODO, todo: {id:1 , text: '리덕스 너무 어렵다', isDone: false}}
let nextId = 1; 
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text,
        isDone: false
    }
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});
export const delTodo = (id) => ({
    type: DEL_TODO,
    id: id
});
// 리덕스 thunk 사용하기
export const toggleTodoAsync = (id) => dispatch => {

    setTimeout(() => {
        dispatch(toggleTodo(id));
    }, 2000);
}
export const delTodoAsync = (id) => dispatch => {
    setTimeout(() => {
        dispatch(delTodo(id));
    }, 2000);
}


// 3. 리듀서 함수
export default function todos(state=[], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo);
        default:
            return state;
    }
}