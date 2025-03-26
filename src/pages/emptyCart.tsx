import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import cart from '../app/images/cart.png';

import TopBar from '@/components/TopBar';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeaderWithCat from '@/components/HeaderWithCat';
export default function about() {

    return (
        <div>

            <HeaderWithCat />
            <div className='empty-cart-section'>
                <Image
                    src={cart}
                    alt="Description of image"
                />
                <h2>
                    Your cart is empty!
                </h2>
                <p>
                    Looks like you haven`&lsquo;`t added anything to
                    <br />
                    your cart yet
                </p>
            </div>
        </div>
    );
}
