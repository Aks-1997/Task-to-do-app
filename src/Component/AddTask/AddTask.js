import * as React from 'react';
import classes from './AddTask.module.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux';
import * as action from '../../store/action';
import SaveIcon from '@material-ui/icons/Save';
import {Container} from 'react-bootstrap';
import Modal from '../../utils/Modal/Modal';
import {withRouter} from 'react-router-dom';

const AddTask = (props) => {
    const id = useSelector(state=>state.id);
    const Dispatch = useDispatch();
    const [show,setShow] = React.useState(true);
    const [title,setTitle] = React.useState("");
    const [warning,setWarning] = React.useState(false);
    const saveHandler = (e) => {
        e.preventDefault();
        if(title!="")
        {
            const task = {
                id : id+1,
                title : title,
                taskCompleted:false
            }
            Dispatch(action.setAddTask(task));
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

    console.log("Add Task");
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
                className={classes.button+" mt-2 mb-3"}
                startIcon={<SaveIcon />}
                onClick={(event)=>saveHandler(event)}>
                    ADD Task
                </Button>
                </center>
            </Container>            
         </Modal>
    )
}

export default withRouter(AddTask);

