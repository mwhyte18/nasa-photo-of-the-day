import React from 'react';

const TextData = props =>{
    return(
        <div className="infoContainer">
            <p>{props.data.explanation}</p>
        </div>
    )
}
export default TextData;