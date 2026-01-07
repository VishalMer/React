import React from 'react'

const card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>Hello, {props.user}!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>age : {props.age}</p>
            <button>view profile</button>
        </div>
    )
}

export default card
