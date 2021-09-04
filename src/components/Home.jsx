import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import RowOfCards from "./RowOfCards";

const Home = ({artist}) => {
  const [musics, setMusic] = useState([]);

  //   https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever
  const fetchMusic = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,{
            method:"GET"
        }
      );
      if (response.ok) {
        const {data} = await response.json();
        setMusic(data)
      } else {
        throw new Error("Something went wrong - couldn't fetch music");
      }
    } catch (error) {
        console.log(error)
    }
    // const fetchedMusic = await getMusic({artist});
    // console.log(fetchedMusic);
    // setMusic(fetchedMusic);
  };

  useEffect(() => {
    fetchMusic();
  }, []);

 

  console.log(musics.data);
  return (
    <>
      <Container className="Home mb-5 container-fluid">
        <h5 className="m-2 text-white">{artist}</h5>
        <>{musics.length > 0 && <RowOfCards musics={musics} />}</>
      </Container>
    </>
  );
};

export default Home;
