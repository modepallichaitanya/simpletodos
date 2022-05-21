import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class todoPage extends Component {
  state = {todoItem: initialTodosList}

  onDelete = id => {
    const {todoItem} = this.state
    const updateTodoList = todoItem.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoItem: updateTodoList})
  }

  render() {
    const {todoItem} = this.state
    return (
      <div className="todo-page">
        <div className="todo-content">
          <h1 className="heading">Simple Todos </h1>
          <ul className="todo-list">
            {todoItem.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default todoPage
