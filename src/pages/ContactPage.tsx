import ContactPageForm from "../components/contact/ContactPageForm";
import ContactPageText from "../components/contact/ContactPageText";
import "../styles/contact.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <img src="/contact-page-img.webp" alt="" />
      <ContactPageForm></ContactPageForm>
      <ContactPageText></ContactPageText>
    </div>
  );
};

export default ContactPage;
