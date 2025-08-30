import React, { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItems";

const App = () => {
  /* ------- Setting Todo's Array ------- */
  // First we set the todo array to empty
  const [todos,setTodos] = useState([]);
  /* ------- Adding Todo------- */
  /*
  For adding todo first we get the prevevious value beacuse if we don't get that then it will make todo array equal to that simple element and we don't want that. So, we set the todo's id that we want to create to current date then we get the whole todo. Beacuse it is an object having three values of id, todo and completed so we get the whole three things.
  */
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(),...todo},...prev])
  }
  /* ------- Updating Todo ------- */
  /*
  Then we want to update that todo for updating zthat todo we get the id and todo. And we say that if current element's id is equal to the todo's that we want to make then simply return us that whole too and we want to add changes in that todo and if the id of the current element is not equal to the id of the todo that we want to update then simply return the previous element.
  */
  const updateTodo = (todo,id)=>{
    setTodos((prev)=>{prev.find((todoEl)=>todoEl.id===id?{...todoEl,title: todo}:todoEl)})
  }
  /* ------- Deleting Todo ------- */
  /*
    For deleting todo we get the id of the todo that we want to delete and we fileter the todo that's id matches with the todo's id that we want to delete so that we would be able to delete that todo.
  */
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  /* ------- Toggling Todo ------- */
  /*
  Toggling todo simply means changing the css property according to change in a state for example we say that if the todo is active then change the css. And that completed property is inside the todo. So we first get all the previous todos and we say that for each todo if the id matches with the id that we want to toggle then simple return the whole todo but change the completed property. And if it is not then simply return the whole current todo.
  */
  const toggleComplete= (id)=>{
    setTodos((prev)=>prev.map(prevTodo=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  /* ------- Getting values from local storage ------- */
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos&&todos.length>0){
      setTodos(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,toggleComplete,deleteTodo,addTodo,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  );
};

export default App;
