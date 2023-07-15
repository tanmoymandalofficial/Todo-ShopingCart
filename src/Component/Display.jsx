import React from 'react'
import { useTodos } from '../context/Todos'

const Display = ({todos}) => {

    const {handleDelete, handleStatus} = useTodos();

  return (
    <div className='flex w-full jus'>
        <table className=' w-full text-left'>
            <tr className=' shadow-sm '>
                <th className=' w-6/12 py-2'>Task</th>
                <th className=' w-2/12'>status</th>
                <th className=' w-3/12'>Action</th>
                <th className=' w-1/12'>Delete</th>
            </tr>
            {
                todos.map((todo)=>{
                    return(
                        <tr className=' shadow-sm ' >
                            <td className=' font-semibold p-2'>{todo.task}</td>
                            <td>{todo.status? "Done" : "Pending"}</td>
                            <td>{todo.status? 'Completed ':'Mark Done '}<input disabled={todo.status} onChange={()=> {handleStatus(todo.id)}} checked={todo.status} type="checkbox" /></td>
                            <td ><button className=' text-red-500 font-semibold' visible='false' onClick={()=> {handleDelete(todo.id)} }>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Display