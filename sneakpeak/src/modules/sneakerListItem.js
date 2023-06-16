import "./sneakerListItem.css";
import { Link } from "react-router-dom";

function SneakerListItem(props) {
  return (
    <Link to={"/sneakers/" + props.item.id}>
      <div className="itemContainer">
        <img
          src={
            props.item.Images[0]
              ? props.item.Images[0].link
              : "https://payload.cargocollective.com/1/16/536584/8653252/FILFURY-Phil-Robson-Size-93-Mark_o.jpg"
          }
          style={{ width: "130px", height: "130px", objectFit: "contain" }}
          alt={props.item.name}
        />
        <div className="textContainer">
          <p className="titleText">{props.item.name}</p>
          <p className="colorText">{props.item.color}</p>
          <p className="releaseDateText">{props.item.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default SneakerListItem;
