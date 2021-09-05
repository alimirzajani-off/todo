import React from 'react'
import List from './list'
// import moment from 'moment-jalaali'
import moment from 'moment'

class MyDayTodoList extends React.Component {
    state = {
        details: [],
        todayIs: moment().format().split("T"),
        // checkComplete: false
    }

    // componentDidMount() {
    //     this.checkCompleteList()
    // }

    // checkCompleteList() {
    //     const check = this.props.Data.filter(item => {
    //         if (item.completed == true) {
    //             this.setState({ checkComplete: true })
    //         }
    //     })
    // }

    renderTask() {
        console.log(this.state.checkComplete);
        const dayList = this.props.Data.filter(item => {
            if (item.time == this.state.todayIs[0] || item.created_Update === this.state.todayIs) {
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
            if (!task.completed) {
                return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />
            }
        })
    }
    renderTaskuncheck() {
        const dayList = this.props.Data.filter(item => {
            if (item.time == this.state.todayIs[0] || item.created_Update === this.state.todayIs) {
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
            if (task.completed) {
                return <List id={task.todo_id} title={task.title} completed={task.completed} handleDisplayOnInfo={this.props.handleDisplayOnInfo} handleInfoDetail={this.props.handleInfoDetail} handleTodoChecked={this.props.handleTodoChecked} />
            }
        })
    }

    render() {
        return <div>
            {this.renderTask()}
            {/* {!this.state.checkComplete ? null:<h4>compeletd</h4> } */}
            <h4>compeletd</h4>
            {this.renderTaskuncheck()}
        </div>
    }
}

export default MyDayTodoList