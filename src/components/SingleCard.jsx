import { Card } from "react-bootstrap";
import './SingleCard.css'
import { Link } from "react-router-dom";

const SingleCard = ({ music }) => {
  return (
    <Link to={`/album/${music.album.id}`} className="MusicTitle">
        <Card className="mb-2 mx-1 MusicCard">
          <Card.Img variant="top" src={music.album.cover} className="MusicImage"/>
          <Card.Body>
            <Card.Title className="MusicTitle">{music.title}</Card.Title>
          </Card.Body>
        </Card>
    </Link> 
  );
};

export default SingleCard;
