// src/components/pages/TodosPage.jsx
import { useState } from 'react'
import TodoTemplate from '../templates/TodoTemplate'
import AddTodoForm from '../molecules/AddTodoForm'
import TodoList from '../organisms/TodoList'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'

const initialTodos = [
    { id: 1, text: 'Learn JSX', done: true },
    { id: 2, text: 'Practice props', done: false },
]

export default function TodosPage() {
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = (text) =>
    setTodos([...todos, { id: crypto.randomUUID(), text, done: false }])

    const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

    const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id))

    const deleteCompleted = () => setTodos(todos.filter((t) => !t.done))

    const pending = todos.filter((t) => !t.done).length   // derived data: NOT state
    const hasCompleted = todos.some((t) => t.done)        // derived data: NOT state

    return (
    <TodoTemplate
        header={<h1>My tasks, there are <Badge number={pending}/> tasks left.</h1>}
        form={<AddTodoForm onAdd={addTodo} />}
    >
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        {hasCompleted && (
        <Button variant="secondary" onClick={deleteCompleted}>
            Delete completed
        </Button>
        )}
    </TodoTemplate>
    )
}