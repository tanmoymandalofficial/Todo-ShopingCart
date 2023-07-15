import React, { createContext, useContext, useState } from 'react'





export const  todosContext = createContext();

export const TodosProvider = (props)=>{

    const localTodo = JSON.parse(localStorage.getItem('newTodos')) || [];
    const [todos, setTodos] = useState(localTodo);
    const [allTask, setAllTask] = useState(todos);
    
    const handleSetTodo = (task, description)=>{

        setTodos(prev => {
            const newTodo = [{
                id: Math.random().toString(),
                task,
                description,
                status: false,
            }, ...prev]

            return newTodo;
        })

        setAllTask(todos);
        return;
    }

    const handleDelete = (id)=>{
        setTodos(prev => {
            const newVal = prev.filter(prod => prod.id !== id);
            return newVal;
        })
        
        findDone();
    }

    const handleStatus = (id)=>{
        setTodos((prev)=>{
            const newTasks = prev.map((task)=>{
                if(task.id === id){
                    return {...task, status: !task.status}
                }
                return task;
            })
            return newTasks;
        })

       
        findDone();
    }

    const findPending = ()=>{
        setAllTask(todos);
        setAllTask(prev => {
            const pending = prev.filter((task)=> task.status === false);
            return pending;
        })
    }
    const findDone = ()=>{
        setAllTask(todos);
        setAllTask(prev => {
            const pending = prev.filter((task)=> task.status === true);
            return pending;
        })
    }

    return(
        <todosContext.Provider value={{todos, handleSetTodo, todos, handleDelete, handleStatus, findPending, findDone, allTask, setAllTask}} >
            {props.children}
        </todosContext.Provider>
    )
}


export function useTodos(){
    const todoContextValue = useContext(todosContext);
    if(!todoContextValue){
       return console.error("getting new error")
    }
    else{
        // console.log("helow world")
        return todoContextValue;
    }
   

}