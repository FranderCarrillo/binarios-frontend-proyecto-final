import React from 'react'

const ListOffers = () => {
    

  return (
    <div>
      <div className='card-container'>
        {products?.map(product=>(
          <span key={product.id}>{product.title}</span>
        ))}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ListOffers