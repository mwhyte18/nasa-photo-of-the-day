import React, { useState, useEffect } from "react";
import ImageOfTheDay from "./ImageOfTheDay";
import TextData from "./TextData";
import axios from "axios";
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
export default function NasaData() {
    const[Nasa, setNasa] = useState([]);
    const[date, setDate] = useState([new Date()])

    const decreaseDate = () => {
        console.log(formatDate(date))
        var yesterday = new Date();
        var currentDate = new Date(date);
        yesterday.setDate(currentDate.getDate() - 1);
        setDate(yesterday);
    }
    const increaseDate = () => {
        console.log(formatDate(date));
        var tomorrow = new Date();
        var currentDate = new Date(date);
        tomorrow.setDate(currentDate.getDate() + 1);
        setDate(tomorrow);
    }        
 
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=RY7pK9vlAxHtSHefwGkjNkoJPVr3GJJFakZlF3a4&date='+ formatDate(date))
        .then(response => {
            console.log(response.data);
            setNasa(response.data);
            
        })
        .catch(error => {
            console.log("somethings wrong with data", error);
        })
    }, [date]);    
    return (
        <div className="imageData">
            <ImageOfTheDay data={Nasa} dateBackward={decreaseDate} dateForward={increaseDate}/>
            <TextData data={Nasa} />
        </div>
    )
}