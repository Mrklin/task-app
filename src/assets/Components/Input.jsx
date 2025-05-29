import React, { useState } from 'react'

const Input = (props) => {
    const [text, setText] = useState({task:''});
    

    const handleText = (e) => {
        const {name, value} = e.target;
        setText(prevContent => {
            return{...prevContent,
                [name]: value
            }
        })
    }
  return (
    <div className='flex justify-between flex-col h-[100%]'>
            
            <input onChange={handleText}
             className={`text-[1.2rem]  outline-0`} 
             placeholder={props.holder}
             name='task'
             value={text.task} />

             <div>
                {/* <h1 className='text-[1rem]'>Add text</h1> */}
                <input onClick={()=>{
                    if(text.task !==""){
                    props.addContent(text);
                    setText({task:''}); }
                }} 
                type='button' className="text-5xl cursor-pointer pb-2" value="+"/>
            </div>
            
    </div>
  )
}

export default Input