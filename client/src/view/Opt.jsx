import Group_7 from "/Group_7.svg";
const Opt = () => {
  return (
    <>
      <section className="opt-container">
        <div className="opt-container-div">
          <header className="signUp-header">
            <img src={Group_7} alt="Landing Page Icon" />
            <p>
              du<span>desks</span>.
            </p>
          </header>

          <section className="verify-opt-container">
            <h2>Verify with OTP</h2>
            <h6>To ensure the security of your account, please verify your email</h6>

            <div className="btn-container-1">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>

            <div className="not-recieve">
                <p>Didn’t receive the OTP?</p>
                <a>Resend</a>
            </div>

            <div className="btn-container-2">
            <button></button>
            <button></button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Opt;
