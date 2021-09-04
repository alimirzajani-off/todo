import React from 'react'
import moment from 'moment-jalaali'
import './addTodo.css'
import dataService from '../../../data-service'
class AddTodo extends React.Component {
    state = {
        task_Value: '',
        task_Important:false,
        // task_created:moment().format('jYYYY-jM-jD HH:mm:ss'),
        // task_Date_Created:moment().format('jYYYY-jM-jD')
    }
    onChangeHandler(e) {
        this.setState({ task_Value: e.target.value })
    }

    onSubnitHandler(e) {
        this.addTaskHandler()
        e.preventDefault()
    }

addTaskHandler(){
    const data = {
        title: this.state.task_Value,
        content:this.state.task_Value,
        important:this.state.task_Important,
        // addedDateTime:this.state.task_created,
        // added:{
        //     task_Date_Created:this.state.task_Date_Created,
        // },
        // task_updated:null,
        done:false,
        note:'dfsdfsخهنخنبخینیبنخنسخنحخیبنحرخنحخسینdf'
    }

    dataService.create(data).then(res=> {
        console.log(res);
        if (res.status==201){
            this.props.getData();
            this.setState({task_Value:''})
        }
    }).catch(e=>console.log(e))

}

    render() {
        return (
            <div className="add-task d-flex">
                <form className="add-task-form" onSubmit={e => this.onSubnitHandler(e)}>
                    <span className="ui add-task-info-input add-task-icon transparent right icon input sb-icon">
                        <i className="las la-plus ass-task-plus"></i>
                        <span className="ass-task-circle d-none" onClick={() => this.addTaskHandler()}>Add</span>
                        <input type="text" placeholder="add task" aria-label="add task" className="ui right addtask-placeholder" value={this.state.task_Value} onChange={e => this.onChangeHandler(e)} />
                    </span>
                </form>

            </div>
        )
    }
}

export default AddTodo