import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import calllogo from "./call-logo.png"
import maillogo from "./mail-logo.png"
import instalogo from "./insta-logo.png"
import facebooklogo from "./facebook-logo.png"
import twitterlogo from "./twitter-logo.png"
import "./footer2.css";

export default function Footer2() {
  return (
    <div className='link5'>
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Higher Coading Language
              </h6>
              <div className='link'>
              <p>
               We Provide Full stack Training in Java MEAN,MERN,Python and Android
              </p>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Courses</h6>
              <div className='link2'>
              <p>
                <Link to='java' className='text-reset'>
                  JAVA
                </Link>
              </p>
              <p>
                <Link to='mern' className='text-reset'>
                  MERN
                </Link>
              </p>
              <p>
                <Link to='mean' className='text-reset'>
                  MEAN
                </Link>
              </p>
              <p>
                <Link to='andriod' className='text-reset'>
                  ANDROID
                </Link>
              </p>
              <p>
                <Link to='python' className='text-reset'>
                  PYTHON
                </Link>
              </p>
              <p>
                <Link href='ios' className='text-reset'>
                  IOS
                </Link>
              </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
               <Link to="https://www.instagram.com/hcl.institute?igsh=a2d5c3hsbG9kbG95"><img src={instalogo}></img></Link>  
              </p>
              <p>
              <Link to="mailto:chetanaleriya1037@gmail.com"><img src={maillogo}></img></Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                <img src={facebooklogo}></img> 
                </Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                <img src={twitterlogo}></img>
                </Link>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className='link3'>
              <p>
                <MDBIcon icon="home" className="me-2" />
               109,306 Prem Plaza,Ashok Nagar,Bhawarkua,Indore
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hcl.indore2023@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91-82368 09542
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91-95662 99542
              </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
       {/* <div className='link4'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          hclindore2023.com
        </a>
        </div>
      </div> */}
    </MDBFooter>
    </div>
  );
}
