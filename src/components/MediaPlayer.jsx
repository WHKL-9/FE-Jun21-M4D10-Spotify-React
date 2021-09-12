import { Row, Col, Container } from "react-bootstrap";
import "./MediaPlayer.css";
import { GiSpeaker } from "react-icons/gi";
import { CgLoadbar } from "react-icons/cg";
import { BiShuffle } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import {
  AiOutlineStepBackward,
  AiFillPlayCircle,
  AiFillStepForward,
} from "react-icons/ai";

const MediaPlayer = () => (
  <Container className="MediaPlayerContainer">
    <Row className="MediaPlayerRow">
      <Col sm={3} md={3} lg={3} className="d-none d-md-block"></Col>
      <Col sm={6} md={6} lg={6} className="MiddleOfContainer text-center">
        <span>
          <BiShuffle className="MiddleLogo"/>
          <AiOutlineStepBackward className="MiddleLogo"/>
          <AiFillPlayCircle className="MiddleLogo"/>
          <AiFillStepForward className="MiddleLogo"/>
          <IoRepeatOutline className="MiddleLogo"/>
        </span>
        <span><CgLoadbar className="ProgressBar"/></span>
      </Col>
      <Col sm={3} md={3} lg={3} className="RightOfContainer">
        <span className="mr-2">
          <GiSpeaker className="MediaPlayerIcon m-1" />
        </span>
        <span className="ml-2">
          <CgLoadbar className="MediaPlayerIcon VolumeBar m-1" />
        </span>
      </Col>
    </Row>
  </Container>
);

export default MediaPlayer;
