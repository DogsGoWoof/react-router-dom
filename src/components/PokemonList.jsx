import { Link } from 'react-router-dom';

const PokemonList = (props) => {
    return (
        <div>
            <h2>Pokemon</h2>
            <ul id="pokeList">
                {props.pokemon.map((currentPokemon) => (
                    <li key={currentPokemon.name}>
                        <Link to={`/pokemon/${currentPokemon._id}`}>
                            {currentPokemon.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
