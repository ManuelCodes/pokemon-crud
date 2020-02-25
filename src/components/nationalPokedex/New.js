import React from 'react';
import { Field, reduxForm } from  'redux-form';

import pokemonApiJava from '../../apis/pokemonApiJava';
import '../login/style.css';


class New extends React.Component {


  renderError( {error, touched }) {
    if(touched && error) {
      return (
        <div>{error}</div>
      );
    }
  }

  renderInput = ( {input, label, meta} ) => {
      return (

        <div className="group">
          <input  {...input} autoComplete="off" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{label}</label>
        </div>
      );
    }

  onSubmit(formValues) {

    console.log(formValues);
    pokemonApiJava.post('api/national-pokedex/add-pokemon',
      {
        name: formValues.name
      }
    ).then(() => {
      window.location = '/national-pokedex';
    });
    /*export const addPokemon = form => {
      return async dispatch => {
        const response = await pokemonApiJava.post('api/national-pokedex/add-pokemon',
          {form}
        );
        dispatch( {type: 'ADD_POKEMON'});
      }
    };*/
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} label="Enter pokemon"/>
        <button  className="button buttonBlue" >Add
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    )
  }
}

//export default New;

export default reduxForm({
  form: 'newPokemon'
})(New);
