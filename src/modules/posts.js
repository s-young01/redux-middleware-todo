import * as postApi from '../api/posts';

// 1. 액션 타입
// 포스트 여러 개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCSESS = 'GET_POSTS_SUCSESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 한 개 조회하기
const GET_POST = 'GET_POST'; // 요청 시작
const GET_POST_SUCSESS = 'GET_POST_SUCSESS'; // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR'; // 요청 실패

// thunk 사용하기
export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS }); // 요청 시작됨
    // 에러 핸들링
    // try문 : 에러 발생 확률이 있는 코드를 작성
    // try문에서 에러 발생하면 js중단되지 않고, catch문으로 넘어가 에러 처리함
    try {
        // 데이터 받아올 때 까지 기다렸다가.
        const posts = await postApi.getPosts();
        // 다 받아와지면 dispatch 해줌 !
        dispatch({ type: GET_POSTS_SUCSESS, data: posts }); // 요청이 성공함
    }
    catch(e) {
        dispatch({ type: GET_POSTS_ERROR, error: e }); // 요청 실패됨
    }
}

// 초기 상태 설정
const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
}

export default function posts(state=initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POSTS_SUCSESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
            case GET_POST:
                return {
                    ...state,
                    post: {
                        loading: true,
                        data: null,
                        error: null
                    }
                };
            case GET_POST_SUCSESS:
                return {
                    ...state,
                    post: {
                        loading: false,
                        data: action.data,
                        error: null
                    }
                };
            case GET_POST_ERROR:
                return {
                    ...state,
                    post: {
                        loading: false,
                        data: null,
                        error: action.error
                    }
                };
        default:
            return state;
    }
}