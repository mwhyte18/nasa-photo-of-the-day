import React, { useState, useEffect } from "react";
import ImageOfTheDay from "./ImageOfTheDay";
import TextData from "./TextData";
import Footer from "./Footer";
import axios from "axios";

export default function NasaData() {
    const[Nasa, setNasa] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=RY7pK9vlAxHtSHefwGkjNkoJPVr3GJJFakZlF3a4")
        .then(response => {
            console.log(response.data);
            setNasa(response.data);
        })
        .catch(error => {
            console.log("somethings wrong with data", error);
        })
    }, []);
    return (
        <div className="imageData">
            <ImageOfTheDay data={Nasa} />
            <TextData data={Nasa} />
        </div>
    )
}