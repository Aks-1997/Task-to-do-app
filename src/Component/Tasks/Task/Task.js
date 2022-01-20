import React,{useState} from 'react';
import classes from './Task.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '../../../utils/Modal/Modal';
import DeleteTask from '../../DeleteTask/DeleteTask';
import {useSelector,useDispatch} from 'react-redux';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import * as action from '../../../store/action';
import {withRouter} from 'react-router-dom';

const Task = (props) => {

    const taskdata = useSelector(state=>state.data);
    const Dispatch = useDispatch();
    const [showDelete,setShowDelete] = useState(false);
    const [show,setShow] = useState(false);
    let currentTask = taskdata?.find(info => {
        return info.id===props.id
    })

    const modalClosed = () => {
        setShowDelete(false);
        setShow(false);
    }

    const handleEditTask = () => {

        if(!currentTask?.taskCompleted)
        {
            Dispatch(action.setCurrentId(props.id));
            props.history.push({
            pathname:'/EditTask'
        })
        }
        
    }

    const handleDeleteTask = () => {
        setShowDelete(true);
        setShow(true);
    }

    const handleCompleteTask = () => {
        let tasks =  taskdata.map(info=> {
            let currenttask=null;
            if(info.id===props.id)
            {
                currenttask={
                    id:props.id,
                    title:info.title,
                    taskCompleted:!info.taskCompleted
                }
                return currenttask;
            }
            return info;
        })
        Dispatch(action.setCompleteTask(tasks));
    }

    let display = null;


    if(showDelete)
    {
        Dispatch(action.setCurrentId(props.id));
        display = <DeleteTask modalClosed={modalClosed} />
    }

    let showComplete = null;
    
    if(currentTask?.taskCompleted)
    {
        showComplete = (
            <div>
                <CheckCircleIcon className={classes.circlecheck+" me-2"} />
            </div>
        )
    }
    
    return(
        <div className={classes.task+" border me-4 mt-4"}>
            <Modal show={show} modalClosed={modalClosed} >
                {display}
            </Modal>
            <div className={classes.titleflex+" mt-2 ms-1 mb-1 p-1"}>
                {showComplete}
                <div className={classes.title+" p-1"}>
                    {props.info.title}
                </div>
            </div>
            <div className = {classes.options+" mt-auto pb-1 pt-1"}>   
                <div>
                    <CheckBoxIcon onClick={handleCompleteTask} className={classes.icon+" me-2"} />
                </div>
                <div>
                    <EditIcon onClick={handleEditTask} className={classes.icon+" me-2"} />
                </div>
                <div>
                    <DeleteIcon onClick={handleDeleteTask} className={classes.icon+" me-2"} />
                </div>
                </div>
        
        </div>
    )
}

export default withRouter(Task);