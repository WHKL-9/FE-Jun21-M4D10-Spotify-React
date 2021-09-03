// for homepage
// https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever

export const getMusic = async (endpoint) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + endpoint
    );
    if (response.ok) {
      const {data} = await response.json();
      return data;
    } else {
      throw new Error("Something went wrong - couldn't fetch music");
    }
  } catch (error) {
    console.log(error);
  }
};

// for album and artist page
// https://striveschool-api.herokuapp.com/api/deezer/album/{id} API.

export const getAlbumDetails = async (id) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
    );
    if (response.ok) {
      const {data} = await response.json();
      return data;
    } else {
      throw new Error("Something went wrong - couldn't fetch music");
    }
  } catch (error) {
    console.log(error);
  }
};

// https://striveschool-api.herokuapp.com/api/deezer/artist/{id} API
export const getArtistDetails = async (id) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
      );
      if (response.ok) {
        const {data} = await response.json();
        return data;
      } else {
        throw new Error("Something went wrong - couldn't fetch music");
      }
    } catch (error) {
      console.log(error);
    }
  };