import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          <span>Nome da carta: </span>
          <input
            name="nome"
            id="name"
            data-testid="name-input"
            value=""
          />
        </label>

        <label htmlFor="card-description">
          <span>Descrição da carta: </span>
          <textarea
            name="descricao"
            id="card-description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>

        <label htmlFor="attr1">
          <span>Atributo 1: </span>
          <input
            type="number"
            name="atributo1"
            id="attr1"
            data-testid="attr1-input"
            value=""
          />
        </label>

        <label htmlFor="attr2">
          <span>Atributo 2: </span>
          <input
            type="number"
            name="atributo2"
            id="attr2"
            data-testid="attr2-input"
            value=""
          />
        </label>

        <label htmlFor="attr3">
          <span>Atributo 3: </span>
          <input
            type="number"
            name="atributo3"
            id="attr3"
            data-testid="attr3-input"
            value=""
          />
        </label>

        <label htmlFor="img">
          <span>Imagem da carta: </span>
          <input
            name="imagem"
            id="img"
            data-testid="image-input"
            value=""
          />
        </label>

        <label htmlFor="rarity">
          <span>Raridade: </span>
          <select name="raridade" id="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="supertrunfo">
          <span>Super-Trunfo! </span>
          <input
            type="checkbox"
            name="supertrunfo"
            id="supertrunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
