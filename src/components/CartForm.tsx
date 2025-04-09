import React, { useEffect, useState } from 'react';

import { Button, Form, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import blog from '../app/images/blog.png';

export default function CartForm() {
    const [quantity, setQuantity] = useState(1); // Initialize with a default value

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [isChecked, setIsChecked] = useState<any>({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
    });

    const handleRadioChange = (section: string) => {
        let state: any = isChecked
        state[section] = !state[section]
        setIsChecked((pre: any) => ({ ...pre, ...state }))

    };
    useEffect(() => {
        // console.log(isChecked)
    }, [isChecked])
    return (
        <div>
            <div className='cart-form'>
                <div className='form-card'>
                    <h2>Payment Methods</h2>
                    <div className='multi-options'>
                        <Button
                            variant={isChecked.section1 ? "dark" : "light"} // Change button color based on radio state
                            className="d-flex"
                            onClick={() => handleRadioChange("section1")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 69 42">
                                <g id="Group_1884" data-name="Group 1884" transform="translate(-163 -358)">
                                    <g id="Group_1817" data-name="Group 1817">
                                        <circle id="Ellipse_142" data-name="Ellipse 142" cx="21" cy="21" r="21" transform="translate(163 358)" fill="#da122b" opacity="0.84" />
                                        <circle id="Ellipse_143" data-name="Ellipse 143" cx="21" cy="21" r="21" transform="translate(190 358)" fill="#f29a1a" opacity="0.84" />
                                    </g>
                                </g>
                            </svg>
                            <p>
                                Credit/debit card
                            </p>
                        </Button>
                        <Button
                            variant={isChecked.section2 ? "dark" : "light"} // Change button color based on radio state
                            className="d-flex"
                            onClick={() => handleRadioChange("section2")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30.899" viewBox="0 0 26 30.899">
                                <g id="paypal-svgrepo-com" transform="translate(-148.11 -129.237)">
                                    <path id="Path_1730" data-name="Path 1730" d="M170.32,131.554c-1.352-1.545-3.863-2.317-7.339-2.317h-9.657a1.657,1.657,0,0,0-1.352,1.158l-3.863,25.3a.883.883,0,0,0,.772.966h5.987l1.545-9.463v.386a1.656,1.656,0,0,1,1.352-1.159h2.9c5.6,0,9.848-2.317,11.2-8.691v-.579h0c.193-2.51-.193-4.055-1.544-5.6" fill="#263b80" />
                                    <path id="Path_1731" data-name="Path 1731" d="M232.478,187.051v-.579c0-.019,0-.037,0-.056a5.465,5.465,0,0,0-.911-.513,8.552,8.552,0,0,0-2.925-.59l0,0h-2.816l0,0h-5.908a1.4,1.4,0,0,0-1.354,1.2l-1.54,10v.386a1.656,1.656,0,0,1,1.352-1.159h2.9C226.878,195.742,231.126,193.424,232.478,187.051Z" transform="translate(-60.614 -49.317)" fill="#232c65" />
                                    <path id="Path_1732" data-name="Path 1732" d="M219.851,196.932a5.05,5.05,0,0,0-1.894-2.45c0,.019,0,.037,0,.056v.579c-1.352,6.374-5.6,8.691-11.2,8.691h-2.9a1.656,1.656,0,0,0-1.352,1.159v-.149c-.022.049-.042.1-.059.149l-1.091,6.657-.4,2.42h0l-.443,2.7a.707.707,0,0,0,.772.771H206.1a1.36,1.36,0,0,0,1.366-1.159l.041-.252h0l.924-5.734a1.462,1.462,0,0,1,1.439-1.352h.493c4.828,0,8.691-1.931,9.656-7.724A9.1,9.1,0,0,0,219.851,196.932Z" transform="translate(-46.09 -57.383)" fill="#139ad6" />
                                </g>
                            </svg>
                            <p>
                                Paypal
                            </p>
                        </Button>
                        <Button
                            variant={isChecked.section3 ? "dark" : "light"} // Change button color based on radio state
                            className="d-flex"
                            onClick={() => handleRadioChange("section3")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30.784" height="44.672" viewBox="0 0 43.784 44.672">
                                <g id="_7123025_logo_google_g_icon" data-name="7123025_logo_google_g_icon" transform="translate(-30.025 -29.098)">
                                    <path id="Path_1733" data-name="Path 1733" d="M97.36,71.326a27.937,27.937,0,0,0-.389-4.526H75.9v8.613H87.968a10.153,10.153,0,0,1-4.477,6.764l7.2,5.6c4.234-3.942,6.667-9.684,6.667-16.448Z" transform="translate(-23.551 -19.355)" fill="#4280ef" />
                                    <path id="Path_1734" data-name="Path 1734" d="M54.851,101.9a21.368,21.368,0,0,0,14.793-5.4l-7.2-5.547A13.549,13.549,0,0,1,42.3,83.9l-7.4,5.693A22.314,22.314,0,0,0,54.851,101.9Z" transform="translate(-2.503 -28.134)" fill="#34a353" />
                                    <path id="Path_1735" data-name="Path 1735" d="M39.794,68.707a13.569,13.569,0,0,1,0-8.565L32.4,54.4a22.366,22.366,0,0,0,0,20.049Z" transform="translate(0 -12.989)" fill="#f6b704" />
                                    <path id="Path_1736" data-name="Path 1736" d="M54.851,37.956a12.186,12.186,0,0,1,8.565,3.358l6.375-6.423A21.5,21.5,0,0,0,54.851,29.1,22.314,22.314,0,0,0,34.9,41.411l7.4,5.742A13.362,13.362,0,0,1,54.851,37.956Z" transform="translate(-2.503)" fill="#e54335" />
                                </g>
                            </svg>
                            <p>
                                Google pay
                            </p>
                        </Button>
                    </div>
                    <h2>Saved Card</h2>
                    <div className='multi-options'>
                        <Button
                            variant={isChecked.section4 ? "dark" : "light"} // Change button color based on radio state
                            className="w-100 d-flex"
                            onClick={() => handleRadioChange("section4")}
                        >
                            <Form.Check
                                type="radio"
                                checked={isChecked.section4}
                                onChange={() => handleRadioChange("section4")}
                                className="me-2"
                            />
                            <p>
                                xxxx xxxx 5654
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 69 42">
                                <g id="Group_1884" data-name="Group 1884" transform="translate(-163 -358)">
                                    <g id="Group_1817" data-name="Group 1817">
                                        <circle id="Ellipse_142" data-name="Ellipse 142" cx="21" cy="21" r="21" transform="translate(163 358)" fill="#da122b" opacity="0.84" />
                                        <circle id="Ellipse_143" data-name="Ellipse 143" cx="21" cy="21" r="21" transform="translate(190 358)" fill="#f29a1a" opacity="0.84" />
                                    </g>
                                </g>
                            </svg>
                        </Button>
                        <Button
                            variant={isChecked.section5 ? "dark" : "light"} // Change button color based on radio state
                            className="w-100 d-flex"
                            onClick={() => handleRadioChange("section5")}
                        >
                            <Form.Check
                                type="radio"
                                checked={isChecked.section5}
                                onChange={() => handleRadioChange("section5")}
                                className="me-2"
                            />
                            <p>
                                xxxx xxxx 5654
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30.899" viewBox="0 0 26 30.899">
                                <g id="paypal-svgrepo-com" transform="translate(-148.11 -129.237)">
                                    <path id="Path_1730" data-name="Path 1730" d="M170.32,131.554c-1.352-1.545-3.863-2.317-7.339-2.317h-9.657a1.657,1.657,0,0,0-1.352,1.158l-3.863,25.3a.883.883,0,0,0,.772.966h5.987l1.545-9.463v.386a1.656,1.656,0,0,1,1.352-1.159h2.9c5.6,0,9.848-2.317,11.2-8.691v-.579h0c.193-2.51-.193-4.055-1.544-5.6" fill="#263b80" />
                                    <path id="Path_1731" data-name="Path 1731" d="M232.478,187.051v-.579c0-.019,0-.037,0-.056a5.465,5.465,0,0,0-.911-.513,8.552,8.552,0,0,0-2.925-.59l0,0h-2.816l0,0h-5.908a1.4,1.4,0,0,0-1.354,1.2l-1.54,10v.386a1.656,1.656,0,0,1,1.352-1.159h2.9C226.878,195.742,231.126,193.424,232.478,187.051Z" transform="translate(-60.614 -49.317)" fill="#232c65" />
                                    <path id="Path_1732" data-name="Path 1732" d="M219.851,196.932a5.05,5.05,0,0,0-1.894-2.45c0,.019,0,.037,0,.056v.579c-1.352,6.374-5.6,8.691-11.2,8.691h-2.9a1.656,1.656,0,0,0-1.352,1.159v-.149c-.022.049-.042.1-.059.149l-1.091,6.657-.4,2.42h0l-.443,2.7a.707.707,0,0,0,.772.771H206.1a1.36,1.36,0,0,0,1.366-1.159l.041-.252h0l.924-5.734a1.462,1.462,0,0,1,1.439-1.352h.493c4.828,0,8.691-1.931,9.656-7.724A9.1,9.1,0,0,0,219.851,196.932Z" transform="translate(-46.09 -57.383)" fill="#139ad6" />
                                </g>
                            </svg>
                        </Button>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Card number</Form.Label>
                                <Form.Control type="text" placeholder="Card number" />
                            </Form.Group>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name on Card</Form.Label>
                                <Form.Control type="text" placeholder="Name on Card" />
                            </Form.Group>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Expiry date</Form.Label>
                                <Form.Control type="text" placeholder="Expiry date" />
                            </Form.Group>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>cvv</Form.Label>
                                <Form.Control type="password" placeholder="cvv" />
                            </Form.Group>
                        </div>
                        <div className='col-lg-12'>
                            <button className='btn cart-btn'>Finalize your transaction safely</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
