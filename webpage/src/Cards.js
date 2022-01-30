import 'bootstrap/dist/css/bootstrap.css'
import { Card,Container,Row,Col, Button } from 'react-bootstrap'
import './App.css'
import { Exchange } from './Exchange';
import BarChart from './Graph';

export default function Cards(){
    return(
        <Card className='custom-class' style={{ width: '45rem' ,height:'21rem',justifyContent:'center'}}>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                            <text className="white2">Price</text>
                            <button className="iconButtons">
                                <i class="fas fa-exclamation-circle whiteIconColor"></i>
                            </button>
                            </Col>
                            <Col md="auto">
                            <text className="white3">Monthly</text>
                                <button className="iconButtons">
                                    <i class="fas fa-calendar whiteIconColor"></i>
                                </button>
                            </Col>
                            <Col xs lg="2">
                                <button className="iconButtons">
                                        <i class="fas fa-ellipsis-v whiteIconColor"></i>
                                </button>
                            </Col>
                        </Row>
                        <Row>
                            <div style={{ width:"370px",paddingTop:"40px"}}>
                                <BarChart></BarChart>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Card className='custom-class2'>
                            <Exchange/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}