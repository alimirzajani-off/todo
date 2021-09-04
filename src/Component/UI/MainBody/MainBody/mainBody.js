import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ImportantTodoList from '../../../../container/todo/todoList/importantTodoList';
import MyDayTodoList from '../../../../container/todo/todoList/myDayTodoList';
import TodoList from '../../../../container/todo/todoList/todoList';
import Assigned from '../../../../container/todo/todoList/assigned';
import AddTodo from '../../../../container/todo/addTodo/addTodo';
import MainHeader from '../MainHeader/mainHeader';
import './mainBody.css';

const MainBody = (props) => {
    return (
        <div className="main app-main" >
            <MainHeader />
            <div className="main-body">
                <AddTodo getData={props.getData} />
                <Redirect exact from="/" to="/main" />

                <Route path="/main" exact>
                    <TodoList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail} Data={props.Data} search={props.search} handleTaskImportant={props.handleTaskImportant} handleTodoChecked={props.handleTodoChecked} />
                </Route>
                <Route path="/main/toDayTask">
                    <MyDayTodoList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail} Data={props.Data} search={props.search} handleTaskImportant={props.handleTaskImportant} handleTodoChecked={props.handleTodoChecked} />
                </Route>
                <Route path="/main/important">
                    <ImportantTodoList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail} Data={props.Data} search={props.search} handleTaskImportant={props.handleTaskImportant} handleTodoChecked={props.handleTodoChecked} />
                </Route>
                <Route path="/main/assigned_to_me">
                    <Assigned />
                </Route>
            </div>
        </div>
    )
}
export default MainBody