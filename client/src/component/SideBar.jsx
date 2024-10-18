import analytics from "/analytics.png";
import class_icons from "/class_icons.png";
import dashboard_icons from "/dashboard_icons.png";
import remit_payment from "/remit_payment.png";
import expenses from "/expenses.png";
import income from "/income.png";
import salary from "/salary.png";
import settings from "/settings.png";
import student from "/student.png";
import employee from "/employee.png";
import wallet from "/wallet.png";
import log_out from "/log_out.png";
import Ellipse_3 from "/Ellipse_3.png";
import arrow_down_0 from "/arrow_down_0.png";
import LandingPageIcon from '/LandingPageIcon.svg';
const SideBar = ()=>{


    return(
        <>
            <aside className="side-bar">
                <section className="section-side-bar">

                    {/* header part */}
                    <header className="header-side-bar">
                        <img src={LandingPageIcon} alt="LandingPageIcon" className="landing-icon"/>
                        <img src={Ellipse_3} alt="Ellipse_3" className="ellipse-icon"/>
                    </header>

                    {/* body 'part */}
                    <section className="side-bar-body">

                        <div className="side-bar-body-1">
                            {/* 1 */}
                        <div className="side-container-div">
                            <img src={dashboard_icons} alt="dashboard_icons" />
                            <p>Dashboard</p>
                        </div>

                        {/* 2 */}
                        <div className="side-container-div">
                            <img src={student} alt="student" />
                            <p>Student</p>
                        </div>

                        {/* 3 */}
                        <div className="side-container-div">
                            <img src={class_icons} alt="class_icons" />
                            <p>Class</p>
                        </div>

                        {/* 4 */}
                        <div className="side-container-div side-container-2">
                            <div className="employees-div">
                            <img src={employee} alt="employee" />
                            <p>Employees</p>
                            </div>
                            <img src={arrow_down_0} alt="arrow_down" />
                        </div>

                        {/* 5 */}
                        <div className="side-container-div">
                            <img src={wallet} alt="wallet" />
                            <p>Wallet</p>
                        </div>

                        {/* 6 */}
                        <div className="side-container-div">
                            <img src={remit_payment} alt="remit_payment" />
                            <p>Remit Payment</p>
                        </div>

                        {/* 7 */}
                        <div className="side-container-div">
                            <img src={salary} alt="salary" />
                            <p>Salary</p>
                        </div>

                        {/* 8 */}
                        <div className="side-container-div side-container-2">
                            <div className="income">
                            <img src={income} alt="income" />
                            <p>Income</p>
                            </div>
                            <img src={arrow_down_0} alt="arrow_down" />
                        </div>

                        {/* 9 */}
                        <div className="side-container-div">
                            <img src={expenses} alt="expenses" />
                            <p>Expenses</p>
                        </div>

                        {/* 10 */}
                        <div className="side-container-div">
                            <img src={analytics} alt="analytics" />
                            <p>Analytics</p>
                        </div>
                        </div>

                        <div className="side-bar-body-2">
                            {/* 1 */}
                        <div className="side-container-div">
                            <img src={settings} alt="settings" />
                            <p>Settings</p>
                        </div>

                        {/* 2 */}
                        <div className="side-container-div">
                            <img src={log_out} alt="log_out" />
                            <p>Log-out</p>
                        </div>
                        </div>
                    </section>
                </section>
            </aside>
        </>
    )
}
export default SideBar