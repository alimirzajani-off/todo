import React from 'react'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2'
import DatePickers from './Calender/DatePickers'
import Step from './todoStep/step'
import './info.css'


class Info extends React.Component {
    state = {
        CalenderValue: moment().format('jYYYY-jM-jD HH:mm:ss'),
        realDate: null,
        star: [],
    }

    render() {
        return (
            this.props.isShow ?
                <div className="info" >
                    <div className="info-body">
                        <div className="task-info">
                            <div className="task-step-header">
                                <div className="task-step-header-info float-right d-flex">
                                    <div className="task-step-header-icon" style={{ marginTop: '11px' }}>
                                        <div className="pretty p-icon p-round p-smooth checkbox-className">
                                             {/* <input type="checkbox" onClick={(e, id) => this.props.handleTodoChecked(e, this.props.InfoDetail.todo_id)} /> */}
                                            {this.props.InfoDetail.completed ? <input type="checkbox" onClick={(e, id) => this.props.handleTodoChecked(e, this.props.InfoDetail.todo_id)} checked={true} /> : <input type="checkbox" onClick={(e, id) => this.props.handleTodoChecked(e, this.props.InfoDetail.todo_id)} />}

                                            {/* <input type="checkbox" onClick={(e,id) => this.props.handleTodoChecked(e,this.props.InfoDetail.id)}/> */}
                                            <div className="state p-primary">
                                                <i className="icon mdi mdi-check"></i>
                                                <label className="label-className"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="task-step-header-txt pr-3">
                                        <span>{this.props.InfoDetail.title}</span>
                                    </div>
                                </div>
                                <div className="task-step-header-fav float-left pt-3 pl-3">
                                    <i className="lar la-star" onClick={(id) => this.props.handleTaskImportant(this.props.InfoDetail.id)} ></i>
                                </div>
                            </div>
                            <div className="add-task-step pt-3 pb-3 pr-3">
                                <Step InfoDetail={this.props.InfoDetail} getdata={this.props.getdata} Data={this.props.Data} />
                            </div>
                        </div>
                        <div className="task-info add-today-task d-flex p-3">
                            <div className="task-info-today float-right d-flex" onClick={id => this.props.handleAddToMyDay(this.props.InfoDetail.todo_id)}>
                                <div className="info-sb-icon">
                                    <i className="las la-sun"></i>
                                </div>
                                <div className="info-sb-txt pr-3">
                                    <span className="task-info-true">Add to My Day</span>
                                    <span className="task-info-false d-none">Added to My Day</span>
                                </div>
                            </div>
                            <div className="task-info-exit-icon float-left">
                                <i className="las la-times task-info-false d-none"></i>
                            </div>
                        </div>
                        <div className="task-info">
                            <div className="task-date-info p-3">
                                <div className="task-di task-remind float-right d-flex pb-3">
                                    <div className="task-di-icon">
                                        <i className="las la-bell"></i>
                                    </div>
                                    <div className="task-di-txt">
                                        <span>Remind me</span>
                                    </div>
                                </div>
                                <div className="task-di task-due float-right d-flex pt-3 pb-3" onClick={() => this.handleCalenderDisplay()}>
                                    {/* <DatePicker
                                        timePicker={false}
                                        onChange={value => this.setState({ CalenderValue: value })}
                                        value={this.state.CalenderValue}
                                    /> */}
                                    <DatePickers onChange={data => console.log(data)} />
                                </div>
                                <div className="task-ditask-repeat float-right d-flex pt-3">
                                    <div className="task-di-icon">
                                        <i className="las la-calendar-alt"></i>
                                    </div>
                                    <div className="task-di-txt">
                                        <span>Repeat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="task-info">
                            <div className="add-task-file d-flex p-3">
                                <div className="add-task-file-icon">
                                    <i className="las la-paperclip"></i>
                                </div>
                                <div className="add-task-file-txt pr-3">
                                    <input type="file" name="file" onChange={(e,id) => this.props.handleUploadFile(e,this.props.InfoDetail.todo_id)} />
                                    <span>Add file</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-info p-3">
                            <textarea className="task-info-note-input border-0" placeholder={!this.props.InfoDetail.Note ? "Write Note..." : null} value={this.props.InfoDetail.Note} onChange={(e, id) => this.props.handleInfoNote(e, this.props.InfoDetail.id)} />
                            <div className="task-info-note-txt float-right">
                                {!this.props.InfoDetail.updated ? null : <span>update a few minute ago</span>}
                            </div>
                        </div>
                    </div>
                    <div className="info-footer border-top pt-1">
                        <div className="right">
                            <i className="las la-caret-square-left" onClick={() => this.props.handleDisplayOffInfo(this.props.InfoDetail.todo_id)}></i>
                        </div>
                        <div className="center">
                            <span>Created Yesterday</span>
                        </div>
                        <div className="left" onClick={() => this.props.handleDeleteInfo(this.props.InfoDetail.todo_id)}>
                            <i className="las la-trash-alt"></i>
                        </div>
                    </div>
                </div> : null
        )
    }
}

export default Info