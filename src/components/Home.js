import { Col, Row } from "react-bootstrap";
import tom from '../assets/tom_1.svg';
import leaf from '../assets/decoration.svg';
import './Home.css'
export const Home = () => {
    return(
        <div>
                <div className="promise">
                    <span className="rectangle"></span>
                    <span className="promise-text">3 oyda Koreys tilida gapirishni boshlang</span>
                </div>
                <div className="big-text">
                <h2>Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h2>
                </div>
                <Row className="inside-row">
                    <Col md={6}>
                        <div className="column1">
                            <img className="ellipse" src={leaf} alt="Leaf"/>
                            <p>5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="column1">
                        <img className="ellipse" src={leaf} alt="Leaf"/>
                        <p>Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                        </div>
                    </Col>
                </Row>
                <button className="join-button">
                    <span className="join-text"></span>
                </button>
                     <img className="tom-1" src={tom} alt="Tom"/>
                     <div className="ellipse-70"></div>
        </div>
    )
}