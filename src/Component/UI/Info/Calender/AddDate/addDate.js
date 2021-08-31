import React from 'react'
import './addDate.css'
class AddDate extends React.Component {
    render() {
        return (
            <span className="task-di task-due float-right d-flex pt-3 pb-3" style={{alignItems:'center'}}>
                <div className="task-di-icon">
                    <i className="las la-calendar-alt"></i>
                </div>
                <div className="task-di-txt">
                    <span>Add due date</span>
                </div>
                <input type="date" className="input-Date" onChange={e=>this.props.handleDate(e)} value={this.props.InfoDetail.time}/>
            </span>
        )
    }
}

export default AddDate