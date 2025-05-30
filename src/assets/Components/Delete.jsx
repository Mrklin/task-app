import React from 'react'

const Delete = (props) => {
  return (
    
        <input type='button' 
        value='Delete' 
        onClick={props.delete}
            className='cursor-pointer px-3 md:px-4  py-0.5 md:py-1 rounded-2xl text-amber-50 hover:bg-sky-700 bg-sky-500'/>

  )
}

export default Delete