import { Routes, Route } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts"
import Docs from "./components/Docs/Docs";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <NewPost /> } />
          <Route path="/posts" element={ <Posts /> } />
          <Route path="/docs" element={ <Docs /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
