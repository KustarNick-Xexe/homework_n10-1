import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

function ServiceAdd() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const { name, price } = event.target;
    };

    const handleChange = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input name='name' type='text' onChange={ handleChange } value={ name } />
            <input name='price' type='text' onChange={ handleChange } value={ price } />
            <button type='submit'>Save</button>
        </form>
    )
  }
  
  export default ServiceAdd;