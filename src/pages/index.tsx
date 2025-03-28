import React, { useEffect } from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";

import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import HeroSlider from "@/components/HeroSlider";
import Monitor from "@/components/Monitor";
import Microscope from "@/components/Microscope";
import Collections from "@/components/Collections";
import LabBanner from "@/components/LabBanner";
import Blog from "@/components/Blog";
import Taglines from "@/components/Taglines";
import Footer from "@/components/Footer";
import CategorySlider from "@/components/CategorySlider";
import Testimonials from "@/components/Testimonials";
import NewArrivalSlider from "@/components/NewArrivalSlider";
import BestSellerSlider from "@/components/BestSellerSlider";
import NewSletter from "@/components/NewSletter";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import monitor907 from "../app/images/monitor-907.png";
import cardiopad from "../app/images/cardiopad.png";
export default function Index() {
  const products = useSelector((state: IRootState) => state.product.productsFeatured);
  console.log("check the products", products.length);




  return (
    <div className="">
      {/* <HeaderWithCat /> */}
      <HeaderWithCat />
      <HeroSlider />
      <CategorySlider />
      <Collections />
      <Monitor img={monitor907} />
      <BestSellerSlider />
      {/* <Microscope /> */}
      <Monitor img={cardiopad} />
      {/* <Taglines /> */}
      {/* <LabBanner /> */}
      <NewArrivalSlider />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <NewSletter /> */}
      <Footer />
    </div>
  );
}
