import React from 'react'

const List = (props) => {
    return (<div>
        <div className="task-list" key={props.id} onClick={(id) => props.handleInfoDetail(props.id)}>
            <div className="task-name float-right">
                <span className="list-checkbox float-right" >
                    <div className="pretty p-icon p-round p-smooth float-right checkbox-class" >
                        {props.completed ? <input type="checkbox" onClick={(e, id) => props.handleTodoChecked(e, props.id)} checked={true} /> : <input type="checkbox" onClick={(e, id) => props.handleTodoChecked(e, props.id)} />}
                        <div className="state p-primary" >
                            <i className="icon  mdi mdi-check" > </i>
                            <label className="label-className" ></label>
                        </div>
                    </div>
                    {props.completed ? <p className="float-left" style={{ textDecoration: 'line-through' }}
                        onClick={() => props.handleDisplayOnInfo(props.id)} >{props.title}</p> : <p className="float-left"
                            onClick={() => props.handleDisplayOnInfo(props.id)} > {props.title} </p>}
                </span>
            </div>
            <div className="task-favorite">
                <i className="lar la-star" onClick={(id) => props.handleTaskImportant(props.id)} />
            </div>
        </div> </div>
    )

}

export default List