const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const posts = [
    {
        id: 1,
        title: '리덕스',
        desc: '상태관리는 리덕스'
    },
    {
        id: 2,
        title: '리덕스 미들웨어 thunk',
        desc: '상태관리는 리덕스'
    },
    {
        id: 3,
        title: '끝내주게 잠들기',
        desc: '집 가자마자 자야징'
    },
];

// 비동기 함수 생성
export const getPosts = async () => {
    await sleep(500); // 0.5초 쉬고나서 실행 하라
    return posts;
}

export const getPostbyId = async (id) => {
    await sleep(500);
    // .find : (일치하는 값이 여러 개 있어도)일치하는 값 단 하나만을 반환 
    return posts.find(post => post.id === id);
}