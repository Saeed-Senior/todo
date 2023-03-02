import del from '../img/delete.png';

function ToDo({todo, removeTask, handleToggle}) {
   
   return (
      <div className='flex justify-between items-center sm:w-[415px] w-[300px] my-2 text-base font-medium'>
         <p onClick={() => handleToggle(todo.id)} className={todo.complete ? 'line-through cursor-pointer text-green-400' : 'cursor-pointer'}>
            {todo.task}
         </p>
         <button onClick={() => removeTask(todo.id)}><img className='max-w-[21px] ml-2' src={del} alt="DELETE"/></button>
      </div>
   )
}

export default ToDo;