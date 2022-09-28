import React, { useState,useEffect } from 'react';
import { Radio } from '@mui/material';
import { pink } from '@mui/material/colors';
import { fontFamily } from '@mui/system';
const Home2 = () => {
  const[stickyClass,setStickyClass]=useState("position-relative");
  useEffect(() => {
    window.addEventListener("scroll",updateClass); 
    return () => {
     window.removeEventListener("scroll",updateClass);  
    }
  }, [])
  const updateClass=()=>
  {
        let windowHeight = window.scrollY;
        windowHeight > 600? setStickyClass('position-fixed w-100 m-0 bg-info text-white px-5') : setStickyClass('position-relative'); 
    }
    return (
    <>
        <section style={{backgroundImage:"url('/assets/images/pexels-j-carter-254069.jpg')", color:'white', paddingBottom:'140px'}}>
            {/* <div className='image-container'>
                <img src='/assets/images/bg-img-1.jpg'/>
            </div>
            <div className='image-container'>
                <img src='/assets/images/bg-img-2.jpg' style={{display:'none'}}/>
            </div> */}
            <div>
                <nav className={`d-flex justify-content-between ${stickyClass} h-4 align-items-center`} style={{color:"white",margin:'auto 100px'}}>
                    <ul className='p-2'>
                        <li className='p-1'>
                            <a style={{color:"white", fontSize:"30px",fontWeight:'400'}} href='/'>
                              
                                 {/* <img src='https://images.ctfassets.net/czwjnyf8a9ri/6vbYI3pLTa19TKvECeYUmd/bba9ee9e94e5de7d45317946c6bd5c82/logo-eharmony.png?w=60' alt='Marriagebook' />  */}
                                 <section style={{backgroundImage:"url('/assets/images/logo-2.png')", color:'white', paddingBottom:'140px', backgroundRepeat:'no-repeat'}}></section>
                            marriagebook
                            </a>
                        </li>
                    </ul>
                    <ul className='d-flex p-2 m-2' style={{letterSpacing:'1.4px',
    lineHeight:'1',fontSize:'11px',fontWeight:"700"}}>
                        <li className='p-2 m-2'>
                            <a style={{color:"white", fontFamily:"Lato"}} href='/'>
                                TOUR
                            </a>
                        </li>
                        <li className='p-2 m-2'>
                            <a style={{color:"white",fontWeight:'600',fontFamily:'Lato'}} href='/'>
                            DATING  ADVICE
                            </a>
                        </li>
                        <li className='m-2'>
                            <a className='p-2' style={{color:"white", border:'2px solid white',fontWeight:'600',fontFamily:'Lato'}} href='/'>
                                LOGIN
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div style={{color:'white'}} className="pb-5">
                <form style={{maxWidth:"480px", color:'white'}}>
                    <h2 style={{color:'white', textAlign:'center',fontFamily:'Lato', fontSize:'28px',letterSpacing:'1.4px', fontWeight:"600",textDecoration:'underline',textDecorationThickness: '1px'}}>START <em style={{color:'#ffcb4a',fontFamily:'arial'}}>free </em>TODAY</h2>
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
                                <Radio 
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    }}
                                />
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
                        <button className='btn btn-lg' style={{color:"white",fontFamily:"Lato",fontWeight:"600",fontSize:'15px',backgroundImage:'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)', minWidth:'280px'}}>
                            JOIN NOW
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <div>
            <div className='d-flex flex-wrap' style={{fontSize:'20px',letterSpacing:'1.4px',
    lineHeight:'1.3'}}>
                <div style={{backgroundColor:"#1a5f78", flex:'0.3333', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}} className='pb-3'>
                    <div style={{width:'70px', height:'70px',marginTop:'20px'}}>
                     <img style={{width:'100%',height:'100%'}} src='https://images.ctfassets.net/czwjnyf8a9ri/6vbYI3pLTa19TKvECeYUmd/bba9ee9e94e5de7d45317946c6bd5c82/logo-eharmony.png?w=60'/>   
                     <p>Why Marriagebook?</p>
                    </div >
                    <h4 className='p-3' style={{color:'white', fontFamily:"Lato,sans-serif",fontWeight:'600'}}><span style={{marginRight:'10px',color:'#ffcb4a'}}>
                        #1 TRUSTED 
                        </span>
                           DATING APP
                         </h4>
                    <p className='p-3' style={{color:'white',textAlign:'center',lineHeight:'1.5',fontSize:'12px'}}>
                    2020 Survey of 1,067 Respondents from the US, UK, Canada and Australia
                    <p>Done with Dating?

Find your forever person now</p>
                    </p>
                </div>
                <div style={{backgroundColor:"#617DC6", flex:'0.3333', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                <div style={{width:'70px', height:'70px',marginTop:'20px'}}>
                     <img style={{width:'100%',height:'100%'}} src='https://images.ctfassets.net/czwjnyf8a9ri/6vbYI3pLTa19TKvECeYUmd/bba9ee9e94e5de7d45317946c6bd5c82/logo-eharmony.png?w=60'/>   
                    </div>
                <h4 className='p-3' style={{color:'white',fontFamily:"Lato,sans-serif",fontWeight:'600',textAlign:'center'}}>EVERY <span style={{marginRight:'10px',color:'#ffcb4a'}}>14 MINUTES</span>SOMEONE FINDS LOVE ON MARRIAGEBOOK</h4>
                    <p className='p-3' style={{color:'white',textAlign:'center',textAlign:"center",lineHeight:'1.5',fontSize:'12px'}}>
                    <p>Marriage-minded professionals</p>
                    </p>
                </div>
                <div style={{backgroundColor:"#1a5f78", flex:'0.3333', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                <div style={{width:'70px', height:'70px',marginTop:'20px'}}>
                     <img style={{width:'100%',height:'100%'}} src='https://images.ctfassets.net/czwjnyf8a9ri/6vbYI3pLTa19TKvECeYUmd/bba9ee9e94e5de7d45317946c6bd5c82/logo-eharmony.png?w=60'/>   
                    </div >
                <h4 className='p-3' style={{color:'white',fontFamily:"Lato,sans-serif",fontWeight:'600'}}><span style={{marginRight:'10px',color:'#ffcb4a'}}>HIGHEST QUALITY </span>DATING POOL</h4>
                    <p className='p-3' style={{color:'white',textAlign:'center',lineHeight:'1.5',fontSize:'12px'}}>
                    2018 Survey of 1,616  U.S. Singles
                    </p>
                </div>
            </div>
        </div>

        <div className='p-5'>
            <h3 className='pb-5' style={{textAlign:'center',fontFamily:"Lato",fontWeight:'500'}}>
                Our dating site helps millions find real love
                <p>Marriagebook helps people globally to find their one</p>
            </h3>
            <div className='d-flex justify-content-around'>
                <div className='p-3' style={{flex:'0.15',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',alignContent:'center'}}>
                    <img src='/assets/images/2-million.jpg' style={{width:'130px', height:'auto'}} />
                    <p style={{textAlign:'center'}}>
                        <b>
                            OVER 2 MILLION HAVE FOUND LOVE
                        </b>
                    </p>
                    <p>… could you be next?</p>
                    <p>Trust Marriagebook to make the right match</p>
                </div>
                <div className='p-3' style={{flex:'0.15',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',alignContent:'center'}}>
                    <img src='/assets/images/02-female-male.webp' style={{width:'130px', height:'auto'}} />
                    <p style={{textAlign:'center'}}>
                        <b>
                        51% MEN<br/>
                        49% WOMEN
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
                <div className='p-3' style={{flex:'0.15',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',alignContent:'center'}}>
                    <img src='/assets/images/03-success-rate.webp' style={{width:'130px', height:'auto'}} />
                    <form></form>
                    <p style={{textAlign:'center'}}>
                        <b>
                        SITE MOST LIKELY TO LEAD TO HAPPY RELATIONSHIPS
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
                <div className='p-3' style={{flex:'0.15',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',alignContent:'center'}}>
                    <img src='/assets/images/04-academic-rate.webp' style={{width:'130px', height:'auto'}} />
                    <p style={{textAlign:'center'}}>
                        <b>
                        2.3 MILLION MESSAGES SENT WEEKLY
                        </b>
                    </p>
                    <p>… could you be next?</p>
                </div>
            </div>
        </div>


        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center',fontFamily:"Lato"}} className='mb-4'>
                    Introducing: A new eharmony experience
                    <p>A new Marriagebook experience</p>
                </h3>
                <p className='mb-4' style={{textAlign:'center',color:'#4c4c4c'}}>Your search for a great relationship has never been easier with groundbreaking overhaul of the eharmony you know and trust.</p>
                <p style={{textAlign:'center',color:'#4c4c4c'}} className='mb-4'>GET A SNEAK PEEK</p>
            </div>
        </div>

        <div >
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center',fontFamily:"Lato"}} className='mb-4'>
                    Compatibility Counts
                </h3>
                <div className='d-flex justify-content-around align-items-center'>
                    <div style={{flex:"0.25"}}>
                        <img src='/assets/images/97.jpg'/>
                    </div>
                    <div style={{flex:"0.25"}}>
                        <p className='mb-4'>What happens when you apply scientific research to dating behavior? A whole lotta love! But this isn’t destiny, it’s deliberate. That’s why  minutes, someone finds love on eharmony.</p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center',fontFamily:"Lato"}} className='mb-4'>
                Quality Singles, Just Like You
                <p>Marriage-minded professionals like you</p>
                </h3>
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div style={{flex:"0.25"}}>
                        <p className='mb-4'>Like you, they are tired of dating games. You can have complete confidence that all of your compatible matches are looking for the same thing you are. Love that lasts.
                        </p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                    <div style={{flex:"0.25"}} className='d-flex justify-content-center'>
                        <img src='/assets/images/QualitySingles.jpg'/>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundImage:"url('/assets/images/premium_bg.svg')",objectFit:'contain',width:'auto'}}>
            <div className='p-5'>
                <h3 style={{textAlign:'center', color:'white',fontFamily:"Lato",fontWeight:'400'}} className='mb-4'>
                    We’re Here For You
                </h3>
                <p style={{color:'white', textAlign:'center',margin:'auto auto',maxWidth:"700px"}} className='mb-4'>
                Signing up for eharmony is the first step in finding your next great relationship. From profile tips to sharing your success story, we are here to support you in your journey for love.
                </p>
                <p style={{color:'white', textAlign:'center'}} className='mb-4'>WE’RE AVAILABLE 24/7, 365 DAYS A YEAR</p>

                <div style={{color:'white', textAlign:'center',width:'160px',height:'50px',padding:'10px 0px 10px 0px',border:'2px solid white',borderRadius:'4px'}} className='mb-4 mx-auto' >
                    CONTACT US
                </div>
            </div>
        </div>

        <div >
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center',fontFamily:"Lato"}} className='mb-4'>
                The Real Deal
                </h3>
                <div className='d-flex flex-wrap justify-content-around align-items-center'>
                    <div style={{flex:"0.25"}}>
                        <img src='/assets/images/couples.jpg'/>
                    </div>
                    <div style={{flex:"0.25"}}>
                        <p className='mb-4'>Over the course of our 20+ years in the relationship business, millions of couples have found lasting love. Give us a try when you’re ready for something real.</p>
                        <button className='btn' style={{ fontWeight:"600",backgroundColor:'#ef6054', color:'white',backgroundImage:'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)'}}>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:'#F2F2F2'}}>
            <div className='p-5' style={{padding: '52px 100px 52px 100px', paddingRight:'40px'}}>
                <h3 style={{textAlign:'center',fontFamily:"Lato"}} className='mb-4'>
                The #1 Trusted Dating App
                <p>The app most trusted for marriage-minded professionals</p>
                </h3>
                <div className='d-flex align-items-center justify-content-around'>
                    <div style={{flex:"0.25"}}>
                        <p className='mb-4'>We have 20+ years of trusted matchmaking under our belts, with a dedicated Trust and Safety team by your side.
                        </p>
                        <button className='btn' style={{backgroundColor:'#ef6054', color:'white'}}>
                            JOIN NOW
                        </button>
                    </div>
                    <div style={{flex:"0.25"}} className='d-flex justify-content-center'>
                        <img className='w-50' src='https://www.eharmony.com/wplp/wp-content/plugins/psg-landing-pages/assets/dist/images/trusted.png'/>
                    </div>
                </div>
            </div>
        </div>

        <footer style={{backgroundColor:'#06828c', color:'white',textAlign:'center'}}>
            <div className='d-flex p-5 justify-content-around'>
                <div style={{flex:'0.25'}}>
                    <ul style={{fontFamily:"Lato",fontSize: '11px',
    letterSpacing:'1.4px',
    lineHeight:'1.8'}}>
                        <li className='mb-4'>
                            ABOUT EHARMONY
                        </li>
                        <li className='mb-4'>
                            ABOUT MARRIAGEBOOK
                        </li>
                        <li className='mb-4'>
                            MARRIAGEBOOK TIPS
                        </li>
                        <li className='mb-4'>
                             MARRIAGEBOOK FAQ
                        </li>
                        <li>
                           SUCCESS STORIES
                        </li>
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul style={{fontFamily:"Lato",fontSize: '11px',
    letterSpacing:'1.4px',
    lineHeight:'1.8'}}>
                        <li className='mb-4'>
                            SAFETY TIPS
                        </li>
                        <li className='mb-4'>
                            MARRIAGEBOOK CAREERS
                        </li>
                        <li className='mb-4'>
                            TERMS & CONDITIONS
                        </li>
                        <li className='mb-4'>
                            PRIVACY POLICY
                        </li>
                        <li  className='mb-4'>
                            ACCESSIBILITY STATEMENT
                        </li>
                        <li  className='mb-4'>
                           AFFILIATES
                        </li>
                        <li  className='mb-4'>
                            HELP
                        </li>
                        <li  className='mb-4'>
                            PRESS
                        </li>
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul style={{fontFamily:"Lato",fontSize: '11px',
    letterSpacing:'1.4px',
    lineHeight:'1.8'}}>
                        <li className='mb-4'>
                        FREE DATING SITE
                        </li>
                        <li className='mb-4'>
                        SENIOR DATING SITE
                        </li>
                        <li className='mb-4'>
                        CHRISTIAN DATING SITE
                        </li>
                        <li className='mb-4'>
                        BLACK DATING SITE
                        </li>
                        <li className='mb-4'>
                        ASIAN DATING
                        </li>
                        <li className='mb-4'>
                        INTERNATIONAL DATING SITE
                        </li>
                        <li className='mb-4'>
                        LATIN DATING
                        </li>
                        <li className='mb-4'>
                        OVER 50 DATING SITES
                        </li>
                        <li className='mb-4'>
                        INDIAN DATING
                        </li>
                        <li className='mb-4'>
                        GAY DATING SITE
                        </li>
                        <li className='mb-4'>
                        LESBIAN DATING SITE
                        </li>
                        
                    </ul>
                </div>
                <div style={{flex:'0.24'}}>
                    <ul style={{fontFamily:'Lato' ,fontSize: '11px',
    letterSpacing:'1.4px',
    lineHeight:'1.8'}}>
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
           <div style={{backgroundColor:'#1a5f78',display:'flex',flexDirection:'column',alignItems:'center'}}>
           <div className='d-flex w-100 justify-content-around' style={{backgroundColor:'#1a5f78'}}>
          <div className='sociallinks' style={{ display:'flex',flex:'0.25',flexDirection:'column',justifyContent:'center'}}>
          <div className='headline' style={{fontSize: '14px',
    fontWeight: '700',
    letterSpacing:'1.4px',
    marginBottom:'0',
    marginTop:'20px',
    textAlign: 'center',
    textTransform: 'uppercase'}}>FOLLOW US ON</div>
          <ul>
          <li style={{display:'inline',margin:"auto 20px"}}>
           <a style={{ color:'white',fontWeight:'600',height:'30px',width:'30px'}}><section style={{backgroundImage:"url('/assets/images/logo-2.png')", color:'white', paddingBottom:'140px', backgroundRepeat:'no-repeat'}}></section></a>
          </li>  
          <li style={{display:'inline'}}>
           <a style={{fontWeight:'600'}}><img style={{width:'25px',height:'20px'}} src='https://logodix.com/logo/395128.png'/></a>
          </li>  
          <li style={{display:'inline'}}>
           <a style={{fontWeight:'600'}}><img style={{width:'70px',height:'70px'}} src='https://icon-library.com/images/twitter-icon-white-transparent/twitter-icon-white-transparent-9.jpg'/></a>
          </li>  
          <li style={{display:'inline'}}>
           <a style={{fontWeight:'600',color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <path fill="#fff" fill-rule="evenodd" d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.411 4.411 0 0 0 4.51 4.51c-.5.5-.809 1.002-1.038 1.594-.223.572-.375 1.226-.419 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.23.592.537 1.094 1.038 1.594.5.5 1.002.809 1.594 1.039.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 0 0 1.594-1.039c.5-.5.809-1.002 1.039-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185a4.412 4.412 0 0 0-1.039-1.594c-.5-.5-1.002-.809-1.594-1.038-.572-.223-1.226-.375-2.184-.419C14.75 3.01 14.444 3 12 3zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 0 1-1.036-.673 2.789 2.789 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zm0 2.756a4.622 4.622 0 1 1 0 9.244 4.622 4.622 0 0 1 0-9.244zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.804-2.884a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16z"></path>
</svg></a>
          </li>  
          </ul>
          </div>
          <div className='d-flex flex-column justify-content-around'>
              <div style={{fontSize: '14px',
    fontWeight: '700',
    letterSpacing:'1.4px',
    marginTop:'20px',
    textAlign: 'center',
    textTransform: 'uppercase'}}>Marriage Mobile</div>
           <div className='d-flex flex-firection-row align-items-center' >
           <a style={{fontWeight:'600'}}><img style={{width:'70px',height:'70px'}} src='https://cutewallpaper.org/21/apple-logo-no-background/White-Apple-Logo-Transparent-PNG-Clipart-Free-Download-YWD.png'/></a>
           <a style={{fontWeight:'600'}}><img style={{width:'30px',height:'30px'}} src='https://developers.tappx.com/assets/sidebar/android.svg'/></a>
           </div>
          </div>
          </div>
          <hr style={{width:'80%',backgroundColor:'white',margin:'10px auto',height:'0.1px',textAlign:'center'}}/> 
          <div style={{color:'white',fontSize:'14px',fontFamily:'Lato',margin:'20px',lineHeight:'2.4'}}>
          *2018 Survey of 1,616 U.S. Singles 
          <br/>
          © 2000-2022 eharmony Inc. – Made with ❤ in Los Angeles
          </div>
          </div>
        </footer>
    </>
  )
}

export default Home2;