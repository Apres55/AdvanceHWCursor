import { Routes, Route } from "react-router-dom";
import UsersList from "./components/user/UsersList";
import NewUser from "./components/user/NewUser";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/users" element={ <UsersList /> } />
          <Route path="/add-user" element={ <NewUser /> } />
        </Routes>
    </div>
  );
}

export default App;

