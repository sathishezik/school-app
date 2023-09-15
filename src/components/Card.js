import group from '../images/Icons/Group.svg'
import { Container,Row,Col } from "react-bootstrap"
const Card = ({title, value}) =>{
    return(
        <div className="card">
            <Row>
                <Col>
            <div className="group-bg">
            <img src={group} className="group-icon"/>
            </div>
                </Col>

                <Col>
            <div className='card-content'>
            <p className="mb-0">{title}</p>
            <h4>{value}</h4>
            </div>
                </Col>
            </Row>
        <div className="d-flex align-items-center justify-content-around">
        </div>
    </div>
    )
}

export default Card