
import React from 'react';

const UserOutput = (props) => {
    return (
        <div className='Userblock'>
            <p>Current Username:</p>
            <p>{props.username}</p>
        </div>
    )
}

export default UserOutput;