import LandingPageHeader from "../component/LandingPageHeader"
import { GoArrowRight} from "react-icons/go";
import { FiArrowDownLeft } from "react-icons/fi";
import dashboard from '/dashboard.png';
import image1 from '/image1.png';
import { MdArrowDownward } from "react-icons/md";
const LandingPage=()=>{

    return(
        <>
        <LandingPageHeader/>
            <main className="landingPageContainer">
                {/* first part of page */}
                <section className="firstPart">
                    <div className="divFirstPart">
                        <h4>Effortless <span>Financial Management</span>for Schools</h4>
                        <p>Manage your school&apos;s income and expenses seamlessly with our all-in-one platform. From tracking tuition payments to managing operational costs, ensure financial efficiency that supports academic excellence</p>
                        <button>Create account <GoArrowRight/></button>
                    </div>
                    <FiArrowDownLeft className="down-left-arrow"/>
                </section>

                {/* second part of page*/}
                <section className="secondPart">
                    <img src={dashboard} alt="dashboard image" />
                </section>

                {/* third part */}
                <section className="thirdPart">
                    <div className="whatToGet">
                        <h6>WHAT YOU GET FROM EDUDESKS</h6>
                        <MdArrowDownward/>
                    </div>

                    <div className="aboutUs">
                        <div className="aboutImgContainer">
                            <img src={image1} alt="finance image" />
                        </div>

                        <div className="aboutWriteUp">
                            <h6>About Us</h6>
                            <h3>Manage school finances  more efficiently with Edudesks</h3>
                            <p>EduDesks is your comprehensive solution for seamless school financial management. Designed to simplify budgeting, tracking expenses, and managing payments, with features like automated fee collection, detailed financial reports, and real-time analytics, you can gain better control over your institution&apos;s finances</p>
                        </div>
                    </div>

                    <div className="uniqueFeatures">
                        <div className="uniqueFeaturesUpper">
                            <h6>Unique Features</h6>
                            <h3>Powerful Features to Simplify School Financial Management</h3>
                        </div>
                        <div className="uniqueFeaturesLower">
                        <div className="btns">
                                <button>Income tracking</button>
                                <button>Expense tracking</button>
                                <button>fees Payment</button>
                                <button>Analytics</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default LandingPage