import React,{useState} from 'react'
import Delete from './Delete'
import Checkbox from './Checkbox'

const TodoItem = (props) => {
    const [check, setCheck] = useState(false);

    const handleCheck = () =>{
        setCheck(!check);
    }
  return (
    <div className='flex justify-between h-[100%]'>
        
        <li className='flex justify-between w-full pb-2'> 
            <Checkbox
            type='checkbox'
            change={handleCheck}
            />
            <p className= {`${check ? "line-through italic text-gray-500" : ""} 
            text-[1.1rem] md:text-[1.2rem]`} >
            {props.task}
             </p>
            <Delete 
             delete = {() =>{
                props.delete(props.id)
             }}
            />
        </li>
        
    </div>
  )
}

export default TodoItem