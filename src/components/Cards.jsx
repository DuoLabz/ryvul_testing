import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from "../assets/play button.png";
import Frame from "../assets/frame.png";

const Cards = () =>{

    return(
            <Card style={{ width: '15rem',background:"transparent",border:'none',color:"#069f90", fontFamily: "myFont"}}>
      <Card.Img variant="top" src={Frame} />
      <Card.Body>
        <Card.Title style={{  textShadow: "2px -1px 1px #006359"}}>Card Title</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>        
        <center><img style={{width : "150px",cursor:"pointer"}} src={Btn}/></center>
      </Card.Body>
    </Card>
    );
}

export default Cards;