import React from 'react'
import { Carousel, Dropdown, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import microscope from '../app/images/microscope.png';
import Image from 'next/image';
import lab from '../app/images/lab.png';

export default function LabBanner() {
    return (
        <div>
            <div className='lab-banner'>
                <Image
                    src={lab}
                    alt="Description of image"
                />
            </div>
        </div>
    );
}
