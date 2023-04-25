import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import ServiceChange from './components/ServiceChange';
import ServiceFilter from './components/ServiceFilter';
import { useState } from 'react';

function App() {
  const [change, setChange] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('');

  const handleChange = (id) => {
    setChange(id);
    setIsVisible(!isVisible);
  }

  const handleChanged = () => {
    setIsVisible(!isVisible);
  }

  const handleFilterChanged = (item) => {
    setFilter(item.toLowerCase())
  };

  return (
    <div className=''>
      { isVisible ? <ServiceChange id={ change } onChange={ handleChanged }/> : <ServiceAdd /> }
      <ServiceFilter onChange={ handleFilterChanged }/>
      <ServiceList onChange={ handleChange } filter={ filter }/>
    </div>
  )
}

export default App
