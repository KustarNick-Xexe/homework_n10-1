import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import ServiceChange from './components/ServiceChange';
import { useState } from 'react';

function App() {
  const [change, setChange] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (id) => {
    setChange(id);
    setIsVisible(!isVisible);
  }

  const handleChanged = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className=''>
      { isVisible ? <ServiceChange id={ change } onChange={ handleChanged }/> : <ServiceAdd /> }
      <ServiceList onChange={ handleChange }/>
    </div>
  )
}

export default App
