import React from "react";
import "./App.css";
import CardList from "./components/card-list.component";
import Search from "./components/search.component";
import Title from "./components/title.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchFilter: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ users: user }));
  }

  render() {
    const { users, searchFilter } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase()),
      
  
      
    );

    return (
      <div className="App">
        <Title>Hello Monsters</Title>

        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => this.setState({ searchFilter: e.target.value })}
         className="search"/>

        <CardList datas={filteredUsers} />
      </div>
    );
  }
}

export default App;
