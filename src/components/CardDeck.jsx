import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// const image = require('./img/gato2.jpeg');

class CardDeck extends React.Component {
  render() {
    const { cardCollection, onDeleteButtonClick } = this.props;

    return (
      <>
        {cardCollection.map((
          {
            cardName,
            cardImage,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardRare,
            cardTrunfo,
          }, index,
        ) => (
          (
            <div className="card-container" key={ index }>
              <div className={ cardTrunfo ? 'card trunfo' : 'card' }>
                <div className="card-core">
                  <h1 data-testid="name-card">
                    {cardName}
                  </h1>

                  <div className="card-img">
                    <img
                      src={ cardImage }
                      // src={ image }
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

                    <p>
                      Raridade:
                    </p>
                    <div data-testid="rare-card">
                      {cardRare}
                    </div>
                  </div>

                  {
                    () => { // Isso é porque o lint está de sacanagem comigo...
                      if (cardTrunfo) {
                        <span
                          className="trunfo"
                          data-testid="trunfo-card"
                        >
                          Super Trunfo
                        </span>;
                      }
                    }
                  }

                </div>
              </div>
              <button
                type="button"
                data-testid="delete-button"
                onClick={ onDeleteButtonClick }
              >
                Excluir
              </button>
            </div>)
        ))}
      </>
    );
  }
}

CardDeck.propTypes = {
  cardCollection: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default CardDeck;
