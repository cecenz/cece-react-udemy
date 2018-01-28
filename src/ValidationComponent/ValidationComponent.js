import React from 'react';

const validation = (props) => {
    return (props.length < 5 ? <p>Text is too short</p> : <p>Text is long enough</p> )
}

export default validation;