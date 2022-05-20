// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todoItem">
      <p className="text">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
