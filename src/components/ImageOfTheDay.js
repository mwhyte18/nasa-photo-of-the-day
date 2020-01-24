import React from "react";
import ReactPlayer from 'react-player'
import { Button } from 'reactstrap';
import styled from 'styled-components'
import { Container, Row, Col } from "reactstrap";

const ButtonMargin = styled.div`
display: flex;
justify-content: space-between;
`
const Img = styled.img`
width: 100%;
`;

const WholeContainer = styled.div`
margin: 5% 10%;
`

const ImageOfTheDay = props => {

    var imgOrVideoPlayer;
if (props.data.hdurl) {
    imgOrVideoPlayer = <Img src = {props.data.hdurl} alt={"NASA's best capture of the day!"} />
}
else if (props.data.url) {
    imgOrVideoPlayer = <ReactPlayer url={props.data.url} playing />
}
    return (
        <WholeContainer>
            <ButtonMargin>
            <Button outline color="danger" onClick={props.dateBackward}>Date down</Button>
            <Button outline color="success" onClick={props.dateForward}>Date up</Button>
            </ButtonMargin>
            <div className="mt-5">
            <Row>
                <Col xl="6" md="12" xs="12" >{imgOrVideoPlayer}  </Col>
                
                <Col xl="6" md="12" xs="12">
                
                <h2>{props.data.title}</h2>
                <h3>{props.data.date}</h3>
                <p>{props.data.explanation}</p>
                
                </Col>
                
                
            </Row>
            </div>
        </WholeContainer>
    )
}
export default ImageOfTheDay;