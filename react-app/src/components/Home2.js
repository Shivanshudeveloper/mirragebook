import React from 'react';
import { Radio } from '@mui/material';
import { pink } from '@mui/material/colors';


const Home2 = () => {
  return (
    <>
        <section style={{backgroundImage:"url('/assets/images/bg-img-1.jpg')", color:'white', paddingBottom:'140px'}}>
            {/* <div className='image-container'>
                <img src='/assets/images/bg-img-1.jpg'/>
            </div>
            <div className='image-container'>
                <img src='/assets/images/bg-img-2.jpg' style={{display:'none'}}/>
            </div> */}
            <div>
                <nav className='d-flex justify-content-between mb-4' style={{color:"white"}}>
                    <ul className='p-2 m-2'>
                        <li className='p-2 m-2'>
                            <a style={{color:"white", fontSize:"30px"}} href='/'>
                                <img src='/assets/images/logo-2.png' alt='Marriagebook' />
                            </a>
                        </li>
                    </ul>
                    <ul className='d-flex p-2 m-2'>
                        <li className='p-2 m-2'>
                            <a style={{color:"white"}} href='/'>
                                TOUR
                            </a>
                        </li>
                        <li className='p-2 m-2'>
                            <a style={{color:"white"}} href='/'>
                            DATING  ADVICE
                            </a>
                        </li>
                        <li className='m-2'>
                            <a className='p-2' style={{color:"white", border:'2px solid white'}} href='/'>
                                LOGIN
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div style={{color:'white'}} className="pb-5">
                <form style={{maxWidth:"480px", color:'white'}}>
                    <h2 style={{color:'white', textAlign:'center'}}>Start free today</h2>
                    <div className='form d-flex p-2 m-2 justify-content-around'>
                        <div className='iAm' style={{}}>
                            <h4 style={{color:'white'}}>I am</h4>
                            <div className='mt-2 d-flex' style={{color:'black', backgroundColor:'white', alignItems:"center", borderRadius:'8px', minWidth:'160px'}}>
                                <Radio
                                    // {...controlProps('e')}
                                    sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    }}
                                />
                                a woman
                            </div>
                            <div className='mt-2 d-flex' style={{color:'black', backgroundColor:'white', alignItems:"center", borderRadius:'8px', minWidth:'160px'}}>
                                <Radio color='success'/>
                                a man
                            </div>
                        </div>
                        
                        <div className='lookingFor'>
                            <h4 style={{color:'white'}}>Looking For</h4>
                            <div className='mt-2 d-flex' style={{color:'black', backgroundColor:'white', alignItems:"center", borderRadius:'8px', minWidth:'160px'}}>
                                <Radio
                                    // {...controlProps('e')}
                                    sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    }}
                                />
                                a woman
                            </div>
                            <div className='mt-2 d-flex' style={{color:'black', backgroundColor:'white', alignItems:"center", borderRadius:'8px', minWidth:'160px'}}>
                                <Radio color='success'/>
                                a man
                            </div>                                                        
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-lg' style={{color:"white", backgroundColor:'#ef6054', minWidth:'280px'}}>
                            JOIN NOW
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <div>
            <div className='d-flex'>
                <div style={{backgroundColor:"#1A5F78", flex:'0.3333'}} className='pb-3'>
                    <h4 className='p-3' style={{color:'white'}}>#1 TRUSTED DATING APP</h4>
                    <p className='p-3' style={{color:'white'}}>
                    2020 Survey of 1,067 Respondents from the US, UK, Canada and Australia
                    </p>
                </div>
                <div style={{backgroundColor:"#617DC6", flex:'0.3333'}}>
                <h4 className='p-3' style={{color:'white'}}>#1 TRUSTED DATING APP</h4>
                    <p className='p-3' style={{color:'white'}}>
                    2020 Survey of 1,067 Respondents from the US, UK, Canada and Australia
                    </p>
                </div>
                <div style={{backgroundColor:"#06828c", flex:'0.3333'}}>
                <h4 className='p-3' style={{color:'white'}}>#1 TRUSTED DATING APP</h4>
                    <p className='p-3' style={{color:'white'}}>
                    2020 Survey of 1,067 Respondents from the US, UK, Canada and Australia
                    </p>
                </div>
            </div>
        </div>

        <div className='p-5'>
            <h3 className='pb-5' style={{textAlign:'center'}}>
                Our dating site helps millions find real love
            </h3>
            <div className='d-flex'>
                <div className='p-3' style={{flex:'0.25'}}>
                    <img src='/assets/images/2-million.jpg'/>
                    <p>
                        <b>
                            OVER 2 MILLION HAVE FOUND LOVE
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
                <div className='p-3' style={{flex:'0.25'}}>
                    <img src='/assets/images/2-million.jpg'/>
                    <p>
                        <b>
                            OVER 2 MILLION HAVE FOUND LOVE
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
                <div className='p-3' style={{flex:'0.25'}}>
                    <img src='/assets/images/2-million.jpg'/>
                    <p>
                        <b>
                            OVER 2 MILLION HAVE FOUND LOVE
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
                <div className='p-3' style={{flex:'0.25'}}>
                    <img src='/assets/images/2-million.jpg'/>
                    <p>
                        <b>
                            OVER 2 MILLION HAVE FOUND LOVE
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center'}} className='mb-4'>
                    Introducing: A new eharmony experience
                </h3>
                <p className='mb-4' style={{textAlign:'center'}}>Your search for a great relationship has never been easier with groundbreaking overhaul of the eharmony you know and trust.</p>
                <p style={{textAlign:'center'}} className='mb-4'>GET A SNEAK PEEK</p>
            </div>
        </div>

        <div >
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center'}} className='mb-4'>
                    Compatibility Counts
                </h3>
                <div className='d-flex'>
                    <div style={{flex:"0.5"}}>
                        <img src='/assets/images/97.jpg'/>
                    </div>
                    <div style={{flex:"0.5"}}>
                        <p className='mb-4'>What happens when you apply scientific research to dating behavior? A whole lotta love! But this isn’t destiny, it’s deliberate. That’s why every 14 minutes, someone finds love on eharmony.</p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center'}} className='mb-4'>
                Quality Singles, Just Like You
                </h3>
                <div className='d-flex'>
                    <div style={{flex:"0.5"}}>
                        <p className='mb-4'>Like you, they are tired of dating games. You can have complete confidence that all of your compatible matches are looking for the same thing you are. Love that lasts.
                        </p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                    <div style={{flex:"0.5"}} className='d-flex justify-content-center'>
                        <img src='/assets/images/QualitySingles.jpg'/>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundImage:"url('/assets/images/premium_bg.svg')", objectFit:'cover'}}>
            <div className='p-5'>
                <h3 style={{textAlign:'center', color:'white'}} className='mb-4'>
                    We’re Here For You
                </h3>
                <p style={{color:'white', textAlign:'center'}} className='mb-4'>
                Signing up for eharmony is the first step in finding your next great relationship. From profile tips to sharing your success story, we are here to support you in your journey for love.
                </p>
                <p style={{color:'white', textAlign:'center'}} className='mb-4'>WE’RE AVAILABLE 24/7, 365 DAYS A YEAR</p>

                <div style={{color:'white', textAlign:'center'}} className='mb-4'>
                    CONTACT US
                </div>
            </div>
        </div>

        <div >
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center'}} className='mb-4'>
                The Real Deal
                </h3>
                <div className='d-flex'>
                    <div style={{flex:"0.5"}}>
                        <img src='/assets/images/couples.jpg'/>
                    </div>
                    <div style={{flex:"0.5"}}>
                        <p className='mb-4'>Over the course of our 20+ years in the relationship business, millions of couples have found lasting love. Give us a try when you’re ready for something real.</p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center'}} className='mb-4'>
                The #1 Trusted Dating App
                </h3>
                <div className='d-flex'>
                    <div style={{flex:"0.5"}}>
                        <p className='mb-4'>We have 20+ years of trusted matchmaking under our belts, with a dedicated Trust and Safety team by your side.
                        </p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                    <div style={{flex:"0.5"}} className='d-flex justify-content-center'>
                        <img src='/assets/images/QualitySingles.jpg'/>
                    </div>
                </div>
            </div>
        </div>

        <footer style={{backgroundColor:'#06828c', color:'white'}}>
            <div className='d-flex p-5'>
                <div style={{flex:'0.24'}}>
                    <ul>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Home2