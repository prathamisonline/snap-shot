import React from "react";
import { useState, useEffect } from "react";
import "./page.css";

const Home = () => {
  const [images, setImages] = useState([]);
  //   const params = useParams();
  const getImages = async (query) => {
    const res = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6282c3d3673f52a867fe7d53476e43f9&tags=${query}&per_page=25&format=json&nojsoncallback=1`
    );

    const data = await res.json();
    console.log(data.photos.photo);
    setImages(data.photos.photo);
  };
  useEffect(() => {
    getImages("Mountain");
  }, []);

  const imagee = images.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
      <div key={image.id}>
        <img src={url} key={id} alt={title} />
      </div>
    );
  });
  return <div className="image-grid">{imagee}</div>;
};

export default Home;
