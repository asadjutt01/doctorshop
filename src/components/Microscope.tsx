import React from 'react'
import { Carousel, Dropdown, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import microscope from '../app/images/microscope.png';
import Image from 'next/image';

export default function Microscope() {
    return (
        <div>
            <div className='microscope-section'>
                <div className='lg-container '>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6'>
                            <div className='content'>
                                <h2>
                                    Microscope
                                </h2>
                                <h4>
                                    Hemodialysis Machine <br/> X-Ray Ultrasound Machine
                                </h4>
                                <p>
                                    Experience accurate, reliable, and convenient blood <br/> pressure monitoring with our Digital Blood Pressure <br/> Monitor.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6'>
                            <Image
                                src={microscope}
                                alt="Description of image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
