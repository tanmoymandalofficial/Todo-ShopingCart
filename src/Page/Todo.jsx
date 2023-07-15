import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTodos } from "../context/Todos";
import Display from "../Component/Display";

const Todo = () => {
  const [task, setTask] = useState("");
  const [description, setdescription] = useState("");

  const { handleSetTodo, todos } = useTodos();

  const [displayTodo, setDisplayTodo] = useState([]);

  var pendingCount = 0;
  var completed = 0;
  todos.map((todo) => {
    if (todo.status === false) {
      pendingCount++;
    } else {
      completed++;
    }
  });

  useEffect(() => {
    setDisplayTodo(todos);
  }, [todos]);

  localStorage.setItem("newTodos", JSON.stringify(todos));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSetTodo(task, description);
    setTask("");
    setdescription("");
  };

  const findPending = () => {
    setDisplayTodo(todos);
    setDisplayTodo((prev) => {
      return prev.filter((todo) => todo.status === false);
    });
  };

  const findDone = () => {
    setDisplayTodo(todos);
    setDisplayTodo((prev) => {
      return prev.filter((todo) => todo.status === true);
    });
  };

  return (
    <div>
      <h1 className=" text-center text-4xl font-bold mt-6 p-2 ">
        SHOP SMART{" "}
      </h1>
      <h3 className=" text-center text-xs font-semibold">
        Your Ultimate Shopping Destination with a Todo List Feature
      </h3>
      <div className=" text-center p-5 my-5">
        <Link
          className=" rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5"
          to="/shoping"
        >
          Visit Shopping Site
        </Link>
        <Link
          className=" rounded-full bg-orange-400 px-6 font-bold text-white py-3"
          to="/"
        >
          Back to Home
        </Link>
      </div>
      <div className=" flex justify-center bg-cyan-500  font-bold mb-10 "><h1 className=" font-bold text-2xl p-2 text-white">Todo List</h1></div>
      <div className=" w-10/12 m-auto flex justify-between gap-8 p-6 mb-16 shadow-grey-300 shadow  ">
        {/* <div className="m-auto border"> */}
          <form
            onSubmit={handleFormSubmit}
            className=" grid justify-center pt-8 pb-14 pr-6 pl-6 w-4/12 shadow-md h-min bg-blue-50 min-w-fit"
          >
            <h4 className=" text-center font-bold mb-6">Add New Todo</h4>
            <label
              htmlFor=""
              className=" text-sm font-semibold mb-1 text-slate-500"
            >
              Todo Name
            </label>
            <input
              type="text"
              required
              className=" p-1 mb-7 border"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            <button
              type="submit"
              className="border rounded-lg bg-red-400 pt-1 pb-1 font-semibold text-yellow-50"
            >
              Add Todo
            </button>
          </form>
          {/* </div> */}
        <div className=" w-8/12">
          <div className="mb-4">
            <b>Filter : </b>
            <button className=" rounded-md bg-blue-500 px-4 py-1 mr-3 text-sm font-bold text-white" onClick={() => setDisplayTodo(todos)}>
              Total {todos.length}
            </button>
            <button className=" rounded-md bg-orange-500 px-4 py-1 mr-3 text-sm font-bold text-white" onClick={findPending}>Pending {pendingCount}</button>
            <button className=" rounded-md bg-green-700 px-4 py-1 mr-3 text-sm font-bold text-white" onClick={findDone}>Completed {completed}</button>
          </div>
          <div>
            <Display todos={displayTodo} />
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Todo;
