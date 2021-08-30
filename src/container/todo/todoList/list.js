import React from 'react'
const List=(props)=>{
    console.log(props);
    return (<div>
        <div className="task-list"
            key={props.id}
            onClick={
                () => props.handleDisplayOnInfo()} >
            <div className="task-name float-right"
                onClick={(id) => props.handleInfoDetail(props.id)} >
                <span className="list-checkbox float-right" >
                    <div className="pretty p-icon p-round p-smooth float-right checkbox-class" >
                        <input type="checkbox" onClick={(e,id) => props.handleTodoChecked(e,props.id)} />
                        <div className="state p-primary" >
                            <i className="icon mdi mdi-check" > </i>
                            <label className="label-className" ></label>
                        </div> </div> <p className="float-left" > {props.title} </p>
                </span>
            </div>
            <div className="task-favorite" >
                <i className="lar la-star" > </i>
            </div>
        </div> </div>
    )
}

export default List