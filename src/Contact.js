const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact</h3>
      <div className="formRow">
        <div className="filloutrow">
          <input type="text" className="Name" placeholder="Name"></input>
        </div>
        <div className="filloutrow">
          <input type="Email" className="Email" placeholder="Email"></input>
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
      </div>
    </div>
  );
};

export default Contact;
