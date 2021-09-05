import React from 'react'
import List from './list'
import moment from 'moment-jalaali'

class ImportantTodoList extends React.Component {
    state = {
        details: [],
        todayIs: moment().format('jYYYY-jM-jD'),
        // checkComplete: false

    }

    // checkCompleteList() {
    //     const check = this.props.Data.filter(item => {
    //         if (item.completed == true) {
    //             this.setState({ checkComplete: true })
    //         }
    //     })
    // }

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
        this.checkCompleteList()
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
            {/* {!this.state.checkComplete ? null:<h4>compeletd</h4> } */}
            <h4>completed</h4>
            {this.renderTaskuncheck()}
        </div>
    }
}
export default ImportantTodoList