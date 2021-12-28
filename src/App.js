import React, { Component } from "react";
import "./styles.css";
import CardList from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  handleChange = (e) => {
    console.log(this);
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox
          placeholder="Search Robots"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
