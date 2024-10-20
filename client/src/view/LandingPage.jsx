import LandingPageHeader from "../component/LandingPageHeader";
import arrow_right_black from "/arrow_right_black.png";
import Frame_landing_page from "/Frame_landing_page.png";
import CROWN_1 from "/CROWN_1.png";
import CALEB_1 from "/CALEB_1.png";
import LEGACY_1 from "/LEGACY_1.png";
import pngtree_1 from "/pngtree_1.png";
import LandingPart2 from "../component/LandingPart2";

const LandingPage =()=>{

  return(
    <>
      <LandingPageHeader/>

      <main className="landingPage-container">
        <section className="landingPage-section">
          <header className="landing-header">
          <h6>Start Managing Your School Finances Today</h6>
          <h3>Simplify School Finances With Our All-In-One Management Platform.</h3>
          <h5>Gain full control over income and expenses processes - all from one seamless platform designed for schools</h5>
          </header>

          <div className="btn-container">
            <button>
            Start 30-Days free trial <img src={arrow_right_black} alt="arrow right black" />
            </button>
          </div>

          <div className="diagram">
            <img src={Frame_landing_page} alt="Frame landing page" />
          </div>
        </section>

        <section className="school-list-container">
          <h6>Trusted by over 20 Schools</h6>
        <section className="schoolList">
          <div className="school-container">
            <img src={CALEB_1} alt="CALEB_1" />
            <p>Caleb International School</p>
          </div>

          <div className="school-container">
            <img src={CROWN_1} alt="CROWN_1" />
            <p>Crowns Gate School</p>
          </div>

          <div className="school-container">
            <img src={LEGACY_1} alt="LEGACY_1" />
            <p>Legacy Schools</p>
          </div>

          <div className="school-container">
            <img src={pngtree_1} alt="pngtree_1" />
            <p>Anita College</p>
          </div>
        </section>
        </section>

        <LandingPart2/>
      </main>
    </>
  )
}
export default LandingPage