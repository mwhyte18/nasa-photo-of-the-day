import React from "react";

const ImageOfTheDay = props => {
    return (
        <div className = "imageContainer">
            <h2>{props.data.title}</h2>
            <h3>{props.data.date}</h3>
            <img src = {props.data.hdurl} alt={"NASA's best capture of the day!"} />
        </div>
    )
}
export default ImageOfTheDay;