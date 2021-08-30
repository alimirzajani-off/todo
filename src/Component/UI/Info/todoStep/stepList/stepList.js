import React from 'react'
// import { connect } from 'react-redux'
// import { fetchList } from '../../../actions'
import axios from '../../../../../server'


class StepList extends React.Component {
    state = {
        details: [],
        search: this.props.search,
        isShow: false,
    }

    componentDidMount() {
        this.props.getData()
        console.log(this.props);
    }

  
    handleDeleteStep(id) {
        axios.delete(`https://todo-319907-default-rtdb.firebaseio.com/task_list/${this.props.InfoDetail.id}/step_title/${id}.json`)
    }

    renderTask() {
        return this.state.details.map((task) => {
            return (<div>
                <div className="task-list" key={task.id} >
                    <div className="task-name float-right">
                        <span className="list-checkbox float-right" >
                            <div className="pretty p-icon p-round p-smooth float-right checkbox-class" >
                                <input type="checkbox" defaultChecked={true} />
                                { /* <input type="checkbox" onChange={e => this.checkva(e)} defaultChecked={true} /> */}
                                <div className="state p-primary" >
                                    <i className="icon mdi mdi-check" > </i>
                                    <label className="label-className" ></label>
                                </div> </div> <p className="float-left" > {task.title} </p>
                        </span>
                    </div>
                    <div className="task-favorite" onClick={(id) => this.handleDeleteStep(task.id)}>
                        <i class="fas fa-times"></i>
                    </div>
                </div> </div>
            )
        })
    }
    render() {
        return <div>{this.renderTask()}</div>
    }
}

export default StepList

// const mapStateToProps = (state) => {
//     return ({ todos: state.todos })
// }
// export default connect(mapStateToProps, { fetchList })(TodoList)