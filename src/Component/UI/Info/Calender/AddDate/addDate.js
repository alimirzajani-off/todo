import React from 'react'
import './addDate.css'

class AddDate extends React.Component {
    render() {
        return (
            <span className="task-di task-due float-right d-flex pt-3 pb-3" style={{ alignItems: 'center' }}>
                <div className="dropdown">
                    <button className="btn add-date-btn" style={{ padding: 0 }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="task-di-icon">
                            <i className="las la-calendar-alt"></i>
                            <span className="task-di-txt ">Add due date</span>
                        </div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <li class="divider"></li>
                        <input type="date" className="input-Date" onChange={e => this.props.handleDate(e)} value={this.props.InfoDetail.time} />
                    </div>
                </div>
            </span>
        )
    }
}

export default AddDate