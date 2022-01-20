import React,{Suspense} from 'react';
import classes from './Tasks.module.css';
import Task from './Task/Task';
import {useSelector} from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
const AddTask = React.lazy(()=>import('../AddTask/AddTask'));
const EditTask = React.lazy(()=>import('../EditTask/EditTask'));

const Tasks = (props) => {

    const tasks = useSelector(state => {
        return state.data
    });
    
    const id = useSelector(state => state.id);
    let display = tasks.map((info,id) => {
        return (
            <Col key={info+id} xs="12" sm="6" md="4" lg="3">
                <Task info={info} id={info.id}  />
            </Col>
        )
    })
    return(
        <div>
            <div className={classes.title+" mt-3 mb-1 ms-2"}>
                All Tasks
            </div>
            <Row className={classes.tasks+" p-2 pt-0"}>
                {display}
            </Row>
            <Suspense fallback={()=>null}>
                <Switch>
                    <Route path="/AddTask" component={AddTask} />
                    <Route path="/EditTask" component={EditTask} />
                </Switch>
            </Suspense>
        </div>

    )
}

export default Tasks;

