import React from 'react'

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
            return (<div>
                <div className="task-list" key={task.todo_id} onClick={()=>this.props.handleInfoDetail(task.todo_id)}>
                    <div className="task-name float-right">
                        <span className="list-checkbox float-right" >
                            <div className="pretty p-icon p-round p-smooth float-right checkbox-class" >
                                {task.completed ? <input type="checkbox" onClick={(e, id) => this.props.handleTodoChecked(e, task.todo_id)} checked={true} /> : <input type="checkbox" onClick={(e, id) => this.props.handleTodoChecked(e, task.todo_id)} />}
                                <div className="state p-primary" >
                                    <i className="icon  mdi mdi-check" > </i>
                                    <label className="label-className" ></label>
                                </div>
                            </div>
                            {/* <p className="float-left" style={{textDecoration:'line-through'}}>{task.title}</p> */}
                            {task.completed ? <p className="float-left" style={{ textDecoration: 'line-through' }} 
                        onClick={()=>this.props.handleDisplayOnInfo(task.todo_id)} >{task.title}</p> : <p className="float-left" 
                        onClick={()=>this.props.handleDisplayOnInfo(task.todo_id)} > {task.title} </p>}
                        </span>
                    </div>
                    <div className="task-favorite">
                        <i className="lar la-star" onClick={(id) => this.props.handleTaskImportant(task.todo_id)} />
                    </div>
                </div> </div>
            )
        })
    }
    render() {
        return <div>{this.renderTask()}</div>
    }
}

export default TodoList