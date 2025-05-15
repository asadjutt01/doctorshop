import React from "react";
import { Carousel, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import hero1 from "../app/images/herobanner1.png";
import hero2 from "../app/images/herobanner2.png";
import hero3 from "../app/images/herobanner3.png";
import herobanner1mobile from "../app/images/herobanner1mobile.png";
import herobanner2mobile from "../app/images/herobanner2mobile.png";
import herobanner3mobile from "../app/images/herobanner3mobile.png";
export default function HeroSlider() {
  const router = useRouter();
 
  const handleClickLearnMore = () => {
    router.push("/about");
  };
  const banners = [
    {
      id: 1,
      image: hero1.src, // or just hero1 if it's a string
      image_mobile:herobanner1mobile.src,
      title:
        "AirX Nebuliser Face Mask Kit with 8ml Chamber & Tubing 2.1m Crush & Kink Resistant",
        slug:"airx-nebuliser-face-mask-kit-with-8ml-chamber-tubing-21m-crush-kink-resistant",
      description:
        "AirX Nebuliser Face Mask Kit minimise the residual volume and reduce drug wastage. At a driving gas flow of 8 L/min, 74% of the volume output will be particles less than 5 microns in diameter with a mass median diameter (MMD) of 3.3 microns.",
      productCode: "GXM-786NMKA",
      price: "£1.85",
      priceWithVat: "£2.22 inc VAT",
    },
    {
      id: 2,
      image: hero2.src, // or just hero1 if it's a string
      image_mobile:herobanner2mobile.src,
      title:
        "GenX Midstream Urine Container 30ml - Boric Acid & Label",
        slug:"genx-midstream-urine-container-30ml",
      description:
        "GenX Specimen Container 30ml with Label designed for efficient specimen collection.",
      productCode: "GXM-786SCL",
      price: "£0.79",
      priceWithVat: "£0.95 inc VAT",
    },
    {
      id: 3,
      image: hero3.src, // or just hero1 if it's a string
      image_mobile:herobanner3mobile.src,
      title:
        "CerviX Endometrial Sampler - Suction Curette",
        slug:"cervix-endometrial-sampler-suction-curette",
      description:
        "CerviX Endometrial Sampler - Suction Curette is Flexible and easily adapts to the cervix and uterine curvature to provide optimum contact with the uterine wall for improved sample collection and endometrial aspiration in cancer screening.",
      productCode: "GXM-786ESC",
      price: "£4.47",
      priceWithVat: "£5.36 inc VAT",
    },
    // Add more banner objects as needed
  ];
  const handleNavigate = (slug: string) => {
    const data = {
      productName: slug,
    };
    router.push(
      {
        pathname: `/products/${slug}`,
        query: data,
      },
      `/products/${slug}`,
      { shallow: true }
    );
  };
  return (
    <div>
      <div className="hero-section" >
        <Carousel>
          {banners.map((banner) => (
            <Carousel.Item
              key={banner.id}
              className="carousel-item-bg"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
              onClick={() => handleNavigate(banner.slug)}
            >
              <div className="slide-content">
                <div className="lg-container slide-content-inner-container">
                  <div className="content">
                    <h1 style={{color:`${banner.id !==2 ? '#000000': '#ffffff'}`}}>{banner.title}</h1>
                    <p style={{color:`${banner.id !==2 ? '#000000': '#ffffff'}`}}>{banner.description}</p>
                    <p style={{color:`${banner.id !==2 ? '#000000': '#ffffff'}`}}>
                      <span>Product Code:</span>
                      <span>{banner.productCode}</span>
                    </p>
                    <div className="prize-vat">
                      <h2 style={{color:`${banner.id !==2 ? '#005eb8': '#ffffff'}`}}>{banner.price}</h2>
                      <span>{banner.priceWithVat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="hero-section-mobile">
        <Carousel>
        {banners.map((banner) => (
    <Carousel.Item key={banner.id} onClick={() => handleNavigate(banner.slug)}>
      <Image
        src={banner.image_mobile}
        alt="Home-Banner"
        className="home-banner"
        width={320}
        height={320}
        style={{ width: "100%",
          height: "100%",
         }}
      />
      <div className="slide-content">
        <div className="lg-container slide-content-inner-container">
          <div className="content">
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
            <p>
              <span>Product Code:</span> <span>{banner.productCode}</span>
            </p>
            <div className="prize-vat">
              <h2>{banner.price}</h2>
              <span>{banner.priceWithVat}</span>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ))}
        </Carousel>
      </div>
    </div>
  );
}