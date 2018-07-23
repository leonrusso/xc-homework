import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Button, FormGroup, Label, Input } from "reactstrap";

import HomeCard from "./components/HomeCard";

class App extends Component {

  state = {
    homes: [
      {
        id: 0,
        title: 'Beautiful 2 Bedroom Apt',
        img: 'https://avatars.mds.yandex.net/get-pdb/231404/47f71851-981c-46cf-805b-1b1f955988d3/orig',
        price: '$99'
      },
      {
        id: 1,
        title: 'Quiet Home',
        img: 'https://www.lennar.com/images/elevations/24648_eleC_lg.jpg?w=1200&h=650&as=1',
        price: '$250'
      },
      {
        id: 2,
        title: 'Modern House',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154065.jpg?crop=1.00xw:0.811xh;0,0.0803xh&resize=768:*',
        price: '$379'
      },
      {
        id: 3,
        title: 'Apt with a Pool!',
        img:
          'https://platformapartments.com/assets/images/cache/home_videoimage-09dfa5fd1c7c77d91bc5e45f785ca14e.jpg',
        price: '$89'
      },
      {
        id: 4,
        title: 'Castle Apartment',
        img:
          'http://i43.photobucket.com/albums/e388/Swinefeld/Miscellanious/Stonehurst.jpg',
        price: '$105'
      },
      {
        id: 5,
        title: 'Historic Condo',
        img:
          'https://assets.dnainfo.com/generated/photo/2015/12/1193bergenstreet-crownheightsnewyorknajlaalameldindouglasellimanphotography28022159highres-1449159231.jpg/extralarge.jpg',
        price: '$109'
      }
    ]
  }

  render() {
    return (
      <Container>
        <FormGroup>
          <Col md={{ size: 8, offset: 2 }}>
            <Row>
              <Col md="9">
                <Input type="text" name="text" id="exampleText" placeholder="Try 'Costa del Sol'" />
              </Col>
              <Col md="3">
                <Button>Search</Button>
              </Col>
            </Row>
          </Col>
        </FormGroup>
        <Row>
          {this.state.homes.map(e => <Col md="4"><HomeCard home={e} key={e.id} /></Col>)}
        </Row>
      </Container>
    );
  }
}

export default App;
