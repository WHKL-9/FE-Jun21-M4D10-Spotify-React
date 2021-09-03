import {Row, Col} from 'react-bootstrap'
import SingleCard from "./SingleCard"

const RowOfCards = ({musics}) => {
    return(
        <Row className="p-0">
            {musics.slice(0,8).map((music)=>(
                <Col xs={12} sm={8} md={4} lg={3} key={music.id}>
                    <SingleCard music={music}/>
                </Col>))}
        </Row>
    )
}

export default RowOfCards