import React, { Component } from 'react';
import locations from './components/dropdown/data';
import Dropdown from './components/dropdown/index';
import './App.scss';

class App extends Component {
    constructor(){
    super()
    this.state = {
      location: locations
      // location: [
      //   {
      //     id: 0,
      //     title: 'New York',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 1,
      //     title: 'Dublin',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 2,
      //     title: 'California',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 3,
      //     title: 'Istanbul',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 4,
      //     title: 'Izmir',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 5,
      //     title: 'Oslo',
      //     selected: false,
      //     key: 'location'
      //   },
      //   {
      //     id: 6,
      //     title: 'Zurich',
      //     selected: false,
      //     key: 'location'
      //   }
      // ]
    }
  }

  toggleSelected = (id) => {
    let temp = JSON.parse(JSON.stringify(this.state.location))
    temp[id].selected = !temp[id].selected
    this.setState({
      location: temp
    })
  }

  resetThenSet = (id) => {
    let temp = JSON.parse(JSON.stringify(this.state.location))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      location: temp
    })
  }

  render() {
    return (
      <div className="App">
        <p>Dropdown menu examples</p>

        <div className="wrapper">
          {/* <DropdownMultiple
            titleHelper="Location"
            title="Select location"
            list={this.state.location}
            toggleItem={this.toggleSelected}
          /> */}

          <Dropdown
            titleCode='44'
            titleFlag='gb'
            list={this.state.location}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

export default App;
