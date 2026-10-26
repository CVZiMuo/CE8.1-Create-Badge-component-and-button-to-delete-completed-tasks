// src/components/molecules/TodoItem.jsx
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'
import './TodoItem.css'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? 'todo-item--done' : ''}`}>
      <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)} />
      <span className="todo-item__text">{todo.text}</span>
      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  )
}
