import OpeningHours from "./OpeningHours";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import SocialMediaIcons from "./SocialMediaIcons";
import "../../../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="top-footer">
          <OpeningHours />
          <ContactInfo />
          <LocationInfo />
        </div>
        <div className="bottom-footer">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
