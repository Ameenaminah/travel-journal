import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  image,
  altimage,
}) {
  return (
    <main className="card">
      <div>
        <img className="card--img" src={`../images/${image}`} alt={altimage} />
      </div>
      <div>
        <div className="card--locate">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "pink" }} />
          <h4>{location}</h4>
          <a href={googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{title}</h1>
        <h3>
          {startDate}-{endDate}
        </h3>
        <p>{description}</p>
      </div>
    </main>
  );
}
