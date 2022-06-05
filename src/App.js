import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/user/UsersList";
import NewUser from "./components/user/NewUser";
import Posts from './components/post/Posts';
import NewPost from './components/post/NewPost';

function App() {
  return (
    <div className="App">
      <h1>dsadasda</h1>
      <Router>
        <Routes>
          <Route path="/" element={ <NewUser /> } />
          <Route path="/add-user" element={ <UsersList /> } />
          <Route path="/posts" element={ <NewPost /> } />
          <Route path="/new-post" element={ <Posts /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

