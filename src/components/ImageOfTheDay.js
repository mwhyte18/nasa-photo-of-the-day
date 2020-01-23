import React from "react";
import ReactPlayer from 'react-player'

const ImageOfTheDay = props => {
    var imgOrVideoPlayer;
if (props.data.hdurl) {
    imgOrVideoPlayer = <img src = {props.data.hdurl} alt={"NASA's best capture of the day!"} />
}
else if (props.data.url) {
    imgOrVideoPlayer = <ReactPlayer url={props.data.url} playing />
}
    return (
        <div className = "imageContainer">
            <button onClick={props.dateForward}>Date up</button>
            <button onClick={props.dateBackward}>Date down</button>
            <h2>{props.data.title}</h2>
            <h3>{props.data.date}</h3>
            {imgOrVideoPlayer}
        </div>
    )
}
export default ImageOfTheDay;