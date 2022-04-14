import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class CardDeck extends React.Component {
  render() {
    const { cardCollection } = this.props;

    return (
      <section className="card-deck">
        {cardCollection.map((item, index) => (
          <div key={ index }>
            <div className="card">

              <h2 data-testid="name-card">
                {item.cardname}
              </h2>

              <img
                src={ item.cardImage }
                alt={ item.cardName }
                data-testid="image-card"
              />

              <p data-testid="description-card">
                {item.cardDescription}
              </p>

              <p data-testid="attr1-card">
                <span>Atributo 1: </span>
                {item.cardAttr1}
              </p>

              <p data-testid="attr2-card">
                <span>Atributo 2: </span>
                {item.cardAttr2}
              </p>

              <p data-testid="attr3-card">
                <span>Atributo 3: </span>
                {item.cardAttr3}
              </p>

              <p data-testid="rare-card">
                <span>Raridade: </span>
                {item.cardRare}
              </p>

              <p data-testid="trunfo-card" trunfo-input>
                {item.cardTrunfo && 'Super Trunfo'}
              </p>
            </div>
            <button
              type="button"
              data-testid="delete-button"
              onClick={ (event) => { console.log(event.target.parentElement); } }
            >
              Excluir
            </button>
          </div>
        ))}
      </section>
    );
  }
}

CardDeck.propTypes = {
  cardCollection: PropTypes.func.isRequired,
};

export default CardDeck;
