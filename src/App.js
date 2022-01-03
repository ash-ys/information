import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/card-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ users: user }));
  }

  render() {
    return <CardList datas={this.state.users} />;
  }
}

export default App;
