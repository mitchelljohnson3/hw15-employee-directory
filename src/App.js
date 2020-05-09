import React, { Component } from 'react';
let sampleData = require("./MOCK_DATA.json");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: sampleData
    }
  }

  sortByFirst() {
    // read in the employee data, and create a new array sorted alphabetically by first name
    let data = require("./MOCK_DATA.json");
    let sortedArr = data.sort(function(a, b){
      if(a.first_name > b.first_name) {
        return 1;
      } else {
        return -1;
      }
    });
    // update the state
    this.updateState(sortedArr);
  }

  sortByLast() {
    // read in the employee data, and create a new array sorted alphabetically by last name
    let data = require("./MOCK_DATA.json");
    let sortedArr = data.sort(function(a, b){
      if(a.last_name > b.last_name) {
        return 1;
      } else {
        return -1;
      }
    });
    // update the state
    this.updateState(sortedArr);
  }

  sortByEmail() {
    // read in the employee data, and create a new array sorted alphabetically by email
    let data = require("./MOCK_DATA.json");
    let sortedArr = data.sort(function(a, b){
      if(a.email > b.email) {
        return 1;
      } else {
        return -1;
      }
    });
    // update the state
    this.updateState(sortedArr);
  }
  
  filterByMen() {
    // show only male employees
    let data = require("./MOCK_DATA.json");
    let filteredArr = data.filter(item => {
      return item.gender === "Male";
    });
    // update the state
    this.updateState(filteredArr);
  }

  filterByWomen() {
    // show only female employess
    let data = require("./MOCK_DATA.json");
    let filteredArr = data.filter(item => {
      return item.gender === "Female";
    });
    // update the state
    this.updateState(filteredArr);
  }

  updateState(obj) {
    this.setState({list: obj});
  }

  render() {
    return (
      <div className="App">
        <>
          <h1>Employee Directory</h1>
          <button onClick={() => this.sortByFirst()}>Sort by First Name</button>
          <button onClick={() => this.sortByLast()}>Sort by Last Name</button>
          <button onClick={() => this.sortByEmail()}>Sort by Email</button>
          <button onClick={() => this.filterByMen()}>Show Only Males</button>
          <button onClick={() => this.filterByWomen()}>Show Only females</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  <b>Name:</b> {item.first_name} {item.last_name} <b>Email</b>: {item.email} <b>Gender</b>: {item.gender}
                </li>
              )
            })}
          </ul>
        </>
      </div>
    );
  }
}

export default App;
