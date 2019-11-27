import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Counter count={123} />
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <div>Hello!</div>        
      </div>
    );
  }
}

export default App;
