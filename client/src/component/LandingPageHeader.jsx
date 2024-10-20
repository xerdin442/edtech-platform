import LandingPageIcon from '/LandingPageIcon.svg';
import { useState } from 'react';
import arrow_right from '/arrow_right.png';
import { useNavigate } from "react-router-dom";
const LandingPageHeader=()=>{
    const [highlightHeader,setHighlightHeader] = useState("home")

    const handleHighlightHeader =(name)=>{
        setHighlightHeader(name)
    }
    const navigate = useNavigate()
    return(
        <>
          <header className="container-header">
              <header className="header-1">
                <div className="div-container">
                  <h6>Buy now and save 20% off plan </h6>
                  <p>See plans and pricing</p>
                </div>
              </header>

              <header className="header-2">
                <div className="div-container">

                  <section className="section-1">
                      <img src={LandingPageIcon} alt="LandingPageIcon" />
                      <p>du<span>desks</span>.</p>
                  </section>

                  <nav>
                    <ul>
                        <li onClick={() => handleHighlightHeader("home")} 
                      className={`home ${
                        highlightHeader === "home" ? "Highlight" : ""
                      }`} >Home</li>

                        <li onClick={() => handleHighlightHeader("about")} 
                      className={`about ${
                        highlightHeader === "about" ? "Highlight" : ""
                      }`}>About Us</li>

                        <li onClick={() => handleHighlightHeader("contact")} 
                      className={`contact ${
                        highlightHeader === "contact" ? "Highlight" : ""
                      }`}>Contact us</li>
                        <li onClick={() => handleHighlightHeader("blog")} 
                      className={`blog ${
                        highlightHeader === "blog" ? "Highlight" : ""
                      }`}>
                        Blog
                        </li>
                    </ul>
                </nav>

                  <section className="section-3">
                    <button className="login">
                      Log in <img src={arrow_right} alt="arrow_right" />
                    </button>

                    <button className="trial" onClick={()=>{navigate("/sign-up")}}>
                    Start 30 Days free trial <img src={arrow_right} alt="arrow_right" />
                    </button>
                  </section>
                </div>
              </header>
            </header> 
        </>
    )
}
export default LandingPageHeader