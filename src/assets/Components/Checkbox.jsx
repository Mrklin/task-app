import React from 'react'

const Checkbox = ({type, change}) => {
  return (
    <input  
     type={type}
     onClick={change}

     className='w-[18px] md:w-[20px] cursor-pointer'
     /> 
  )
}

export default Checkbox