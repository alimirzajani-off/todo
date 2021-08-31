import React from 'react'
import List from './list'
// import moment from 'moment-jalaali'
import moment from 'moment'

class MyDayTodoList extends React.Component {
    state = {
        details: [],
        todayIs: moment().format().split("T")
    }

    renderTask() {
        const dayList = this.props.Data.filter(item => {
            if (item.time == this.state.todayIs[0]||item.created_Update===this.state.todayIs) {
                return item
            }
        })
        const todosSearch = dayList.filter(item => {
            return item.title.includes(this.props.search)
        })
        var listTodo = null
        if (!this.props.search) {
            listTodo = dayList
        } else if (this.props.search) {
            listTodo = todosSearch
        }
        return listTodo.map((task) => {
            return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />
        })
    }
    render() {
        return (
            <div>
                {this.renderTask()}
            </div>
        )
    }
}

export default MyDayTodoList