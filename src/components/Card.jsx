import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="preview">
        <h1>Preview da carta</h1>
        <div className="card">
          <h2 data-testid="name-card">{cardName}</h2>

          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />

          <p data-testid="description-card">
            {cardDescription}
          </p>

          <p data-testid="attr1-card">
            <span>Atributo 1: </span>
            {cardAttr1}
          </p>

          <p data-testid="attr2-card">
            <span>Atributo 2: </span>
            {cardAttr2}
          </p>

          <p data-testid="attr3-card">
            <span>Atributo 3: </span>
            {cardAttr3}
          </p>

          <p data-testid="rare-card">
            <span>Raridade: </span>
            {cardRare}
          </p>

          {
            cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
          }
        </div>
      </section>);
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
