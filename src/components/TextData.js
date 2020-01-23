import React from 'react';

const TextData = props =>{
    return(
        <div className="infoContainer">
            <p>{props.data.explanation}</p>
            <div className = "footer">
            <footer>
                <p>copyright @marcowhyte</p>
            </footer>
        </div>
        </div>
    )
}
export default TextData;