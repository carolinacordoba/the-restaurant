

const ContactPageForm = () => {
  return (
    <div className="contact-page-form">
      <h3>Kontakta oss</h3>
      <form action="">
        <input type="text" placeholder="Ditt namn" />
        <input type="email" name="" id="" placeholder="Din e-postadress" />
        <textarea
          name=""
          id=""
          placeholder="Skriv ditt meddelande här..."
          rows={7}
          required
        ></textarea>
        <div className="button-div">
          <button>
            <strong>Skicka meddelande</strong>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPageForm;
