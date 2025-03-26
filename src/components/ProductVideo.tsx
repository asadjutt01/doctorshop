import React from 'react'
import { Button, Accordion, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import blog from '../app/images/blog.png';
import productvideo from '../app/images/productvideo.png';

export default function ProductVideo() {
    return (
        <div>
            <div className='product-video-section'>
                <Image
                    src={productvideo}
                    alt="Description of image"
                />
                <svg className='play' xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106">
                    <g id="Group_1807" data-name="Group 1807" transform="translate(-1719 -2483)">
                        <circle id="Ellipse_135" data-name="Ellipse 135" cx="53" cy="53" r="53" transform="translate(1719 2483)" fill="red" />
                        <path id="Polygon_1" data-name="Polygon 1" d="M24.6,0,49.2,42.366H0Z" transform="matrix(0.035, -0.999, 0.999, 0.035, 1746, 2559.845)" fill="#fff" />
                    </g>
                </svg>

            </div>
        </div>
    );
}
