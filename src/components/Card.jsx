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
      <>
        <h1>Preview da carta</h1>
        <div className={ cardTrunfo ? 'card trunfo' : 'card' }>
          <div className="card-core">
            <h1 data-testid="name-card">
              {cardName}
            </h1>

            <div className="card-img">
              <img
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
            </div>

            <p className="card-description" data-testid="description-card">
              {cardDescription}
            </p>

            <div className="card-atribbs">
              <p>
                Atributo 1:
              </p>
              <div data-testid="attr1-card">{cardAttr1}</div>

              <p>
                Atributo 2:
              </p>
              <div data-testid="attr2-card">{cardAttr2}</div>

              <p>
                Atributo 3:
              </p>
              <div data-testid="attr3-card">{cardAttr3}</div>

              <p className="card-rarity">
                Raridade:
              </p>
              <div data-testid="rare-card">
                {cardRare}
              </div>
            </div>

            {
              cardTrunfo
              && <span className="trunfo" data-testid="trunfo-card">Super Trunfo</span>
            }
          </div>
        </div>
      </>);
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
