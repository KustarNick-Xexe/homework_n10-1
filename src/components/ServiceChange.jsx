import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { updateItem } from '../actions'

function ServiceChange({ id, onChange }) {
    const item = useSelector(state => state.items.find(item => item.id === id));
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, price } = event.target;
        dispatch(updateItem(id, name.value, price.value));
        setName('');
        setPrice('');
        onChange();
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
            <input className=' border border-slate-900 m-4' name='price' type='number' onChange={ handleChange } value={ price } />
            <button className=' bg-slate-900 text-gray-50 m-4 px-4 py-1' type='submit'>Change</button>
            <button className=' bg-slate-900 text-gray-50 m-4 px-4 py-1'onClick={ () => onChange() } >Cancel</button>
        </form>
    )
  }
  
export default ServiceChange;