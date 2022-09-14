import React from 'react'

const Home = () => {
  return (
    <>
        <a className='btn btn-primary'>Start</a>

        {/* <!--====== PRELOADER PART START ======--> */}
        {/* <div className="preloader">
            <div className="loader_34">
                <div className="ytp-spinner" style={{display:'none'}}>
                    <div className="ytp-spinner-container">
                        <div className="ytp-spinner-rotator">
                            <div className="ytp-spinner-left">
                                <div className="ytp-spinner-circle"></div>
                            </div>
                            <div className="ytp-spinner-right">
                                <div className="ytp-spinner-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <!--====== PRELOADER ENDS START ======--> */}

        {/* <!--====== HEADER PART START ======--> */}

        <header id="home" className="header-area pt-100">

            <div className="shape header-shape-one">
                <img src="assets/images/banner/shape/shape-1.png" alt="shape"/>
            </div> 

            <div className="shape header-shape-tow animation-one">
                <img src="assets/images/banner/shape/shape-2.png" alt="shape"/>
            </div> 

            <div className="shape header-shape-three animation-one">
                <img src="assets/images/banner/shape/shape-3.png" alt="shape"/>
            </div> 

            <div className="shape header-shape-fore">
                <img src="assets/images/banner/shape/shape-4.png" alt="shape"/>
            </div> 

            <div className="navigation-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                    <img src="assets/images/logo.png" alt="Logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#service">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#project">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul> 
                                </div>
                                <div className="navbar-btn ml-20 d-none d-sm-block">
                                    <a className="main-btn" href="#"><i className="lni-phone"></i> +98 222 4444</a>
                                </div>
                            </nav>
                        </div>
                    </div> 
                </div> 
            </div> 

            <div className="header-banner d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-sm-10">
                            <div className="banner-content">
                                <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Your trusted</h4>
                                <h1 className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s"><span>Interior</span> Design Partner for Home or Office</h1>
                                <a className="banner-contact mt-25 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.3s" href="#contact">Get a Free Quote</a>
                            </div> 
                        </div>
                    </div>
                </div> 
                <div className="banner-image bg_cover" style={{backgroundImage: 'url("assets/images/banner/banner-image.png")'}}></div>
            </div> 
        </header>

    </>
  )
}

export default Home