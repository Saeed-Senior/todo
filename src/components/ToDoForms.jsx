import { useState } from "react";
import add from '../img/add.png';

function ToDoForms({addTask}) {
   const [input, setInput] = useState('');
   const handleSubmit = (e) => {
      addTask(input);
      e.preventDefault();
      setInput('');
   }
   const handleChange = (e) => {
      setInput(e.currentTarget.value);
   }

   return (
      <form className="w-[300px]" onSubmit={handleSubmit}>
         <button><img className='max-w-[14px]' src={add} alt="ADD"/></button>
         <input className="bg-transparent p-2 outline-none" value={input} onChange={handleChange} type="text" placeholder="Новая задача"/>
      </form>
   )
}

export default ToDoForms;