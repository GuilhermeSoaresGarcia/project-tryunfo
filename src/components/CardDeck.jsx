import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class CardDeck extends React.Component {
  render() {
    const { cardCollection } = this.props;

    return (
      <section className="card-deck">
        {cardCollection.map((item, index) => (
          <div
            className="card"
            key={ index }
          >

            <h2>
              {item.cardname}
            </h2>

            <img
              src={ item.cardImage }
              alt={ item.cardName }
            />

            <p>
              {item.cardDescription}
            </p>

            <p>
              <span>Atributo 1: </span>
              {item.cardAttr1}
            </p>

            <p>
              <span>Atributo 2: </span>
              {item.cardAttr2}
            </p>

            <p>
              <span>Atributo 3: </span>
              {item.cardAttr3}
            </p>

            <p>
              <span>Raridade: </span>
              {item.cardRare}
            </p>

            <p trunfo-input>
              {item.cardTrunfo && 'Super Trunfo'}
            </p>
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
