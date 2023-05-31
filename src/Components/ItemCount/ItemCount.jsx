import React from 'react'

const ItemCount = ({onAdd, onRemove, onSave}) => {
  return (
    <>
    <div>
        <button className='addCountProductBtn' onClick={onAdd}>add</button>
        <button className='removeCountProductBtn' onClick={onRemove}>remove</button>
        <button className='saveCountProductBtn' onClick={onSave}>save</button>
    </div>
    </>
  )
}

export default ItemCount