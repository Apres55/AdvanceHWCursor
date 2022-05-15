import React from 'react';
import Post from './twiterpost/PostItem';
import './App.css';
import PostList from './components/PostList';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Post></Post>
        <PostList />
      </div>
    </Provider>
  );
};

export default App;