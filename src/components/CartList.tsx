import React, { useEffect, useState } from 'react';
import { Button, Accordion, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import blog from '../app/images/blog.png';
import p1 from '../app/images/p1.png';
import p2 from '../app/images/p2.png';
import p3 from '../app/images/p3.png';


export default function CartList() {
    const [quantity, setQuantity] = useState(1); // Initialize with a default value

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <div className='cart-list'>
                <h3>Shopping cart</h3>
                <div className='listing'>
                    <div className='list-card'>
                        <div className='img-card'>
                            <Image
                                src={p1}
                                alt="Description of image"
                            />
                        </div>
                        <div className='details'>
                            <h5>Saftey goggles</h5>
                            <h6>$23</h6>
                            <div className='qty-picker'>
                                <Button variant="outline-secondary" onClick={handleDecrement}>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <FormControl
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} // Prevents setting quantity below 1
                                />
                                <Button variant="outline-secondary" onClick={handleIncrement}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='list-card'>
                        <div className='img-card'>
                            <Image
                                src={p2}
                                alt="Description of image"
                            />
                        </div>
                        <div className='details'>
                            <h5>Saftey goggles</h5>
                            <h6>$23</h6>
                            <div className='qty-picker'>
                                <Button variant="outline-secondary" onClick={handleDecrement}>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <FormControl
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} // Prevents setting quantity below 1
                                />
                                <Button variant="outline-secondary" onClick={handleIncrement}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='list-card'>
                        <div className='img-card'>
                            <Image
                                src={p3}
                                alt="Description of image"
                            />
                        </div>
                        <div className='details'>
                            <h5>Saftey goggles</h5>
                            <h6>$23</h6>
                            <div className='qty-picker'>
                                <Button variant="outline-secondary" onClick={handleDecrement}>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <FormControl
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} // Prevents setting quantity below 1
                                />
                                <Button variant="outline-secondary" onClick={handleIncrement}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='total-table'>
                  
                    <hr />
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-light'>Sub total:</p>
                        </div>
                        <div className='col-6'>
                            <p>$30</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-light'>Shipping:</p>
                        </div>
                        <div className='col-6'>
                            <p>Free</p>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-6'>
                            <p>Total</p>
                        </div>
                        <div className='col-6'>
                            <p>$230</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
