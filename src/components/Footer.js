import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-lg-start text-muted'>
      {/* Social Media Buttons */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ fontSize: '1.2rem' }}>Get connected with us on social networks:</span>
        </div>

        <div>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://facebook.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://google.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://instagram.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://linkedin.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </section>

      {/* Footer Content */}
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontSize: '1.3rem' }}>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p style={{ fontSize: '1rem' }}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontSize: '1.3rem' }}>Products</h6>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontSize: '1.3rem' }}>Useful links</h6>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p style={{ fontSize: '1rem' }}>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontSize: '1.3rem' }}>Contact</h6>
              <p style={{ fontSize: '1rem' }}>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p style={{ fontSize: '1rem' }}>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p style={{ fontSize: '1rem' }}>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p style={{ fontSize: '1rem' }}>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Copyright Section */}
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize: '1rem' }}>
        © {new Date().getFullYear()} Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
