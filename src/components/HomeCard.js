import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

const HomeCard = props => (
    <Card>
        <CardBody>
            <img src={props.home.img} height="200px" width="100%" />
            <h3>{props.home.title}</h3>
            <p>Nightly Price: {props.home.price}</p>
        </CardBody>
    </Card>
)

export default HomeCard;