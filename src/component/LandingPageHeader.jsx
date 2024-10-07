import LandingPageIcon from '/LandingPageIcon.svg';
import { GoArrowUpRight, GoArrowRight} from "react-icons/go";
const LandingPageHeader=()=>{
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
                        <li className="home">Home</li>
                        <li className="about">About Us</li>
                        <li className="contact">Contact us</li>
                        <li className="blog">
                        Blog
                        </li>
                    </ul>
                </nav>

                {/* third part */}
                <div className="landingPageHeaderBtn">
                    <button className="login">Log in <GoArrowUpRight/></button>
                    <button className="create-account">Create account<GoArrowRight/></button>
                </div>
                </section>
            </header>
        </>
    )
}
export default LandingPageHeader