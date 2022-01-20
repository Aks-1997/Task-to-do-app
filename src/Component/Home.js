import React from 'react';
import classes from './Home.module.css';
import Header from './Header/Header';
import Tasks from './Tasks/Tasks';

const Home = () => {
    return(
        <React.Fragment>
            <Header />
            <Tasks />
        </React.Fragment>
    )
}

export default Home;