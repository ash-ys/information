import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/card-list.component";
import Search from "./components/search.component";
import Title from "./components/title.component";

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
    return (
      <div className="App">
        <div className="wrapper">
          <Title>My Monsters</Title>
          <Search placeholder="search" />
          <CardList datas={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
