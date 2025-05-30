import React from 'react'
import Form from './assets/Container/Form';
import Header from './assets/Container/Header';

function App() {
  
  return (
    <>
    <div className='flex flex-col relative min-h-screen max-h-vh overflow-x-hidden 
    w-svw bg-blue-300 bg-[url(`https://transparenttextures.com/patterns/black-mamba.png`)]'>
    <Header />
    <div className='flex items-center my-10 justify-start py-3 flex-col'>
         <h1 className='text-[1.5rem] md:text-[3.5rem]'>Type in to add a task</h1> 
         <Form />
         
      </div>
      </div>
    </>
  )
}

export default App
