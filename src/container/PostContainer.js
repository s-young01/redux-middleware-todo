import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

const PostContainer = () => {
    const {loading, data, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    return (
       <PostList posts={data}/>
    );
};

export default PostContainer;