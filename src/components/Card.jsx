import React from 'react';
import PropTypes from 'prop-types';

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
          (cardTrunfo)
            ? <span data-testid="trunfo-card">Super Trunfo</span>
            : <span> </span>
        }

      </div>);
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  // hasTrunfo: false,
};

export default Card;
