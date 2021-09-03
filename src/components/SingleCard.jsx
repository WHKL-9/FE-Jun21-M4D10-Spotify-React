import { Card } from "react-bootstrap";
import './SingleCard.css'

const SingleCard = ({ music }) => {
  return (
    <Card className="mb-2 mx-1">
      <Card.Img variant="top" src={music.album.cover} className="MusicImage"/>
      <Card.Body>
        <Card.Title>{music.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
