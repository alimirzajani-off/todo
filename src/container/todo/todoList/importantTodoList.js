import React from 'react'
import List from './list'
import moment from 'moment-jalaali'

class ImportantTodoList extends React.Component {
    state = {
        details: [],
        todayIs: moment().format('jYYYY-jM-jD')
    }

    renderTask() {
        const importantList = this.props.Data.filter(item => {
            if (item.important) {
                return item
            }
        })
        const todosSearch = importantList.filter(item => {
            return item.title.includes(this.props.search)
        })
        console.log(importantList);
        var listTodo = null
        if (!this.props.search) {
            listTodo = importantList
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
        const importantList = this.props.Data.filter(item => {
            if (item.important) {
                return item
            }
        })
        const todosSearch = importantList.filter(item => {
            return item.title.includes(this.props.search)
        })
        console.log(importantList);
        var listTodo = null
        if (!this.props.search) {
            listTodo = importantList
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
            <h4>compeletd</h4>
            {this.renderTaskuncheck()}
        </div>
    }
}
export default ImportantTodoList