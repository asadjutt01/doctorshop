import React from 'react'
import { Button, Accordion, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import blog from '../app/images/blog.png';

export default function AboutProduct() {
    return (
        <div>
            <div className='about-product-section'>
                <h4>
                    About product
                </h4>
                <p>
                    The name of your business or website. <br />
                    The industry or field you are in. <br />
                    Your target audience. <br />
                    The key services or products you offer. <br />
                    Any particular tone or style you prefer (e.g., professional, friendly, modern, traditional). <br />
                    With this information, I can craft a slogan and a paragraph that best suit your needs. <br />
                </p>
                <p>
                    Great! Could you provide a bit more detail about your medical website, such as:
                </p>
                <p>
                    The name of your website. <br />
                    The specific services or products you offer (e.g., telemedicine, healthcare information, medical supplies). <br />
                    Your target audience (e.g., patients, healthcare professionals, general public). <br />
                    Any specific message or tone you want to convey (e.g., trust, innovation, compassion). <br />
                    This will help me create a more tailored and effective slogan and paragraph for your site. <br />
                </p>
            </div>
        </div>
    );
}
