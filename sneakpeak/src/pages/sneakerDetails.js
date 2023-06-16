import "./sneakerDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../config/api";

function SneakerDetails() {
  const [sneaker, setSneaker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getSneaker = async () => {
      try {
        const response = await fetch(`${api.host}/sneakers/${id}`);
        const data = await response.json();
        setSneaker(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getSneaker();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sneaker.name) {
    return <p id="404sneaker">🤔 This sneaker does not exist</p>;
  }

  return (
    <div className="container">
      <img
        src={
          sneaker.Images[0]
            ? sneaker.Images[0].link
            : "https://payload.cargocollective.com/1/16/536584/8653252/FILFURY-Phil-Robson-Size-93-Mark_o.jpg"
        }
        className="sneakerPicture"
        alt={sneaker.name}
      />
      <p className="sneakerName">{sneaker.name}</p>
      <p className="sneakerColor">{sneaker.color}</p>
      <p className="sneakerReleaseDate">Released {sneaker.release_date}</p>
      <p className="sneakerDescription">{sneaker.description}</p>
    </div>
  );
}

export default SneakerDetails;
