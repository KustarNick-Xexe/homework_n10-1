import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addItem } from '../actions'

function ServiceAdd() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const { name, price } = event.target.value;
        console.log(addItem(name, price))
        dispatch(addItem(name, price));
        setName('');
        setPrice('');
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, price } = event.target.value;
        setName(name);
        setPrice(price);
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