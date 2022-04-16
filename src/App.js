import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardDeck from './components/CardDeck';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardCollection: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  clearFields = () => {
    this.setState(() => (
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }
    ));
  }

  hasTrunfo = () => {
    const { cardCollection } = this.state;
    return cardCollection.some((card) => card.cardTrunfo === true);
  }

  verifySaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const atributo1 = Number(cardAttr1);
    const atributo2 = Number(cardAttr2);
    const atributo3 = Number(cardAttr3);
    const param0 = 0;
    const param90 = 90;
    const param210 = 210;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && atributo1 >= param0
      && atributo2 >= param0
      && atributo3 >= param0
      && atributo1 <= param90
      && atributo2 <= param90
      && atributo3 <= param90
      && atributo1 + atributo2 + atributo3 <= param210) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? checked : value,
    }, () => this.verifySaveButton());
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // const { cardCollection } = this.state;
    // cardCollection.push(card);
    this.setState((prevState) => ({ // NÃO ESQUECER QUE REACT É ASSÍNCRONO!! NÃO USAR PUSH PRA MODIFICAR ARRAYS!!
      cardCollection: [...prevState.cardCollection, card],
    }));
    this.clearFields();
  }

  onDeleteButtonClick = (target) => {
    const { cardCollection } = this.state;
    const cardCollectionCopyArray = cardCollection;
    const { key } = Object.values(target.currentTarget.parentElement)[0];
    cardCollectionCopyArray.splice(key, 1);

    this.setState(() => ({
      cardCollection: cardCollectionCopyArray,
    }));
  }

  render() {
    const {
      cardName,
      cardCollection,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ this.cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.hasTrunfo() }
          />
          <section className="preview">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </main>
        <section className="card-deck">
          <div className="card-deck-title">
            <h1>Baralho de cartas</h1>
          </div>
          <CardDeck
            cardCollection={ cardCollection }
            onDeleteButtonClick={ this.onDeleteButtonClick }
          />
        </section>
      </div>
    );
  }
}

export default App;
