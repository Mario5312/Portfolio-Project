const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact</h3>
      <div className="formRow">
        <form
          action="https://getform.io/f/6b0d2db3-85cd-458f-b01b-2c5f0ef8b336"
          method="POST"
          className="form"
        >
          <div className="filloutrow">
            <input
              type="text"
              className="Name"
              name="Name"
              placeholder="Name"
            ></input>
          </div>
          <div className="filloutrow">
            <input
              type="Email"
              className="Email"
              name="Email"
              placeholder="Email"
            ></input>
          </div>
          <div className="formText">
            <textarea
              className="textArea"
              rows={3}
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
