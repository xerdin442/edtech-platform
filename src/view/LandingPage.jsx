import LandingPageHeader from "../component/LandingPageHeader";
import { GoArrowRight } from "react-icons/go";
import dashboard from "/dashboard.png";
import Concepto from "/Concepto.png";
import { MdArrowDownward } from "react-icons/md";
import cash_icon from "/cash_icon.svg";
import income_report_1 from "/income_report_1.png";
import Monthly_Chart_1 from "/Monthly_Chart_1.png";
import climbing from "/climbing.png";
import Line_91 from "/Line_91.svg";
import { useState } from "react";
import Expense_overview from "/Expense_overview.png";
import payment_status from "/payment_status.png";
import Monthly_Chart_2 from "/Monthly_Chart_2.png";
import Monthly_Chart_3 from "/Monthly_Chart_3.png";
import plus_circle from "/plus_circle.png";
import minus_circle from "/minus_circle.png";
import Avatar_1 from "/Avatar_1.png";
import Avatar_2 from "/Avatar_2.png";
import Avatar_3 from "/Avatar_3.png";
import rightArrow from "/rightArrow.svg";
import Footer from "../component/Footer";
import Line_93 from "/Line_93.png";
const LandingPage = () => {
  const [highlightUniqueFeature, setHighlightUniqueFeature] =
    useState("Income tracking");

  const HandleHighlightUniqueFeature = (name) => {
    setHighlightUniqueFeature(name);
  };
  const [activeFaq, setActiveFaq] = useState(0);
  const handleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "Is EduDesks suitable for schools of any size?",
      answer:
        "Yes! EduDesks is built to be flexible and scalable, making it ideal for schools of all sizes, from small institutions to large educational networks.",
    },

    {
      question: "How do I get started?",
      answer:
        "Sign up and follow the easy onboarding steps to set up your school’s financial system.",
    },

    {
      question: "How easy is it to set up EduDesks?",
      answer:
        "Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.",
    },

    {
      question: "What does EduDesks do?",
      answer:
        "EduDesk helps schools track income, manage expenses, and stay on budget with real-time insights and automated reports",
    },

    {
      question: "Who is EduDesks for?",
      answer:
        "EduDesk is for school administrators, finance managers, and staff looking to simplify financial management.",
    },

    {
      question: "Can I track income and expenses?",
      answer:
        "Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.",
    },
  ];

  return (
    <>
      <LandingPageHeader />
      <main className="landingPageContainer">
        {/* first part of page */}
        <section className="firstPart">
          <div className="divFirstPart">
            <h4>
              Effortless <span>Financial Management</span> for Schools
            </h4>
            <p>
              Manage your school&apos;s income and expenses seamlessly with our
              all-in-one platform. From tracking tuition payments to managing
              operational costs, ensure financial efficiency that supports
              academic excellence
            </p>
            <button>
              Create account <GoArrowRight />
            </button>
          </div>
        </section>

        {/* second part of page*/}
        <section className="secondPart">
          <img src={dashboard} alt="dashboard image" />
          <p></p>
        </section>

        {/* third part */}
        <section className="thirdPart">
          <div className="whatToGet">
            <h6>WHAT YOU GET FROM EDUDESKS </h6>
            <img src={Line_93} alt="Line_93" />
          </div>

          <div className="aboutUs">
            <div className="aboutImgContainer">
              <img src={Concepto} alt="finance image" />
            </div>

            <div className="aboutWriteUp">
              {/* <header className="about-write-up-header">
                <img src={Line_91} alt="Blue Line" />
                <h6>About Us</h6>
              </header> */}

              <h3>Manage school finances more efficiently with Edudesks</h3>
              <p>
                EduDesks is your comprehensive solution for seamless school
                financial management. Designed to simplify budgeting, tracking
                expenses, and managing payments, with features like automated
                fee collection, detailed financial reports, and real-time
                analytics, you can gain better control over your
                institution&apos;s finances
              </p>
            </div>
          </div>

          <div className="uniqueFeatures">
            {/* <header className="uniqueFeaturesUpper">
              <img src={Line_91} alt="Blue Line" />
              <h6>Unique Features</h6>
            </header> */}
            <div className="unique-features-h3">
              <h3>Powerful Features to Simplify School Financial Management</h3>

              <div className="btns">
                <button
                  onClick={() => {
                    HandleHighlightUniqueFeature("Income tracking");
                  }}
                  className={`${highlightUniqueFeature === "Income tracking" ? "highLightUnqiue" : ""}`}
                >
                  Income tracking
                </button>

                <button
                  onClick={() => {
                    HandleHighlightUniqueFeature("Expense tracking");
                  }}
                  className={`${highlightUniqueFeature === "Expense tracking" ? "highLightUnqiue" : ""}`}
                >
                  Expense tracking
                </button>

                <button
                  onClick={() => {
                    HandleHighlightUniqueFeature("fees Payment");
                  }}
                  className={`${highlightUniqueFeature === "fees Payment" ? "highLightUnqiue" : ""}`}
                >
                  Fees Payment
                </button>

                <button
                  onClick={() => {
                    HandleHighlightUniqueFeature("Analytics");
                  }}
                  className={`${highlightUniqueFeature === "Analytics" ? "highLightUnqiue" : ""}`}
                >
                  Analytics
                </button>
              </div>
            </div>

            {/* income tracking */}
            <div
              className="uniqueFeaturesLower"
              style={{
                display:
                  highlightUniqueFeature === "Income tracking"
                    ? "block"
                    : "none",
              }}
            >
              <div className="tracking-container">
                <div className="smaller-tracking-1">
                  <button>
                    <img src={cash_icon} alt="cash icon" />
                  </button>
                  <h5>Comprehensive income Tracking</h5>
                  <p>
                    Managing your finances is simpler with comprehensive income
                    tracking. Our platform provides a clear and detailed view of
                    your earnings, helping you monitor every income stream
                    effortlessly.
                  </p>
                </div>

                <div className="smaller-tracking-2">
                  <img
                    src={Monthly_Chart_1}
                    alt="Monthly Chart 1"
                    className="chart1"
                  />
                  <img
                    src={income_report_1}
                    alt="Income Report 1"
                    className="chart2"
                  />
                </div>
              </div>
            </div>

            {/* expense tracking */}
            <div
              className="uniqueFeaturesLower"
              style={{
                display:
                  highlightUniqueFeature === "Expense tracking"
                    ? "block"
                    : "none",
              }}
            >
              <div className="tracking-container">
                <div className="smaller-tracking-1">
                  <button>
                    <img src={cash_icon} alt="cash icon" />
                  </button>
                  <h5>Comprehensive Expense Tracking</h5>
                  <p>
                    EduDesk’s Expenses Tracking feature is designed to help
                    schools manage their spending with precision. This tool
                    gives schools full visibility into their financial outflows,
                    making it easier to plan, budget, and stay on top of their
                    financial health.
                  </p>
                </div>

                <div className="smaller-tracking-2 expense-tracking">
                  <img
                    src={Expense_overview}
                    alt="Expense overview"
                    className="chart1"
                  />
                </div>
              </div>
            </div>

            {/* fees Payment */}
            <div
              className="uniqueFeaturesLower"
              style={{
                display:
                  highlightUniqueFeature === "fees Payment" ? "block" : "none",
              }}
            >
              <div className="tracking-container">
                <div className="smaller-tracking-1">
                  <button>
                    <img src={cash_icon} alt="cash icon" />
                  </button>
                  <h5>School Fees Tracking</h5>
                  <p>
                    Edudesk simplifies school fee management with efficient
                    tracking tools designed for both schools and parents.With
                    our platform, schools can effortlessly monitor fee payments,
                    send automated reminders, and generate detailed reports.
                  </p>
                </div>

                <div className="smaller-tracking-2 expense-tracking">
                  <img
                    src={payment_status}
                    alt="payment_status"
                    className="chart1"
                  />
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div
              className="uniqueFeaturesLower"
              style={{
                display:
                  highlightUniqueFeature === "Analytics" ? "block" : "none",
              }}
            >
              <div className="tracking-container">
                <div className="smaller-tracking-1">
                  <button>
                    <img src={cash_icon} alt="cash icon" />
                  </button>
                  <h5>Monitor overall Performance</h5>
                  <p>
                    Edudesk helps you turn data into actionable information,
                    helping you track performance, identify trends, and make
                    data-driven decisions.
                  </p>
                </div>

                <div className="smaller-tracking-2">
                  <img
                    src={Monthly_Chart_2}
                    alt="Monthly Chart 2"
                    className="chart1"
                  />
                  <img
                    src={Monthly_Chart_3}
                    alt="Monthly_Chart_3"
                    className="chart2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* fourth part */}
        <section className="fourthPartContainer">
          <div className="fourthPartContainer2">
            {/* <header className="fourth-part-header">
              <img src={Line_91} alt="Blue Line" />
              <h6>How it Works</h6>
            </header> */}

            <div className="fourth-part-1">
              <h3>
                Manage your school’s income and Expenses in just a few simple
                steps
              </h3>

              <ul>
                <li>
                  <button>1</button>
                  <div>
                    <h6>Set Up Your Account</h6>
                    <p>
                      Quickly sign up and input your school’s basic details to
                      get started with our financial management too.
                    </p>
                  </div>
                </li>

                <li>
                  <button>2</button>
                  <div>
                    <h6>Verification of Account</h6>
                    <p>
                      Complete email verification by clicking a link sent to
                      your registered email.
                    </p>
                  </div>
                </li>

                <li>
                  <button>3</button>
                  <div>
                    <h6>Profile Setup</h6>
                    <p>
                      Complete additional profile information, such as uploading
                      a profile picture, imputing basic details and specify
                      membership type.
                    </p>
                  </div>
                </li>

                <li>
                  <button>4</button>
                  <div>
                    <h6>Access Your Dashboard</h6>
                    <p>
                      Once your account is created and verified, you’ll be
                      redirected to your dashboard where you can access
                      Edudesk’s features.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="fourth-part-2">
            <img src={climbing} alt="Man Climbing a Ladder" />
          </div>
        </section>

        {/* fifth part FAQ */}
        <section className="fifthPartContainer">
          <div className="fifthPartContainer2">
            <header>
              <div>
                <img src={Line_91} alt="Blue Line" />
                <h6>FAQs</h6>
              </div>

              <h3>Frequently asked questions</h3>
              <p>Popular questions asked about Edudesk</p>
            </header>

            <div className="faq-section">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => handleFaq(index)}
                  >
                    <h6>{faq.question}</h6>
                    <span>
                      {activeFaq === index ? (
                        <img src={minus_circle} alt="minus circle" />
                      ) : (
                        <img src={plus_circle} alt="plus circle" />
                      )}
                    </span>
                  </div>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="still-question">
              <div className="still-question-2">
                <div className="still-question-img-container">
                  <img src={Avatar_2} alt="Image 2" className="img_2" />
                  <img src={Avatar_1} alt="Image 1" className="img_1" />
                  <img src={Avatar_3} alt="Image 3" className="img_3" />
                </div>

                <div className="still-question-details">
                  <h6>Still have questions?</h6>
                  <p>
                    Can’t find the answer you’re looking for? Please chat to our
                    friendly team.
                  </p>
                </div>

                <button>
                  Get in touch <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default LandingPage;
