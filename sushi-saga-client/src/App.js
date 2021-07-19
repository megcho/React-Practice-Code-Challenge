import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    currentSushis: [],
    currentMoney: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        sushis: data,
        currentSushis: data.splice(0,4)
      })
    })
  }

  moreSushi = () => {
    const nextSushis = this.state.sushis.splice(0,4);
    this.setState({
      currentSushis: nextSushis
    })
  }

  eatSushi = (e) => {
    // console.log(e.target.id)
    const sushiPrice = this.state.currentSushis.find(sushi => sushi.id == e.target.id).price;
    console.log(sushiPrice);
    if (sushiPrice > this.state.currentMoney) {
      console.log("ur broke")
    }
    else {
      const uneaten = this.state.currentSushis.filter(sushi => sushi.id != e.target.id);
      // console.log(uneaten);
      const moneyRemaining = this.state.currentMoney - sushiPrice;
      this.setState({
        currentSushis: uneaten,
        currentMoney: moneyRemaining
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} moreSushi={this.moreSushi} sushis={this.state.currentSushis}/>
        <Table money={this.state.currentMoney}/>
      </div>
    );
  }
}

export default App;