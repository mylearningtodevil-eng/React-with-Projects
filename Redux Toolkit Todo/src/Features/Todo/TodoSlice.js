import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[ {id:1,text: 'Hello World'}]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addtodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state,action)=>{
            const {id,text} = action.payload;
            const existingTodo = state.todos.find((todo)=>todo.id===id);
            if(existingTodo){
                existingTodo.text = text;
            }
            else{
                console.log("Todo not found")
            }
        }
    }
})
export const {addtodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer