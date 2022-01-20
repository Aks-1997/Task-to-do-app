import * as React from 'react';
import classes from './EditTask.module.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux';
import * as action from '../../store/action';
import SaveIcon from '@material-ui/icons/Save';
import {Container} from 'react-bootstrap';
import Modal from '../../utils/Modal/Modal';
import {withRouter} from 'react-router-dom';

const EditTask = (props) => {
    const task = useSelector(state=>state.data)
    const currentTaskId = useSelector(state=>state.currentTaskId);
    const Dispatch = useDispatch();
   
    const [warning,setWarning] = React.useState(false);
    const [show,setShow] = React.useState(true);
    let tasks = task.find(info => {
        return info.id===currentTaskId
    })
    const [title,setTitle] = React.useState(tasks.title);
    
    const editHandler = (e) => {
        e.preventDefault();
        if(title!="")
        {
            let tasks =  task.map(info=> {
                    let currenttask=null;
                    if(info.id===currentTaskId)
                    {
                        currenttask={
                            id:currentTaskId,
                            title:title,
                            taskCompleted:false
                        }
                        return currenttask;
                    }
                    return info
                })
                Dispatch(action.setEditTask(tasks));
                props.history.push({
                    pathname : '/'
                })
        }
        else
        {
            setWarning(true);
        }
    }

    const modalClosed = () => {
        setShow(false);
    }

    const handleCancel = () => {
        props.history.push({
            pathname : '/'
        })
    }

    return (
        <Modal show={show} modalClosed={modalClosed}>
            <Container>
                <div className={classes.titleflex}>
                    <div className={classes.title+" ms-2 mt-2"}>TO DO Task</div>
                    <div className={classes.cancel+" mt-3"} onClick={handleCancel}>X</div>
                </div>

                <div className="ms-3 mt-2">
                    <TextareaAutosize
                        rows={3}
                        placeholder="Enter Task"
                        value={title}
                        onChange={event => {setTitle(event.target.value)}}
                        className={classes.textarea}
                    /> 
                </div>
                {warning?(<div className={classes.warning+" ms-2"}>
                    Task Name is Required
                </div>):null}
                <center>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.button+" mb-3"}
                    startIcon={<SaveIcon />}
                    onClick={(event)=>editHandler(event)}>
                        Save Task
                    </Button>
                </center>

            </Container>
        </Modal>
    )
}

export default withRouter(EditTask);
