import Frame_1000008614 from "/Frame_1000008614.png";
import Circular_text from "/Circular_text.png";
const LandingPart2 = ()=>{

    return(
        <>
            <section className="landing-part-2-container">
                <section className="part-1">
                    <h3>Manage School Finances More Efficiently With Edudesks</h3>
                    <p>EduDesks is your comprehensive solution for seamless school financial management. Designed to simplify budgeting, tracking expenses, and managing payments, with features like automated fee collection, detailed financial reports, and real-time analytics, you can gain better control over your institution's finances</p>
                </section>

                <section className="part-2">
                    <img src={Circular_text} alt="Circular_text"  className="circular-img"/>
                    <img src={Frame_1000008614} alt="Frame_1000008614" />
                </section>
            </section>
        </>
    )
}

export default LandingPart2