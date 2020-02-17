import pokemonApiJava from '../apis/pokemonApiJava';

export const fetchPokemons = () => {
    return async dispatch => {
        const response = await pokemonApiJava.get('/test/pokemons');
        dispatch({ type: 'FETCH_POKEMONS', payload: response.data })
    }
};