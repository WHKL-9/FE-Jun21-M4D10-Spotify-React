import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { useHistory, useParams, Link} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./Layout.css"
import { secondsToMinutes } from "date-fns";
import { AiOutlineClockCircle} from'react-icons/ai'


const Album = () => {
  const params = useParams();
  const history = useHistory();
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);
  const [albumImage, setAlbumImage] = useState("");

  // console.log(params.id)

  const getSong = useCallback(async () => {
    try {
      console.log(params.id);
      const songs = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (songs.ok) {
        const data = await songs.json();
        setArtist(data.artist);
        setAlbumImage(data.cover_big);
        setTracks(data.tracks.data);
        console.log("I am the data:", data);
        console.log(data.tracks.data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getSong();
  }, []);

  console.log("I am the tracklist:", tracks);
  return (
    <Container fluid className="Layout">
      <Row className="AlbumSection pt-3">
        <Col xs={12} md={4}>
         <Link to={`/artist/${artist.id}`}>
            <Card>
              <Card.Img variant="top" src={albumImage} className="my-0" />
              <Card.Body>
                <Card.Title className="text-center p-0 my-0">{artist.name}</Card.Title>
              </Card.Body>
            </Card>
         </Link>
        </Col>
        <Col xs={12} md={8}>
          <Table className="tableTracklist">
            <thead>
              <tr id="headRow">
                <th>#</th>
                <th>Title</th>
                <th><AiOutlineClockCircle className="ml-2"/></th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{track.title_short}</td>
                  <td>{secondsToMinutes(track.duration)+":"+("0"+(track.duration%60)).slice(-2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
