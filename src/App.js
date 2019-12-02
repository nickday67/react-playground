import React, { Component } from "react";
import "./App.css";
// import Messages from "./Messages";
// import TheDate from "./state/TheDate";
// import Counter from "./state/Counter";
// import Bomb from "./state-drills/Bomb";
// import HelloWorld from "./state-drills/HelloWorld";
// import RouletteGun from "./state-drills/RouletteGun";
import Accordion from './state-drills/Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><Accordion /></h1>
        <Accordion sections={sections} />
        {/* <p><Bomb /></p>
        <br />
        <p><HelloWorld /></p>
        <br />
        <p><RouletteGun /></p> */}
        {/* <h1>YOUR APPLICATION NAME!</h1>
        <Counter count={123} />
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <div>Hello!</div> */}
      </div>
    );
  }
}

export default App;