import React,{useState} from 'react';
import dataService from '../../../../data-service';
// import './mainBody.css';
import AddStep from './addStep/addStep';
import StepList from './stepList/stepList';
// import axios from '../../../../server'

const Step = (props) => {
    const [details, setdetails] = useState()
    const getData = () => {
        // axios.get(`https://todo-319907-default-rtdb.firebaseio.com/task_list/${this.props.InfoDetail.id}/step_title.json`)
        // dataService.get(`${props.InfoDetail.id}`)
        //     .then((response) => {
        //         console.log(response);
                // const Datas = []
                // for (const item in response.data) {
                //     if (Object.hasOwnProperty.call(response.data, item)) {
                //         const element = response.data[item]
                //         Datas.push({
                //             id: item,
                //             title: element.step_title
                //         })
                //     }
                // }

                // this.setState({ details: Datas })
            // })
    }

    return (
        <div className="main-body">
            <StepList handleDisplayOnInfo={props.handleDisplayOnInfo} handleInfoDetail={props.handleInfoDetail}
                InfoDetail={props.InfoDetail} Data={props.Data} search={props.search} getData={getData}/>
            <AddStep InfoDetail={props.InfoDetail} />
        </div>
    )

}
export default Step