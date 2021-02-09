import Test from './Test';
import Reset from './Reset';
import React from 'react';

class OtherApp extends React.Component {
state = {
  personClicks: 0
}
personClicked() {
  this.setState({personClicks: this.state.personClicks + 1})
}

resetCounter() {
  this.setState({personClicks: 0})
}

  render() {
    return (
      <div>
        <div className="App">
          <Test person="Mary" personClicked={this.personClicked.bind(this)}/>
          <Test person="Tony" personClicked={this.personClicked.bind(this)}/>
          <Test person="Susan" personClicked={this.personClicked.bind(this)}/>
        Person Clicks: {this.state.personClicks}
          <Reset resetCounter={this.resetCounter.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default OtherApp;
