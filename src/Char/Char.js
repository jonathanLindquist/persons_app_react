import React from 'react';

const char = (props) => {
    const charStyle = {
			display: 'inline-block',
			font: 'inherit',
			border: '1px solid black',
      padding: '16px',
      textAlign: 'center',
      margin: '16px'
    };

    return (
            <div style={charStyle} onClick={props.clicked}>{props.char}</div>
    );
}

export default char;