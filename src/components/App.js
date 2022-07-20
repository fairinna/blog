import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <div className='ui container'>
      <h1>STRONG APP</h1>
      <h3>
        <PostList />{' '}
      </h3>
    </div>
  );
};
export default App;
