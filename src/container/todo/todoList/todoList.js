import React from 'react'
import List from './list'
class TodoList extends React.Component {
    state = {
        details: [],
        search: this.props.search,
        // checkComplete: false
    }

    // componentDidMount() {

    // }

    // checkCompleteList() {
    //     const check = this.props.Data.filter(item => {
    //         if (item.completed == true) {
    //             this.setState({ checkComplete: true })
    //         }
    //     })
    // }

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
            if (!task.completed) {
                return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />
            }
        })
    }
    renderTaskuncheck() {

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
            if (task.completed) {
                return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />
            }
        })
    }
    render() {
        return <div>{this.renderTask()}
            {/* {!this.state.checkComplete ? null:<h4>compeletd</h4> } */}
            <h4>compeletd</h4>
            {this.renderTaskuncheck()}
        </div>
    }
}

export default TodoList