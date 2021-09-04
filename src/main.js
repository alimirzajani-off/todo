import React, { useEffect, useState, useRef } from 'react';
import MainBody from './Component/UI/MainBody/MainBody/mainBody';
import SideMenu from './Component/UI/SideMenu/sideMenu';
import Header from './Component/UI/NavBar/header';
import Info from './Component/UI/Info/info';
import moment from 'moment'
import dataService from './data-service';
import './mainBody.css';


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
                        const createdArray = element.addedDateTime.split("T")
                        // Datas.push({ id: item, title: element.task_title, isShow: null, Note: element.Note, created: element.task_created, updated: element.task_updated, Date_Created: element.task_Date_Created, important: element.task_important, created_Update: element.created_Update, completed: element.completed })
                        Datas.push({ tags: item, id: item, todo_id: element.id, userId: element.userId, title: element.title, Note: element.Note, created: element.addedDateTime, updated: element.task_updated, Date_Created: element.task_Date_Created, important: element.important, created_Update: element.created_Update, completed: element.done, file: element.file, time: createdArray[0] })
                    }
                }
                setData(Datas)
            }).catch(e => console.log(e))
    }

    const [search, setsearch] = useState(null)
    const handleSearchProps = (e) => {
        setsearch(e.target.value.toLowerCase())
    }

    const [isShow, setisShow] = useState(false)
    const handleDisplayOnInfo = () => {
        if (!isShow) {
            setisShow(true);
        }
    }

    const displayOffInfo = () => {
        if (isShow) {
            setisShow(false)
        }
    }

    const handleDisplayOffInfo = (id) => {
        if (isShow) {
            setisShow(false)
            // // const InfoNote = { Note: }
            // dataService.updatePatch(id, InfoUpdate).then(res => {
            //     if (res.status == 204) {
            //         getData();
            //     }
            // }).catch(e => console.log(e))

        }
    }

    const current = moment().format().split("T")
    const [InfoDetail, setInfoDetail] = useState(null)
    const handleInfoDetail = (id) => {
        const trueInfo = Data.filter(item => item.todo_id === id)
        trueInfo.forEach(element => {
            setInfoDetail({ title: element.title, id: element.id, todo_id: element.todo_id, Note: element.Note, created: element.created, updated: element.updated, important: element.important, time: element.time, completed: element.completed })
        })
    }

    const handleInfoNote = (e, id) => {
        const Note = e.target.value
        const InfoUpdate = { Note: Note, updated: moment().format('jYYYY-jM-jD HH:mm:ss')}
        dataService.updatePatch(id, InfoUpdate).then(res => {
            if (res.status == 201) {
                getData();
            }
        })
        const trueInfo = Data.filter(item => item.todo_id === id)
        trueInfo.forEach(element => setInfoDetail({ Note:element.Note, updated: moment().format('jYYYY-jM-jD HH:mm:ss') }))
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
            console.log(res);
            if (res.status == 204) {
                getData();
            }
        }).catch(e => console.log(e))
    }


    const handleTodoChecked = (e, id) => {
        const InfoUpdated = { completed: e.target.checked }
        dataService.updatePatch(id, InfoUpdated).then(res => {
            if (res.status == 204) {
                getData();
            }
        }).catch(e => console.log(e))
    }

    const handleDate = (e) => {
        console.log(e.target.value);
    }

    const handleUploadFile = (e, id) => {
        console.log(id)
        console.log(e);
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        const formData = new FormData();
        formData.append('file', files[0])
        console.log(formData)

        dataService.upload(id, formData).then(res => console.log(res)).catch(e => console.log(e))
        reader.onload = (e) => {
            console.log(e);
            // const fil = { todoId: id, path: e.target.result, size: files[0].size }
            /// dataService.upload(id, formData).then(res => console.log(res)).catch(e => console.log(e))
        }
    }

    return (
        <div className="App main">
            <header className="App-header" >
                <Header handleSearchProps={handleSearchProps} />
            </header>
            <div className="body">
                <div className="container-fluid" >
                    <div className="row" >
                        <SideMenu />
                        <MainBody handleDisplayOnInfo={handleDisplayOnInfo}
                            handleTaskImportant={handleTaskImportant}
                            handleTodoChecked={handleTodoChecked}
                            handleInfoDetail={handleInfoDetail}
                            getData={getData}
                            search={search}
                            Data={Data}
                        />
                        <Info isShow={isShow}
                            handleDisplayOffInfo={handleDisplayOffInfo}
                            InfoDetail={InfoDetail}
                            handleInfoNote={handleInfoNote}
                            handleTaskImportant={handleTaskImportant}
                            handleAddToMyDay={handleAddToMyDay}
                            handleTodoChecked={handleTodoChecked}
                            handleUploadFile={handleUploadFile}
                            displayOffInfo={displayOffInfo}
                            handleDate={handleDate}
                            getData={getData}
                            Data={Data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage