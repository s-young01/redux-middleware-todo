import { combineReducers } from "redux";
import posts from "./posts";
import todos from "./todos";
// 한 프로젝트에 여러 개의 리듀서 함수가 있을 때
// 하나의 리듀서로 합쳐서 사용하는데,
// 이 합쳐진 리듀서를 루트 리듀서라 함
const rootReducer = combineReducers({
    todos,
    posts
});

export default rootReducer;