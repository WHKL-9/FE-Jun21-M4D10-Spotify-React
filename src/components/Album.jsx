import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./Album.css";

const Album = () => {
  const params = useParams();
  const history = useHistory();
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState([]);
  const [albumImage, setAlbumImage] = useState("")

  // console.log(params.id)

  const getSong = useCallback(async () => {
    try {
      console.log(params.id);
      const songs = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (songs.ok) {
        const data = await songs.json();
        setArtist(data.artist.name);
        setAlbumImage(data.cover_big)
        console.log(artist);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getSong();
  }, [getSong]);

  return (
    <Container fluid className="Layout">
      <Row className="AlbumSection">
        <Col md={6} lg={6}>
          <Card>
            <Card.Img variant="top" src={albumImage} />
            <Card.Body>
              <Card.Title>{artist}</Card.Title>
              <Card.Text>
                example
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6}>
          test
        </Col>
      </Row>
    </Container>
  );
};

export default Album;

// export const getAlbumDetails = async (id) => {
//     try {
//       const response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
//       );
//       if (response.ok) {
//         const {data} = await response.json();
//         return data;
//       } else {
//         throw new Error("Something went wrong - couldn't fetch music");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
