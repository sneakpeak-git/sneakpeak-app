import "./sneakers.css";
import { useState, useEffect } from "react";
import api from "../config/api";
import SneakerListItem from "../modules/sneakerListItem";

function Sneakers() {
  const [allSneakers, setAllSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSneakers = async () => {
      try {
        const response = await fetch(`${api.host}/sneakers`);
        const data = await response.json();
        setAllSneakers(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getSneakers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="listContainer">
      {allSneakers.map((item) => (
        <SneakerListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Sneakers;
