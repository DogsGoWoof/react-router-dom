// src/components/PokemonForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    weight: 0,
    height: 0,
};

const PokemonForm = (props) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault(); // necessary to prevent page reload
        // TODO : complete submit logic
        props.addPokemon(formData);
        setFormData(initialState);
        navigate('/pokemon');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>New Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="weight">Weight:</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default PokemonForm;
