import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./page.css";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  const getSearch = async (query) => {
    const res = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6282c3d3673f52a867fe7d53476e43f9&tags=${query}&per_page=25&format=json&nojsoncallback=1`
    );

    const data = await res.json();
    // console.log(data.photos.photo);
    setSearched(data.photos.photo);
  };
  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  const imagee = searched.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
      <div>
        <img src={url} key={id} alt={title} />
      </div>
    );
  });
  return <div className="image-grid">{imagee}</div>;
};

export default Searched;
