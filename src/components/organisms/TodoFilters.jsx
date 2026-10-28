// src/components/organisms/TodoFilters.jsx
import Button from '../atoms/Button'
import './TodoFilters.css'

const options = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'done', label: 'Done' },
]

export default function TodoFilters({ filter, onChange }) {
    return (
    <div className="todo-filters">
        {options.map((option) => (
        <Button
            key={option.value}
            variant={filter === option.value ? 'primary' : 'secondary'}
            onClick={() => onChange(option.value)}
        >
            {option.label}
        </Button>
        ))}
    </div>
    )
}