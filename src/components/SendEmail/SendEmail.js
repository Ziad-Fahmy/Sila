import './SendEmail.css'

function SendEmail() {
  return (
    <>
      <div className="email__footer">
        <div className="email__container">
          <div className="email__text">
            <h3>Send An Email</h3>
          </div>
          <div className="emil__label">
          <div className="email__subscribe">
              <form>
                <input type="email" id="email" placeholder="Enter Your Email..." />
                <button type="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendEmail;
