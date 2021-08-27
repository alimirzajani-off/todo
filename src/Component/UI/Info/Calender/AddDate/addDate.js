import React from 'react'
import Calender from '../calender'

export default class AddDate extends React.Component {
    state={show:false}
    // renderCalender=()=>{
    //     return <Calender/>
    // }
    render() {
        return (
            <div className="task-di task-due float-right d-flex pt-3 pb-3">
                <div className="task-di-icon">
                    <i className="las la-calendar-alt"></i>
                </div>
                <div className="task-di-txt">
                    <span>Add due date</span>
                </div>
                
            </div>
        )
    }
}