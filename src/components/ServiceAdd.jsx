import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addItem } from '../actions'

function ServiceAdd() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, price } = event.target;
        dispatch(addItem(name.value, price.value));
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
        <form className=' flex w-500' onSubmit={ handleSubmit }>
            <input className=' border border-slate-900 m-4' name='name' type='text' onChange={ handleChange } value={ name } />
            <input className=' border border-slate-900 m-4' name='price' type='text' onChange={ handleChange } value={ price } />
            <button className=' bg-slate-900 text-gray-50 m-4 px-4 py-1' type='submit'>Save</button>
        </form>
    )
  }
  
export default ServiceAdd;