import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderList() {

    return this.props.pokemon.map(pokemon => {
        return (
          <tr className="mdc-data-table__row" key={pokemon.id}>
            <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{pokemon.id}</td>
            <td className="mdc-data-table__cell">{pokemon.name}</td>
          </tr>
        );
    });
  }

  render() {
    return (
      <div>
        <div className="mdc-data-table">
          <table className="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
              <tr className="mdc-data-table__header-row">
                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Id</th>
                <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th>
              </tr>
            </thead>
            <tbody className="mdc-data-table__content">
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { pokemon: state.pokemons }
}

export default connect(
  mapStateToProps,
  { fetchPokemons })
(App);
