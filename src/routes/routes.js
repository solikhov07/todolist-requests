import React from 'react'
import { Route } from 'react-router-dom'
import DoneRequest from './done_request/DoneRequest'
import Home from './home/Home'
const routes = () => {
    return (
        <>
            <Route exact path='/'>
           <Home/>     
            </Route>
            <Route path='/requests'>
                <DoneRequest/>
            </Route>
        </>
    )
}

export default routes