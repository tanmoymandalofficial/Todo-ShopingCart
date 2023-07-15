import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTodos } from '../context/Todos';
import Display from '../Component/Display';

const Todo = () => {
    const [task, setTask] = useState("");
    const [description, setdescription] = useState("");

    const {handleSetTodo, todos} = useTodos();

    const [displayTodo, setDisplayTodo] = useState([]);

    var pendingCount = 0;
    var completed = 0;
    todos.map(todo =>{
      if(todo.status === false){
        pendingCount++;
      }else{
        completed++;
      }
    })

    useEffect(()=>{
      setDisplayTodo(todos);
      
    }, [todos] )

    
    localStorage.setItem('newTodos', JSON.stringify(todos));

    

    const handleFormSubmit = (e)=>{
      e.preventDefault();
      handleSetTodo(task, description);
      setTask("");
      setdescription("");
        
    }

    const findPending = ()=>{
      setDisplayTodo(todos);
      setDisplayTodo(prev => {
        return prev.filter(todo => todo.status === false);
      })
    }

    const findDone = ()=>{
      setDisplayTodo(todos);
      setDisplayTodo(prev => {
        return prev.filter(todo => todo.status === true);
      })
    }

  return (
    <div><h1>SHOP SMART </h1>
        <h3>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div>
            <Link to='/shoping'>Visit Shopping Site</Link>
            <Link to='/'>Back to Home</Link>
        </div>
        <div className=" container w-7/12 m-auto">
            <form onSubmit={handleFormSubmit} className=" grid justify-center  w-2/5 m-auto pt-8 pb-14 pr-6 pl-6 shadow-md bg-blue-50 min-w-fit">
            <h2>Todo List</h2>
            <h4 className=" text-center font-bold mb-6">Add New Task</h4>
            <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Title</label>
            <input type="text" required className=" p-1 mb-7 border" value={task} onChange={event => setTask(event.target.value)}/>
            <button type="submit" className="border rounded-lg bg-red-400 pt-1 pb-1 font-semibold text-yellow-50">Add Task</button>
      </form>
      <div>
        <button onClick={()=> setDisplayTodo(todos)}>All {todos.length}</button>
        <button onClick={findPending}>Pending {pendingCount}</button>
        <button onClick={findDone}>Done {completed}</button>
      </div>
      <div>
        <Display todos={displayTodo}/>
      </div>
    </div>
    </div>
  )
}

export default Todo