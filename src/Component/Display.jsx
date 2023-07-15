import React from 'react'
import { useTodos } from '../context/Todos'

const Display = ({todos}) => {

    const {handleDelete, handleStatus} = useTodos();

  return (
    <div>
        <table>
            <tr>
                <th>Task</th>
                <th>status</th>
                <th>Action</th>
                <th>Delete</th>
            </tr>
            {
                todos.map((todo)=>{
                    return(
                        <tr>
                            <td>{todo.task}</td>
                            <td>{todo.status? "Done" : "Pending"}</td>
                            <td>Mark Done<input onChange={()=> {handleStatus(todo.id)}} checked={todo.status} type="checkbox" /></td>
                            <td><button onClick={()=> {handleDelete(todo.id)} }>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Display