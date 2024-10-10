import LandingPageIcon from '/LandingPageIcon.svg';
import linkedln from '/linkedln.png';
import twitter from '/twitter.png';
import instagram from '/instagram.png';
import envelope from '/envelope.png';
const Footer =()=>{

    return(
        <>
            <footer className="footerContainer">
                <div className="footerContainer2">

                    {/* section 1 */}
                    <section className="section-footer-1">
                        <h3>
                            <img src={LandingPageIcon} alt="Edudesks Icon on footer" />
                            du
                            <span>desks</span>.
                        </h3>

                        <p>Making  the management of school finance seamless and highly efficient </p>

                        <div className="socials">
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedln} alt="linkedln" />
                        </div>
                    </section>

                  <section className="section-lower">
                      {/* section 2 */}
                      <section className="section-footer">
                        <h6>Company</h6>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </section>

                    {/* section 3*/}
                    <section className="section-footer">
                    <h6>Product</h6>
                        <ul>
                            <li>How it works </li>
                            <li>Pricing Plan</li>
                            <li>FAQ</li>
                        </ul>
                    </section>

                    {/* section 4 */}
                    <section className="section-footer">
                    <h6>Terms</h6>
                        <ul>
                            <li>Terms of Service </li>
                            <li>Privacy Policy</li>
                        </ul>
                    </section>

                    {/* section 5 */}
                    <section className="section-footer">
                    <h6>Contact</h6>
                        <p><img src={envelope} alt='envelope'/>edudesksorg@gmil.com</p>
                    </section>

                  </section>
                  </div>

                <section className="section-footer-under">
                        <p>© 2024 Edudesks. All rights reserved</p>
                    </section>
            </footer>
        </>
    )
}
export default Footer