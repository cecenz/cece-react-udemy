import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className='Userblock Userinput'>
            <p><label>Change username:</label></p>
            <p><input onChange={props.changeUsername} value={props.username} type="text" name="name" /></p>
        </div>
    )
}

export default UserInput;