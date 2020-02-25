import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import pokemonReducer from './pokemonReducer';

export default combineReducers({
    pokemons: pokemonReducer,
    auth: authReducer,
    form: formReducer
});
