import React from 'react'
import moment from 'moment-jalaali'

class MyDayTodoList extends React.Component {
    state = {
        details: [],
        todayIs: moment().format('jYYYY-jM-jD')
    }

    renderTask() {
        const dayList = this.props.Data.filter(item => {
            if (item.Date_Created === this.state.todayIs||item.created_Update===this.state.todayIs) {
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
            return (<>
                <div className="task-list"
                    key={task.id}
                    onClick={
                        () => this.props.handleDisplayOnInfo()} >
                    <div className="task-name float-right"
                        onClick={
                            () => this.props.handleInfoDetail(task.id)} >
                        <span className="list-checkbox float-right" >
                            <div className="pretty p-icon p-round p-smooth float-right checkbox-class" >
                                <input type="checkbox" onClick={(e,id) => this.handleTodoChecked(e,task.d)} />
                                <div className="state p-primary" >
                                    <i className="icon mdi mdi-check" > </i>
                                    <label className="label-className" ></label>
                                </div> </div> <p className="float-left" > {task.title} </p>
                        </span>
                    </div>
                    <div className="task-favorite" >
                        <i className="lar la-star" > </i>
                    </div>
                </div> </>
            )
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