import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTodos } from '../context/Todos';
import Display from '../Component/Display';

const Todo = () => {
    const [task, setTask] = useState("");
    
    const [description, setdescription] = useState("");

    const {handleSetTodo, todos, findPending, findDone, allTask, setAllTask} = useTodos();

    
    localStorage.setItem('newTodos', JSON.stringify(todos));

    const handleFormSubmit = (e)=>{
        handleSetTodo(task, description)
        e.preventDefault();
    }



    console.log(allTask);

  return (
    <div><h1>SHOP SMART </h1>
        <h3>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div>
            <Link to='/shoping'>Visit Shopping Site</Link>
            <Link to='/'>Back to Home</Link>
        </div>
        <div className=" container w-7/12 m-auto">
            <form onSubmit={handleFormSubmit} className=" grid justify-center  w-2/5 m-auto pt-8 pb-14 pr-6 pl-6 shadow-md bg-blue-50 min-w-fit">
            <h4 className=" text-center font-bold mb-6">Add New Task</h4>
            <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Title</label>
            <input type="text" required className=" p-1 mb-7 border" value={task} onChange={event => setTask(event.target.value)}/>
            <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Description</label>
            <input type="text" required className=" p-1 mb-4 border h-16"  value={description} onChange={event => setdescription(event.target.value)}/>
            <button type="submit" className="border rounded-lg bg-red-400 pt-1 pb-1 font-semibold text-yellow-50">Add Task</button>
      </form>
      <div>
        <button onClick={()=> setAllTask(todos)}>All</button>
        <button onClick={findPending}>Pending</button>
        <button onClick={findDone}>Done</button>
      </div>
      <div>
        <Display todos={allTask}/>
      </div>
    </div>
    </div>
  )
}

export default Todo