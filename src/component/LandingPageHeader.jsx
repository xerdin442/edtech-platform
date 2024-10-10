import LandingPageIcon from '/LandingPageIcon.svg';
import { GoArrowUpRight, GoArrowRight} from "react-icons/go";
import { useState } from 'react';
const LandingPageHeader=()=>{
    const [highlightHeader,setHighlightHeader] = useState("home")

    const handleHighlightHeader =(name)=>{
        setHighlightHeader(name)
    }
    return(
        <>
            <header className="landingPageHeader">
                <section className="sectionLandingPageHeader">

                {/* first part */}
                <div className="titleContainer">
                <img src={LandingPageIcon} alt="Edudesks Logo" />
                <h4>du<span>desks</span>.</h4>
                </div>

                {/* second part */}
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

                {/* third part */}
                <div className="landingPageHeaderBtn">
                    <button className="login">Log in <GoArrowRight/></button>
                    <button className="create-account">Create account<GoArrowRight/></button>
                </div>
                </section>
            </header>
        </>
    )
}
export default LandingPageHeader