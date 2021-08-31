import React from 'react'
import List from './list'
class TodoList extends React.Component {
    state = {
        details: [],
        search: this.props.search,
        isShow: false,
    }

    renderTask() {
        const todosSearch = this.props.Data.filter(item => {
            return item.title.includes(this.props.search)
        })
        var listTodo = null
        if (!this.props.search) {
            listTodo = this.props.Data
        } else if (this.props.search) {
            listTodo = todosSearch
        }
        return listTodo.map((task) => {
            return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />

        })
    }
    render() {
        return <div>{this.renderTask()}</div>
    }
}

export default TodoList