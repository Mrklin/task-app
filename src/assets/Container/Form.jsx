import React, { useState, useEffect } from 'react'
import Input from '../Components/Input'
import TodoItem from '../Components/TodoItem';

const Form = () => { 
   const [contents, setContents] = useState(() => {
    const storedContents = localStorage.getItem('myContents');
    return storedContents ? JSON.parse(storedContents): [];
   });

   const [tracker, setTracker] = useState(contents.length);

   const trackerChange = () =>{
    setTracker(tracker)
   }


   function addContent(createNew) {
        setContents(prevContent =>{
            return[...prevContent, createNew]
        })
   }

   function deleteContent(id) {
    setContents(prevContents => {
        return prevContents.filter((content, index) =>{
          return index !== id
        })
    })

  }
    useEffect(() => {
      localStorage.setItem('myContents',
        JSON.stringify(contents));
    
    },[contents])
    
    
  return (
    <div className='w-[430px] relative rounded-2xl shadow-md hover:shadow-lg px-8 mb-3
     bg-sky-100 min-h-30 h-fit text-center place-content-center top-10 text-[#4A4A4A]'>
        <h3 className='text-[2rem] italic pb-4'>{contents.length ? `You have ${contents.length} task`: `Add a task` } </h3>
        
        <div className='flex flex-col-reverse '>

        <div>
        <Input 
        holder="Input your task"
        addContent = {addContent}
        />
    
        </div>

        <div className='relative h-fit'>
            <ul onChange={trackerChange}>
                {contents.map((text, index) => (
                    <TodoItem key={index}
                    id = {index}
                    delete = {deleteContent}
                    task = {text.task}
                    />
                ))}
            </ul>
        </div>
        
        </div>


    </div>
  )
}

export default Form