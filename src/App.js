import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: 'asdasdasd',
      cardDescription: 'descrição',
      cardAttr1: '90',
      cardAttr2: '100',
      cardAttr3: '25',
      cardImage: '../',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form cardName={this.state.cardName} />
        <Card cardName={this.state.cardName} />
      </div>
    );
  }
}

export default App;
