import "../styles/home-page.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop>
        <source src="/public/video.mp4" type="video/mp4" />
      </video>
      <Link to={`/boka`}>
        <button className="book-table-btn">Boka bord</button>
      </Link>
    </div>
  );
};

export default HomePage;
