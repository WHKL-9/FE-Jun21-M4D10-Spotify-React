import "./Layout.css";
import { Container, Row, Col} from "react-bootstrap";



const Artist = () => {
    return (
        <Container fluid className="Layout" >
            <Row>
                <Col xs={12} id="ArtistLayoutTop">
                    <div>
                        test
                    </div>
                </Col>
                <Col xs={12} id="ArtistLayoutBottom">
                    <div>
                        test
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Artist 