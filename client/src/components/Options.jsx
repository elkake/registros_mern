import React from 'react'

function Options({ id, value, children }) {
  return (
    <option className='w-30 bg-black' id={id} value={value}>
      {children}
    </option>
  )
}

export default Options
