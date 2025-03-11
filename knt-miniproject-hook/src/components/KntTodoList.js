import { useEffect, useReducer } from "react";
import { KntTodoReducer } from "../reducers/KntTodoReducer";
import KntAddTodo from "./KntAddTodo";
import KntTodoItem from "./KntTodoItem";

export default function KntTodoList() {
    const [todos, dispatch] = useReducer(KntTodoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  return (
    <div>
        <h2>Danh sách công việc</h2>
        <KntAddTodo dispatch={dispatch} />
        <ul>
            {todos.map(todo => (
                <KntTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    </div>
  )
}
