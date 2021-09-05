import React from 'react'
import moment from 'moment'
import AddDate from './Calender/AddDate/addDate'
// import DatePicker from 'react-datepicker2'
// import DatePickers from './Calender/DatePickers'
import Step from './todoStep/step'
import './info.css'
import Delete from './deleteTodo'

class Info extends React.Component {
    state = {
        currentDate: moment().format().split("T")
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
                                <AddDate handleDate={this.props.handleDate} InfoDetail={this.props.InfoDetail} />
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
                        <div className="task-info add-task-file d-flex p-3">
                            <button className="add-file-button btn" aria-haspopup="true">
                                <div className="add-task-file-icon">
                                    <i className="las la-paperclip"></i>
                                </div>
                                <div className="add-task-file-txt pr-3">
                                    {/* <div> */}

                                    {/* </div>
                                <div> */}

                                    <input id="fileAttach" type="file" name="file" className="fileInput" onChange={(e, id) => this.props.handleUploadFile(e, this.props.InfoDetail.todo_id)} />
                                    <label for="fileAttach" className="fileInputLabel" ><span>Add file</span></label>

                                    {/* </div> */}
                                </div>
                            </button>

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
                            <span>{this.state.currentDate[0] == this.props.InfoDetail.time ? <p>Created Today</p> : <p>Created on {moment(this.props.InfoDetail.time).format("dddd, MMMM D")}</p>}</span>
                        </div>
                        <div className="left">
                            <Delete InfoDetail={this.props.InfoDetail} getData={this.props.getData} displayOffInfo={this.props.displayOffInfo} />
                        </div>
                    </div>
                    {/* <InfoFooter InfoDetail={this.props.InfoDetail} handleDisplayOffInfo={this.props.handleDisplayOffInfo} handleDeleteInfo={this.props.handleDeleteInfo} /> */}
                </div> : null
        )
    }
}

export default Info