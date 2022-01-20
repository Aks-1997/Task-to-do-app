import * as React from 'react';
import classes from './Header.module.css';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

const Header = (props) => {

    const addTask = () => {
        props.history.push({
            pathname : '/AddTask'
        })
    }
    
    return (
        <div className={classes.Header}>

            <center>
            <div className={classes.todo}>
                Todo List
            </div>
            <div>
                
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button+" mb-3"}
                    onClick={addTask}>
                        Create Task
                    </Button>
            </div>  
            </center>        
        </div>
    )
}

export default withRouter(Header); 