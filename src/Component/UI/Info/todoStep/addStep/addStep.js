import React from 'react'
import axios from '../../../../../server'
import moment from 'moment-jalaali'
import dataService from '../../../../../data-service'
// import './addTodo.css'
class AddStep extends React.Component {
    state = {
        step_Value: '',
    }
    onChangeHandler(e) {
        this.setState({ step_Value: e.target.value })
    }

    onSubnitHandler(e) {
        const data = {
            step: {
                step_title: this.state.step_Value ? this.state.step_Value : null
            }
        }
        // axios.post(`/task_list/${this.props.InfoDetail.id}/step_title.json`, data).then(this.setState({ step_Value: '' }))
        dataService.update(this.props.InfoDetail.todo_id, data).then(res => console.log(res))
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubnitHandler(e)}>
                    <div className="ui add-task-info-input add-task-icon transparent right icon input sb-icon d-flex">
                        <i className="las la-plus ass-task-plus" onClick={e => this.onSubnitHandler(e)}></i>
                        <i className="las la-circle ass-task-circle d-none"></i>
                        <input type="text" placeholder="add task" className="ui right add-task-step-txt" value={this.state.task_Value} onChange={e => this.onChangeHandler(e)} />
                    </div>
                    {/* <div className="ui add-task-info-input add-task-icon transparent right icon input sb-icon add-task-step-icon">
                        <i className="las la-plus add-step-plus"></i>
                        <i className="las la-circle add-step-circle d-none"></i>
                        <input type="text" placeholder="add task" className="ui right" value={this.state.task_Value} onChange={e => this.onChangeHandler(e)} />
                    </div> */}
                    {/* <div className="add-task-step-txt pr-3">
                        <span>Add step</span>
                    </div> */}
                </form>

            </div>
        )
    }
}

export default AddStep