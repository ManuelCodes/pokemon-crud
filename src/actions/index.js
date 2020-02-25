import pokemonApiJava from '../apis/pokemonApiJava';

export const fetchPokemons = () => {
    return async dispatch => {
        const response = await pokemonApiJava.get('api/national-pokedex/pokemons');
        dispatch({ type: 'FETCH_POKEMONS', payload: response.data })
    }
};
