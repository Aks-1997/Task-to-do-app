import React from 'react';
import classes from './Backdrop.module.css';
import {withRouter} from 'react-router-dom';

const Backdrop = (props) => {
        const handleBackdrop = () => {
                props.history.push({
                        pathname : '/'
                })
        }
        return(
                <>
                {props.show ? (<div className = {classes.Backdrop} onClick = {handleBackdrop}></div>) : null}
                </>
        )
};

export default withRouter(Backdrop);