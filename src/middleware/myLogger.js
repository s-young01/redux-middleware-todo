const myLogger = store => next => action => {
    // 액션 출력하기
    console.log(action);
    // 다음 미들웨어에게 액션 전달
    const result = next(action);
    console.log(store.getState());
    return result;
}

export default myLogger;