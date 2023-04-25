import { useState } from 'react';

function ServiceFilter({ onChange }) {
    const [filter, setFilter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const { filter } = event.target;
        onChange(filter.value);
        setFilter('');
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { filter } = event.target;
        setFilter(filter);
    };

    return (
        <form className=' flex w-500' onSubmit={ handleSubmit }>
            <input className=' border border-slate-900 m-4' name='filter' type='text' onChange={ handleChange } value={ filter } />
            <button className=' bg-slate-900 text-gray-50 m-4 px-4 py-1' type='submit'>Filter</button>
        </form>
    )
  }
  
export default ServiceFilter;