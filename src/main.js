import React, { useEffect, useState, useRef } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import MainHeader from './Component/UI/MainBody/MainHeader/mainHeader';
import Header from './Component/UI/NavBar/header';
import SideMenu from './Component/UI/SideMenu/sideMenu';
import Info from './Component/UI/Info/info';
import moment from 'moment-jalaali'
import AddTodo from './container/todo/addTodo/addTodo';
import TodoList from './container/todo/todoList/todoList';
import MyDayTodoList from './container/todo/todoList/myDayTodoList';
import { createBrowserHistory } from 'history';
import ImportantTodoList from './container/todo/todoList/importantTodoList';
import Assigned from './container/todo/todoList/assigned';
import dataService from './data-service';
import './mainBody.css';
const history = createBrowserHistory();


const MainPage = () => {

    const [Data, setData] = useState([])
    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            getData();
        }
        mounted.current = true;
    }, [Data])
    const getData = () => {
        dataService.getAll()
            .then(response => {
                console.log(response);
                const Datas = []
                for (const item in response.data) {
                    if (Object.hasOwnProperty.call(response.data, item)) {
                        const element = response.data[item];
                        // Datas.push({ id: item, title: element.task_title, isShow: null, Note: element.Note, created: element.task_created, updated: element.task_updated, Date_Created: element.task_Date_Created, important: element.task_important, created_Update: element.created_Update, completed: element.completed })
                        Datas.push({ tags: item, id: item, todo_id: element.id, userId: element.userId, title: element.title, Note: element.Note, created: element.addedDateTime, updated: element.task_updated, Date_Created: element.task_Date_Created, important: element.important, created_Update: element.created_Update, completed: element.done, file: element.file })
                    }
                }
                setData(Datas)
            }).catch(e => console.log(e))
    }

    // Data.map(item=>console.log(item.created.format('YYYY-M-D')))

    const [isShow, setisShow] = useState(false)
    const handleDisplayOnInfo = () => {
        if (!isShow) {
            setisShow(true);
        }
    }

    const handleDisplayOffInfo = (id) => {
        if (isShow) {
            setisShow(false)
            const InfoUpdate = { title: InfoDetail.title, Note: InfoDetail.Note, created: InfoDetail.created, task_updated: InfoDetail.updated }
            dataService.updatePatch(id, InfoUpdate).then(res => {
                if (res.status == 201) {
                    getData();
                }
            }).catch(e => console.log(e))

        }
    }
    const [InfoDetail, setInfoDetail] = useState(null)
    const handleInfoDetail = (id) => {
        const trueInfo = Data.filter(item => item.todo_id === id)
        trueInfo.forEach(element => setInfoDetail({ title: element.title, id: element.id, todo_id: element.todo_id, Note: element.Note, created: element.created, updated: element.updated, important: element.important }))
    }

    const handleInfoNote = (e, id) => {
        const Note = e.target.value
        const trueInfo = Data.filter(item => item.todo_id === id)
        trueInfo.forEach(element => setInfoDetail({ title: element.title, id: element.id, Note: Note, updated: moment().format('jYYYY-jM-jD HH:mm:ss') }))
    }

    const handleDeleteInfo = (id) => {
        dataService.delete(id).then(res => {
            console.log(res);
            if (res.status == 204) {
                setisShow(false)
                getData();
            }
        }).catch(e => console.log(e))
    }


    const handleTaskImportant = (id) => {
        const trueInfo = Data.filter(item => item.id === id)
        var importanted = null
        trueInfo.forEach(el => importanted = el.important)
        const InfoUpdate = { task_important: !importanted }
        dataService.updatePatch(id, InfoUpdate).then(res => {
            if (res.status == 201) {
                getData();
            }
        }).catch(e => console.log(e))
    }

    const handleAddToMyDay = (id) => {
        const InfoUpdate = { created_Update: moment().format('jYYYY-jM-jD') }
        dataService.updatePatch(id, InfoUpdate).then(res => {
            if (res.status == 201) {
                getData();
            }
        }).catch(e => console.log(e))
    }

    const [search, setsearch] = useState(null)
    const handleSearchProps = (e) => {
        setsearch(e.target.value.toLowerCase())
    }

    const handleTodoChecked = (e, id) => {
        const InfoUpdate = { completed: e.target.checked }
        dataService.updatePatch(id, InfoUpdate).then(res => {
            if (res.status == 204) {
                getData();
            }
        }).catch(e => console.log(e))
    }

    const handleUploadFile = (e, id) => {
        console.log(e);
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            console.log(e);
            const fil = { todoId: id, path: e.target.result, size: files[0].size }
            dataService.upload(id, fil).then(res => console.log(res)).catch(e => console.log(e))
        }
    }

    return (
        <Router history={history}>

            <div className="App">
                <header className="App-header" >
                    <Header handleSearchProps={handleSearchProps} />
                </header>
                <body className="main" >
                    <div className="container-fluid" >
                        <div className="row" >
                            <SideMenu />
                            <div className="main" >
                                <MainHeader />
                                <div className="main-body">
                                    <div className="add-task d-flex">
                                        <AddTodo getData={getData} />
                                    </div>
                                    <Switch>
                                        <Route path="/main" exact>
                                            <TodoList handleDisplayOnInfo={handleDisplayOnInfo} handleInfoDetail={handleInfoDetail} Data={Data} search={search} handleTaskImportant={handleTaskImportant} handleTodoChecked={handleTodoChecked} />
                                        </Route>
                                        <Route path="/main/toDayTask">
                                            <MyDayTodoList handleDisplayOnInfo={handleDisplayOnInfo} handleInfoDetail={handleInfoDetail} Data={Data} search={search} handleTaskImportant={handleTaskImportant} handleTodoChecked={handleTodoChecked} />
                                        </Route>
                                        <Route path="/main/important">
                                            <ImportantTodoList handleDisplayOnInfo={handleDisplayOnInfo} handleInfoDetail={handleInfoDetail} Data={Data} search={search} handleTaskImportant={handleTaskImportant} handleTodoChecked={handleTodoChecked} />
                                        </Route>
                                        <Route path="/main/assigned_to_me">
                                            <Assigned />
                                        </Route>
                                    </Switch>
                                </div>
                                {/* <MainBody handleDisplayOnInfo={handleDisplayOnInfo}
                                    handleInfoDetail={handleInfoDetail} search={search} /> */}
                            </div>

                            <Info isShow={isShow}
                                handleDisplayOffInfo={handleDisplayOffInfo}
                                InfoDetail={InfoDetail}
                                handleInfoNote={handleInfoNote}
                                handleDeleteInfo={handleDeleteInfo}
                                handleTaskImportant={handleTaskImportant}
                                handleAddToMyDay={handleAddToMyDay}
                                handleTodoChecked={handleTodoChecked}
                                handleUploadFile={handleUploadFile}
                                getData={getData}
                                Data={Data}
                            />
                        </div>
                    </div>
                </body>
            </div>
        </Router>
    );
}

export default MainPage