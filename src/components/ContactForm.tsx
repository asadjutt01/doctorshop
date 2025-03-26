import React, { useEffect } from "react";
import { Form, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import blog from "../app/images/blog.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setContactData } from "@/redux/slices/contactSlice";

export default function ContactForm() {
const dispatch = useDispatch()

  const [initialState , setInitialState] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    message:'',
  })

  // const InputOnchange = (
  //   setterFunction: React.Dispatch<React.SetStateAction<string>>,
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setterFunction(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleData = (e:any)=>{
      let name = e.target.name 
      let value = e.target.value

      setInitialState({ ...initialState ,  [name]: value })
  }

  // const handleSubmit = ()=>{
  //   dispatch(setContactData(initialState))
  // }


  return (
    <div>
      <div className="lg-container">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="form-group">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={handleData}
                  value={initialState?.firstname}
                  name="firstname"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="form-group">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={initialState?.lastname}
                  onChange={handleData}
                  name="lastname"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleData}
                  value={initialState?.email}
                  name="email"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="form-group">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleData}
                  value={initialState?.phone}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group className="form-group">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Describe Here...."
                  className="messsage"
                  onChange={handleData}
                  name="message"
                  value={initialState?.message}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <button className="btn btn-next" >Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
