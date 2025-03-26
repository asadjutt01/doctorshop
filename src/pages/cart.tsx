import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Image from "next/image";
import p1 from "../app/images/p1.png";
import p2 from "../app/images/p2.png";
import p3 from "../app/images/p3.png";

import CartList from "@/components/CartList";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import CartForm from "@/components/CartForm";
import { stat } from "fs";

export default function about() {
  return (
    <div>

      <HeaderWithCat />
      <div className="cart-body">
        <div className="lg-container">
          <div className="row">
            <div className="col-lg-4">
              <CartList />
            </div>
            <div className="col-lg-8">
              <CartForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
