import React, { createContext, useContext, useState } from 'react'





export const  todosContext = createContext();

export const TodosProvider = (props)=>{

    const localTodo = JSON.parse(localStorage.getItem('newTodos')) || [];
    const [todos, setTodos] = useState(localTodo);
    
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

    }


    const handleDelete = (id)=>{
        setTodos(prev => {
            const newVal = prev.filter(prod => prod.id !== id);
            return newVal;
        })
        
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

    }



    return(
        <todosContext.Provider value={{todos, handleSetTodo, todos, handleDelete, handleStatus, }} >
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