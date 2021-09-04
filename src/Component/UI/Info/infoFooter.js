import React, { useState } from 'react'
import moment from 'moment'

const InfoFooter = (props) => {

    const [currentDate, setcurrentDate] = useState()
    setcurrentDate({ currentDate: moment().format().split("T") })
    return (
        <div className="info-footer border-top pt-1">
            <div className="right">
                <i className="las la-caret-square-left" onClick={() => props.handleDisplayOffInfo(props.InfoDetail.todo_id)}></i>
            </div>
            <div className="center">
                <span>{currentDate[0] == props.InfoDetail.time ? <p>Created Today</p> : <p>Created Yesterday</p>}</span>
            </div>
            <div className="left" onClick={() => props.handleDeleteInfo(props.InfoDetail.todo_id)}>
                <i className="las la-trash-alt"></i>
            </div>
        </div>
    )

}

export default InfoFooter