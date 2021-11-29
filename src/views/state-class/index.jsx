import { Component } from 'react';

class StateClass extends Component {

  state = {
    name: 'JCMartim'
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={this.state.value}
          onChange={this.handleName}
        />
        <p>Nome: {this.state.name}</p>
      </>
    );
  }
}

export default StateClass
