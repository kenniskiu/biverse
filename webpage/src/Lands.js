import React from 'react';
import { Card,Container,Row,Col,Button} from 'react-bootstrap'
import _ from 'lodash'
import img1 from './house1.jpg'

export default function Lands() {
const cards = [
    {
      price: 10,
      address:'1.5 Ha-Chiloquin, Oregon, USA',
      img: img1,
      owner: 'Syaroful Umam',
      ownerDesc:'Verified Account',
      biverseLandERC721Address : '0x1879a7338F7682Ae3AeeB3F696eAD5481D789183',
      biverseERC20Address : '0xd321949Ec9e8dE5c60323FcD247Ce2Ec8eB64eEE',
      ownerID: '0x668417616f1502D13EA1f9528F83072A133e8E01',
    },
    {
        price: 10,
        address:'1.5 Ha-Chiloquin, Oregon, USA',
        img: img1,
        description: 'Vote for me',
        owner: 'Syaroful Umam',
        ownerDesc:'Verified Account',
      },
      {
        price: 10,
        address:'1.5 Ha-Chiloquin, Oregon, USA',
        img: img1,
        description: 'Vote for me',
        owner: 'Syaroful Umam',
        ownerDesc:'Verified Account',
      }
  ]

  return(
    <div className="center2">
        <Container>
            <Row>
            {_.map(cards, (card) => (
                <Col md={4}>  
                    <Card style={{ width: '18rem',height:'22rem' }}>
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                    <Card.Subtitle><bold>{card.price}</bold> Biverse</Card.Subtitle>
                    <Card.Subtitle>{card.address}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Subtitle className="subtitle">
                        <small className="bold">{card.owner}</small></Card.Subtitle>
                    <Card.Subtitle>
                        <small className="text-muted">{card.ownerDesc}</small></Card.Subtitle>
                        <div className="right">
                            <Button 
                            size="sm"
                            variant="secondary">
                                    Buy Now
                            </Button>
                        </div>
                    </Card.Footer>
                    
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}
