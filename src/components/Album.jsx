import {Container, Row, Col} from 'react-bootstrap'
import { useHistory, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./Album.css"
import { getAlbumDetails } from '../music/Music';


const Album = () => {

    const params = useParams()
    const history = useHistory()
    const [song, setSong] = useState([])
    const [artist, setArtist] = useState([])

    const getSong = useCallback(async () => {
        try {
            const songs = await getAlbumDetails(params.id)

        } catch (error) {
            console.log(error)
        }
    })


    return (
        <Container fluid className="AlbumContainer">
            <Row className="AlbumSection">
                <Col md={6} lg={6}>
                    test
                </Col>
                <Col md={6} lg={6}>
                    test
                </Col>
            </Row>
        </Container>
    )
}

export default Album