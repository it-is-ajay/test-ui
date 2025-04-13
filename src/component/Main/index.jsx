import { useEffect, useState } from "react"

export default function Main() {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [navbarStatus, setNavbarStatus] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (navbarStatus) {
                if (navHeight < 35) {
                    setNavHeight(navHeight + 1);
                }
            } else {
                if (navHeight > 0) {
                    setNavHeight(navHeight - 1);
                }
            }
        }, 1)
        return () => clearInterval(interval);
    }, [navbarStatus, navHeight])

    const handleNavbarToggle = () => {
        if (navbarVisible) {
            setNavbarStatus(false)
            setTimeout(() => {
                setNavbarVisible(false);
            }, 400)
        } else {
            setNavbarStatus(true)
            setNavbarVisible(true)
        }
    }
    return <>
        <div className="mc">
            <section className="mc_top">
                <nav className="mc_top_navRes">
                    <div className="mc_top_navRes_logo">
                        <label>LOGO</label>
                    </div>
                    <div className="mc_top_navRes_toggle">
                        <input onChange={handleNavbarToggle} type="checkbox" id="navbar-toggle" />
                        <label htmlFor="navbar-toggle">☰</label>
                    </div>
                </nav>
                <nav className="mc_top_nav">
                    <div className="mc_top_nav_left">
                        <label>LOGO</label>
                    </div>
                    <div className="mc_top_nav_right">
                        <ul class="mc_top_nav_right_list">
                            <li >
                                Product
                            </li>
                            <li>
                                Tool
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Help
                            </li>
                        </ul>
                        <button className="mc_top_nav_right_login hover-style">
                            Login
                        </button>
                        <button className="mc_top_nav_right_signup hover-style">
                            SignUp
                        </button>
                    </div>
                </nav>
            </section>
            {
                navbarVisible && <div style={{
                    "--nav-responsive-height": `${navHeight}%`
                }} className="mc_responsive">
                    <div className="mc_responsive_link">
                        Product
                    </div>
                    <div className="mc_responsive_link">
                        Tool
                    </div>
                    <div className="mc_responsive_link">
                        About
                    </div>
                    <div className="mc_responsive_link">
                        Pricing
                    </div>
                    <div className="mc_responsive_link">
                        Help
                    </div>
                    <div className="mc_responsive_link resLogin">
                        Login <i class="bi bi-box-arrow-in-right" />
                    </div>
                </div>
            }
            <section className="mc_bottom">
                <div className="mc_bottom_sec">
                    <div className='mc_bottom_sec_left'>
                        <div>
                            <label className="mc_bottom_sec_left_label">
                                What is Stock & Share ISA ?
                            </label>
                            <p className="ms-2 me-2">
                                A stocks and Shares ISA is  a tax-efficient account for investing in stocks, bonds, ETF's and more. Profits, dividends and interest are tax-free, making it deal for long-term wealth growth.
                                <br /><br />This tax year the ISA allowance is E20,000.
                            </p>
                        </div>
                        <div>
                            <button className="hover-style">
                                Start Investing Now
                                &nbsp;<i className="bi bi-arrow-right" />
                            </button>
                            <p className="ms-2 me-2 mb-5">
                                Investing comes with inherent risks, meaning the value of your investments can go up or down, and you may get back less than you originally invested.
                            </p>
                        </div>
                    </div>
                    <div className='mc_bottom_sec_right'>
                        <img className="mc_bottom_sec_right_img" src="main-image.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    </>
}