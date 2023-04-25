
function ServiceList() {
    const items = [];

    const handleRemove = (id) => {
        return id;
    }

    const handleChange = (id) => {
        return id;
    }

    return (
      <ul>
        {
            items.map(item => {
                return (
                    <li key={item.id} >{ item.name } { item.price }
                        <button onClick={ () => handleRemove( item.id ) }>
                            Change
                        </button>
                        <button onClick={ () => handleChange( item.id ) }>
                            Delete
                        </button>
                    </li>)
            })
        }
      </ul>
    )
  }
  
  export default ServiceList