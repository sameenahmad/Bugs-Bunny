import React from "react";
import Home from "./Components/Home";
import Leaderboard from "./Components/Leaderboard";
import Addmember from "./Components/Addmember";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/addmember" component={Addmember} />
      </Router>
    </div>
  );
}

export default App;
