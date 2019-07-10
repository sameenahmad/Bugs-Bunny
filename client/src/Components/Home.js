import React, { Component } from "react";
import Header from "./Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bugs: [
        {
          ticket: "123456",
          timestamp: "109219",
          username: "Sameen",
          status: "pending"
        },
        {
          ticket: "78910",
          timestamp: "210219",
          username: "Marcel",
          status: "Resolved"
        },
        {
          ticket: "111213",
          timestamp: "310219",
          username: "Marcel",
          status: "uNSOLVED"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home-Container">
          {this.state.bugs.map(bug => (
            <React.Fragment>
              <div className="table-Header">
                <h1>{bug.ticket}</h1>
              </div>
              <div className="table-Header">
                <h1>{bug.timestamp}</h1>
              </div>
              <div className="table-Header">
                <h1>{bug.username}</h1>
              </div>
              <div className="table-Header">
                <h1>{bug.status}</h1>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
