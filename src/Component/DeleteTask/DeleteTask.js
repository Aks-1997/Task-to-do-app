import * as React from 'react';
import classes from './DeleteTask.module.css';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux';
import * as action from '../../store/action';
import {Container} from 'react-bootstrap';

const DeleteTask = (props) => {

    const task = useSelector(state=>state.data);
    const currentTaskId = useSelector(state=>state.currentTaskId);
    const Dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        let tasks = task.filter(info => info.id !== currentTaskId);
        Dispatch({type:action.editTask,task:tasks});
        Dispatch(action.setDeleteTask(tasks));
        props.modalClosed();
    }
    
    return (
        <Container>
            <center><div className="mt-3 mb-2">Do you want to Delete?</div></center>
            <div className={classes.buttons+" mb-3"}>
            <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            onClick={(event)=>deleteHandler(event)}>
                Yes
            </Button>

            <Button
            variant="contained"
            color="danger"
            size="medium"
            className={classes.button}
            onClick={props.modalClosed}>
                No
            </Button>
            </div>    
        </Container>
    )
}

export default DeleteTask;
