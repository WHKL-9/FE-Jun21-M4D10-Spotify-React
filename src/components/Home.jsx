import "./Home.css";
import { Container} from "react-bootstrap";
import { useState, useEffect } from "react";
import { getMusic } from "../music/Music";
import RowOfCards from "./RowOfCards";

const Home = () => {
  const [musics, setMusic] = useState([]);
  const [musics_2, setMusic_2] = useState([])

  //   https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever
//Avicii
  const fetchMusic = async (any) => {
    const fetchedMusic = await getMusic(any);
    // console.log(fetchedMusic);
    setMusic(fetchedMusic);
  };

  useEffect(() => {
    fetchMusic("Avicii");
  }, []);




  

  console.log(musics.data);
  return (
      <>
    <Container fluid className="Home mb-5">
      <h5 className="m-2">◢◤ Avicii ◢◤</h5>
      <>{musics.length > 0 && <RowOfCards musics={musics} />}</>
    </Container>

    </>
    
  );
};

export default Home;
