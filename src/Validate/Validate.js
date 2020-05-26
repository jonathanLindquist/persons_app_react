import React from 'react';

const validate = (props) => {
    let text = 'Text Long Enough';
    if (props.text_length < 5) {
        text = 'Text is too short';
    }
    return (
        <p>{text}</p>
    );
}

export default validate;