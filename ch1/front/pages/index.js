import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';


const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글',
    img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  }],
}

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(loginAction);
    dispatch(logoutAction);
    dispatch(loginAction);
  }, []);

  return (
    <div>
      {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        );
      })}
    </div>
  )
}

export default Home;