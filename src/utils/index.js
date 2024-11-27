import React from 'react'
import c from './index.module.css'
const Container = (props) => {
    return (
        <div className={c.container}>
            {props.children}
        </div>
    )
}

export default Container
