import React, { useState } from 'react';

const Home = () => {
    const [ready, setReady] = useState(false);

  return (
    <>
        {/* <!--====== PRELOADER PART START ======--> */}

        {/* <div className="preloader"
            style={{display: `${ready ? "none" : "box"}`}}
        >
            <div className="loader_34">
                <div className="ytp-spinner">
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
        <header id="home" className="header-area pt-100 py-5">

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

            <div className="navigation-bar sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" style={{color:'red'}} href="#">
                                    <img src="assets/images/logo-2.png" alt="Logo"/>
                                    {/* COMPANY LOGO */}
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
                                    {/* <!-- <a className="main-btn" href="#"><i className="lni-phone"></i> +98 222 4444</a> --> */}
                                    <a className="main-btn" href="#">Register Now</a>
                                </div>
                            </nav> 
                        </div>
                    </div> 
                </div> 
            </div> 

            <div className="header-banner d-flex align-items-center my-5">
                {/* <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-9 col-sm-10">
                            <div className="banner-content">
                                <h1 className='text-center'>Done With Dating ? <br/> Find Your Forever Person</h1>
                                <div className="my-5">
                                    <form className="d-flex justify-content-around align-items-center" >
                                        <div className="d-flex flex-column">
                                            <label className="px-2">I'm looking for a</label>
                                            <select className="custom-select px-6">
                                                <option>Woman</option>
                                                <option>Man</option>
                                            </select>
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <label >aged</label>
                                            <div className="d-flex">
                                                <select className="custom-select px-4">
                                                    <option>20</option>
                                                    <option>25</option>
                                                </select>
                                                <div className="px-2">to</div>
                                                <select className="custom-select px-4">
                                                    <option>20</option>
                                                    <option>25</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <label>of religion</label>
                                            <select className="custom-select px-4">
                                                <option>Select</option>
                                                <option>Hindu</option>
                                                <option>Muslim</option>
                                            </select>
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <label className="form-label" aria-label=".form-select">
                                                and mother tongue
                                            </label>
                                            <select className="custom-select px-5">
                                                <option>Select</option>
                                                <option>Hindi</option>
                                                <option>Marathi</option>
                                            </select>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <button className="btn btn-danger mt-4" style={{width:'160px', height:'40px'}}>
                                                Let's begin
                                            </button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>  */}

                <div className="d-flex flex-column py-20 container foreground min-vh-100">
                    <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
                        <div className="col-md-10 col-lg-6 col-xl-5 inverted mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="lh-sm mb-4">Done With Dating ? <br/>Find Your Forever Person</h1>
                            <p className="lead text-secondary mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                </p>
                            {/* <a href="" className="btn btn-green btn-with-icon rounded-pill btn-lg">Get Started <i className="bi bi-arrow-right"></i></a> */}
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-5">
                            <div className="card bg-opaque-black">
                                <div className="card-body bg-white">
                                <form action="#" className="row g-2">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-floating">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="floatingInput-1" 
                                            placeholder="Your Name"
                                            // value={name} 
                                            // onChange={(e) => setName(e.target.value)}
                                        />
                                            <label htmlFor="floatingInput-1" className='pl-2'>Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="">
                                            <select className='custom-select' 
                                                // value={type} 
                                                // onChange={(e) => setType(e.target.value)}
                                            >
                                                <option>Select gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput-2" placeholder="Your Email"
                                            // value={email} 
                                            // onChange={(e) => setEmail(e.target.value)}
                                            />
                                        <label htmlFor="floatingInput-2" className='pl-2'>Email Address</label>
                                    </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingInput-3" placeholder="name@example.com"
                                            // value={password} 
                                            // onChange={(e) => setPassword(e.target.value)}
                                            />
                                        <label htmlFor="floatingInput-3" className='pl-2'>Password</label>
                                    </div>
                                    </div>
                                    
                                    <div className="col-lg-12 mb-3">
                                    <a href="" className="btn btn-info btn-lg" 
                                        // onClick={handleSubmit}
                                    >
                                        Register Now
                                    </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- <div className="banner-image bg_cover" style="background-image: url(assets/images/banner/banner-image.png)"></div> --> */}
            </div>

        </header>

        <section id="about" className="about-area pt-80 pb-130 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-image mt-50 clearfix">
                            <div className="single-image float-left">
                                <img src="assets/images/about/about-1.png" alt="About"/>
                            </div> 
                            <div data-aos="fade-right" className="about-btn">
                                <a className="main-btn" href="#"><span>27</span> Years Experience</a>
                            </div>
                            <div className="single-image image-tow float-right">
                                <img src="assets/images/about/about-2.png" alt="About"/>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mt-45">
                            <h4 className="about-welcome">About Us </h4>
                            <h3 className="about-title mt-10">Why Marriagebook ?</h3>
                            <p className="mt-25">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                <br/> <br/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <a className="main-btn mt-25" href="#">learn more</a>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>

        <section id="service" className="services-area pt-125 pb-130 gray-bg py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-20">
                            <h5 className="sub-title mb-15">Our Services</h5>
                            <h2 className="title">What We Do?</h2>
                        </div> 
                        {/* <!-- section title --> */}
                    </div>
                </div> {/* <!-- row --> */}
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="services-icon">
                                <i className="lni-paint-roller"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Interior Design</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                            <div className="services-icon">
                                <i className="lni-blackboard"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Design Consultancy</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                            <div className="services-icon">
                                <i className="lni-home"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Residential Design</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="services-icon">
                                <i className="lni-briefcase"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Commercial Design</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                            <div className="services-icon">
                                <i className="lni-handshake"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Hospitality Design</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                            <div className="services-icon">
                                <i className="lni-grow"></i>
                            </div>
                            <div className="services-content mt-15">
                                <h4 className="services-title">Co-working Space Design</h4>
                                <p className="mt-20">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                            </div>
                        </div> {/* <!-- single services --> */}
                    </div>
                </div> {/* <!-- row --> */}
            </div> {/* <!-- container --> */}
        </section>

        <section id="project" className="project-area pt-125 pb-130 py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-50">
                            <h5 className="sub-title mb-15">Featured Works</h5>
                            <h2 className="title">Projects You May Love</h2>
                        </div> 
                    </div>
                </div> 
            </div>
            <div className="container-fluid">
                <div className="row project-active">
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-1.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-2.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-3.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-4.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-5.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-2.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-project">
                            <div className="project-image">
                                <img src="assets/images/project/p-4.jpg" alt="Project"/>
                            </div>
                            <div className="project-content">
                                <a className="project-title" href="#">Home Interior Design</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="team" className="team-area pt-125 pb-130 gray-bg py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-20">
                            <h5 className="sub-title mb-15">Meet The Team</h5>
                            <h2 className="title">Our Expert Designers</h2>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="team-image">
                                <img src="assets/images/team/team-1.jpg" alt="Team"/>
                            </div>
                            <div className="team-content">
                                <h4 className="team-name"><a href="#">Rob Hope</a></h4>
                                <span className="sub-title">CEO and Founder</span>
                                <ul className="social mt-25">
                                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                            <div className="team-image">
                                <img src="assets/images/team/team-2.jpg" alt="Team"/>
                            </div>
                            <div className="team-content">
                                <h4 className="team-name"><a href="#">Patric Green</a></h4>
                                <span className="sub-title">Chief Designer</span>
                                <ul className="social mt-25">
                                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                            <div className="team-image">
                                <img src="assets/images/team/team-3.jpg" alt="Team"/>
                            </div>
                            <div className="team-content">
                                <h4 className="team-name"><a href="#">Daryl Dixon</a></h4>
                                <span className="sub-title">Consultant</span>
                                <ul className="social mt-25">
                                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                            <div className="team-image">
                                <img src="assets/images/team/team-4.jpg" alt="Team"/>
                            </div>
                            <div className="team-content">
                                <h4 className="team-name"><a href="#">Mark Parker</a></h4>
                                <span className="sub-title">Intern</span>
                                <ul className="social mt-25">
                                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </section>

        <section id="testimonial" className="testimonial-area pt-130 pb-130 py-5">
            <div className="shape shape-one">
                <img src="assets/images/testimonial/shape.png" alt="testimonial"/>
            </div>
            <div className="shape shape-tow">
                <img src="assets/images/testimonial/shape.png" alt="testimonial"/>
            </div>
            <div className="shape shape-three">
                <img src="assets/images/testimonial/shape.png" alt="testimonial"/>
            </div>
            <div className="container">
                <div className="testimonial-bg bg_cover pt-80 pb-80" style={{backgroundImage: 'url("assets/images/testimonial/testimonial-bg.jpg")'}}>
                    <div className="row">
                        <div className="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                            <div className="testimonial-active">
                                <div className="single-testimonial text-center">
                                    <div className="testimonial-image">
                                        <img src="assets/images/testimonial/t-1.jpg" alt="Testimonial"/>
                                        <div className="quota">
                                            <i className="lni-quotation"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content mt-20">
                                        <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                        <h5 className="testimonial-name mt-15">Fajar</h5>
                                        <span className="sub-title">Random Customer</span>
                                    </div>
                                </div> 
                                <div className="single-testimonial text-center">
                                    <div className="testimonial-image">
                                        <img src="assets/images/testimonial/t-2.jpg" alt="Testimonial"/>
                                        <div className="quota">
                                            <i className="lni-quotation"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content mt-20">
                                        <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                        <h5 className="testimonial-name mt-15">Alina</h5>
                                        <span className="sub-title">Tesla Motors</span>
                                    </div>
                                </div> 
                                <div className="single-testimonial text-center">
                                    <div className="testimonial-image">
                                        <img src="assets/images/testimonial/t-3.jpg" alt="Testimonial"/>
                                        <div className="quota">
                                            <i className="lni-quotation"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content mt-20">
                                        <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                        <h5 className="testimonial-name mt-15">Celina</h5>
                                        <span className="sub-title">CEO, Alo</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
        </section>

        <section id="contact" className="contact-area pt-125 pb-130 gray-bg py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-20">
                            <h5 className="sub-title mb-15">Contact us</h5>
                            <h2 className="title">Get In touch</h2>
                        </div> 
                    </div>
                </div> 
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-form form-group">
                                            <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required"/>
                                            <div className="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-group">
                                            <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required"/>
                                            <div className="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-group">
                                            <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required"/>
                                            <div className="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-group">
                                            <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required"/>
                                            <div className="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-form form-group">
                                            <textarea placeholder="Your Mesaage" name="message" data-error="Please,leave us a message." required="required"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <p className="form-message"></p>
                                    <div className="col-md-12">
                                        <div className="single-form form-group text-center">
                                            <button type="submit" className="main-btn">send message</button>
                                        </div> 
                                    </div>
                                </div> 
                            </form>
                        </div> 
                    </div>
                </div> 
            </div> 
        </section>

        <section id="map" className="map-area py-5">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
            <div className="map-bg bg_cover d-none d-lg-block" style={{backgroundImage: 'url("assets/images/map/map-bg.jpg")'}}></div>
        </section>

        <footer id="footer" className="footer-area py-5">
            <div className="footer-widget pt-80 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-8">
                            <div className="footer-logo mt-50">
                                <a href="#">
                                    <img src="assets/images/logo-2.png" alt="Logo"/>
                                </a>
                                <ul className="footer-info">
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="lni-phone-handset"></i>
                                            </div>
                                            <div className="info-content">
                                                <p>+1880 123 456 789</p>
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="lni-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <p>contact@yourmail.com</p>
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="lni-map"></i>
                                            </div>
                                            <div className="info-content">
                                                <p>1234 Avenue New York, US</p>
                                            </div>
                                        </div> 
                                    </li>
                                </ul>
                                <ul className="footer-social mt-20">
                                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni-google"></i></a></li>
                                    <li><a href="#"><i className="lni-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-link mt-45">
                                <div className="f-title">
                                    <h4 className="title">Essential Links</h4>
                                </div>
                                <ul className="mt-15">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-link mt-45">
                                <div className="f-title">
                                    <h4 className="title">Services</h4>
                                </div>
                                <ul className="mt-15">
                                    <li><a href="#">Product Design</a></li>
                                    <li><a href="#">Research</a></li>
                                    <li><a href="#">Office Management</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-8">
                            <div className="footer-newsleter mt-45">
                                <div className="f-title">
                                    <h4 className="title">Newsleter</h4>
                                </div>
                                <p className="mt-15">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                                <form action="#">
                                    <div className="newsleter mt-20">
                                        <input type="email" placeholder="info@contact.com"/>
                                        <button><i className="lni-angle-double-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright text-center">
                                <p>Template by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
        </footer>
    </>
  )
}

export default Home