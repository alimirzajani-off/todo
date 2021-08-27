import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AddTodo from '../../../../container/todo/addTodo/addTodo';
import MyDayTodoList from '../../../../container/todo/todoList/myDayTodoList';
import TodoList from '../../../../container/todo/todoList/todoList';
import { createBrowserHistory } from 'history';
import './mainBody.css';
const history = createBrowserHistory();

const MainBody = (props) => {
    // return (
    //     <Router>
    //         <div className="main-body">
    //             <div className="add-task d-flex">
    //                 <AddTodo />
    //             </div>
    //             <Switch>
    //                 <Route path="/" exact>
    //                     <TodoList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail} Data={props.Data} search={props.search} />
    //                 </Route>
    //                 <Route path="/toDayTask">
    //                     <myDayTodoList />
    //                 </Route>
    //             </Switch>
    //         </div>
    //     </Router>
    // )

    return (
        <Router history={history}>
            <div className="main-body">
                <div className="add-task d-flex">
                    <AddTodo />
                </div>
                <Switch>
                    <Route path="/">
                        <TodoList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail} Data={props.Data} search={props.search} />
                    </Route>
                    <Route path="/toDayTask" >
                        <MyDayTodoList />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}
export default MainBody