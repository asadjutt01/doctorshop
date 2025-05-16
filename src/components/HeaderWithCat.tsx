"use client";
import {
  Modal,
  Form,
  Navbar,
  Nav,
  Dropdown as BootstrapDropdown,

} from "react-bootstrap";
import Image from "next/image";
import mm1 from "../app/images/mm1.png";
import mm2 from "../app/images/mm2.png";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { generateSlug } from "@/utils/functions";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IRootState } from "@/redux/store";
import {
  getCategorySub,
  getCategorySubSub,
} from "@/utils/fetchData/fetchDataFunction";
import Service from "@/services";
import { clearAll, getItem, removeItem, setItem } from "@/utils/localStorage/localStorage";
import Swal from "sweetalert2";
import { logout } from "@/redux/store/auth/authConfigSlice";
import Toast from "./Toast";
import { getCartCount } from "./LoadInitialData/LoadInitialData";

import { v4 as uuidv4 } from "uuid";
import PersonalDetailbar from "./PersonalDetailbar";
export default function HeaderWithCat() {
  const [isActive, setIsActive] = useState(false);
  const [iscategory, setIscategory] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const categories = useSelector(
    (state: IRootState) => state.category.first_category_all
  );
   const deliveryAddressList: any = useSelector(
      (state: IRootState) => state.user.userAddressList
    );
  const dispatch = useDispatch();

  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user_type, setuser_type] = useState<string | null>(null);
  const Count: any = useSelector((state: IRootState) => state.cart.count);
  // console.log("<<<<<<<<<<<<<<<<<<<<", Count);

   useEffect(() => {
    const token: any = getItem("authToken");
    const user_type: any = getItem("user_type");
    setAuthToken(token);
    setuser_type(user_type);
  }, []);

  const [subCategory, setSubCategory] = useState<any>([]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success")
  const router = useRouter();
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside to close search dropdowns
  useEffect(() => {
    // const handleClickOutside = (event: MouseEvent) => {
    //   if (
    //     mobileSearchRef.current &&
    //     !mobileSearchRef.current.contains(event.target as Node)
    //   ) {
    //     setIsMobileSearchOpen(false);
    //     setSearchQuery("");
    //     setSearchResults([]);
    //   }
    //   if (
    //     desktopSearchRef.current &&
    //     !desktopSearchRef.current.contains(event.target as Node)
    //   ) {
    //     setIsDesktopSearchOpen(false);
    //     setSearchQuery("");
    //     setSearchResults([]);
    //   }
    // };

    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 78);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const getCartCount = async () => {
  //   try {
  //     const formData = new FormData();
  //     const authToken: any = getItem("authToken");
  //    if(Boolean(authToken)){
  //      const user_id:any = getItem("user_id")
  //      formData.append("user_id", user_id);
  //    } else{
  //      const temp_user_id:any = getItem("temp_user_id")
  //      formData.append("temp_user_id", temp_user_id);
  //    }
  //     const response: any = await Service.Cart_Method.getCartCount(formData);
  //     console.log("Count Data >>>>>>", response.count);
  //     if (response && response.count !== undefined) {
  //       setCartCount(response.count);
  //     } else {
  //       console.log("No count received.");
  //       setCartCount(0);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching cart count:", err);
  //     setCartCount(0);
  //   }
  // };

  // useEffect(() => {
  //   getCartCount();
  //   const intervalId = setInterval(() => {
  //     getCartCount();
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const searchProduct = async () => {
    try {
      if (!debouncedSearchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      const formData = new FormData();
      formData.append("name", debouncedSearchQuery);

      const response = await Service.Product_Methods.seacrch_product(formData);

      if (response && response.data) {
        setSearchResults(response.data);
        // console.log("Response Data:", response.data);
      } else {
        // console.log("No data found in response");
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Search Error:", err);
      setSearchResults([]);
    }
  };

  // Trigger search on every debounced change
  useEffect(() => {
    searchProduct();
  }, [debouncedSearchQuery]);

  useEffect(() => {
    setCurrentCategories(categories);
  }, [categories, subCategory]);

  const handleMouseEnter = (id: any) => {
    if (id) {
      const fetchcategorySub = async () => {
        try {
          const categories = await getCategorySub(id);
          if (categories?.length > 0) {
            setSubCategory(categories);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchcategorySub();
    }
    setHoveredIndex(id);
  };

  const [hoveredIndex, setHoveredIndex] = useState<any | number>(null);
  const handleMouseLeave = () => {
    setSubCategory([]);
    setHoveredIndex(null);
  };

  const swiperRef = useRef<any>(null);
  const [currentCategories, setCurrentCategories] = useState<any>(categories);
  const [currentCategoryName, setcurrentCategoryName] = useState<string>("");
  const [categoryStack, setCategoryStack] = useState<any[]>([]);

  const handleMenuItemClick = (item: any) => {
    if (item?.id && item?.number_of_children > 0) {
      const fetchcategories = async () => {
        try {
          let categories =
            currentLevel === 1
              ? await getCategorySub(item?.id)
              : await getCategorySubSub(item?.id);
          if (categories?.length > 0) {
            setCategoryStack((prev) => [
              ...prev,
              {
                level: currentLevel,
                categories: currentCategories,
                name: currentCategoryName,
              },
            ]);
            setCurrentCategories(categories);
            setCurrentLevel((prev) => prev + 1);
            setcurrentCategoryName(item?.name);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchcategories();
    }
  };

  const handleBackClick = () => {
    if (categoryStack.length > 0) {
      const prevState = categoryStack[categoryStack.length - 1];
      setCategoryStack((prev) => prev.slice(0, -1));
      setCurrentCategories(prevState.categories);
      setCurrentLevel(prevState.level);
      setcurrentCategoryName(prevState.name);
    }
  };

  const slidesPerView = { 990: 9, 768: 5, 0: 2 };
  const [selectedCurrency, setSelectedCurrency] = useState("£ - GBP");
  const currencies = [
    { name: "£ - GBP - Great British Pound", code: "£ - GBP" },
    { name: "$ - USD - US Dollar", code: "$ - USD" },
    { name: "€ - EUR - Euro", code: "€ - EUR" },
  ];

  const handleSelect = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
  };

  const handleNavigate = (slug: string) => {
    const data = {
      // productId: id,
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
  const storeTempId = () => {
    let temp_user_id = getItem("temp_user_id"); // Check if temp_user_id exists in storage

    if (!temp_user_id) {
      temp_user_id = uuidv4(); // Generate new UUID
      setItem("temp_user_id", temp_user_id); // Store it in localStorage
    }
  };
  const handleLogout = () => {
    getCartCount(dispatch);
    dispatch(logout());
   
    // console.log("It is logging out");
    clearAll()
    removeItem("authToken");
    removeItem("cart_data");
   
    setAuthToken(null);
    storeTempId()
    setToastType("success");
    setToastMessage("Logged Out! You have been successfully logged out.");

    setTimeout(() => {
      router.push("/");
    }, 3000);

  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div id="header-outer" className={isActive ? "active" : ""}>
      <div>
        <div id="header-sticky">
          <div className="top-bar">
            <div className="lg-container top-bar-container">
              <div className="top-bar-row">
                <div className="social-icons">
                  <Link href={"/"} className="social-icons-link">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href={"/"} className="social-icons-link">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href={"/"} className="social-icons-link">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href={"/"} className="social-icons-link">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                  <Link href={"/"} className="social-icons-link">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="tagline">
                  <p>Free Shipping On Orders Over £49.00 (Ex VAT)</p>
                </div>
                {/* <div className="lang">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="info"
                      id="dropdown-basic"
                      className="custom-dropdown-toggle"
                    >
                      {selectedCurrency} <IoIosArrowDown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {currencies.map((currency) => (
                        <Dropdown.Item
                          key={currency.code}
                          onClick={() => handleSelect(currency.code)}
                        >
                          {currency.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
                <div className="call-us-text-con">
                  <span className="call-us-text">
                      Call Us <strong>03301 331 786</strong>
                      </span>
                      </div>
              </div>
            </div>
          </div>
           <PersonalDetailbar user_type={user_type} authToken={authToken}/>
          <div>
            <div className="header" onMouseLeave={handleMouseLeave}>
              <div className="lg-container header-main">
                <Navbar collapseOnSelect className="navbar_alignment">
                  {/* <div className="flex gap-2">
                    <Navbar.Toggle
                      aria-controls="responsive-navbar-nav"
                      onClick={() => setIscategory(!iscategory)}
                    >
                      {iscategory ? (
                        <RxCross2 size={22} />
                      ) : (
                        <RxHamburgerMenu size={22} />
                      )}
                    </Navbar.Toggle>
                    <Navbar.Brand href="/">
                      <Image
                        src="/doctorshop-logo.svg"
                        alt="doctorshop-logo"
                        width={200}
                        height={75}
                      />
                    </Navbar.Brand>
                  </div> */}

                  <div className="mobile-nav flex gap-2">
                  <div className="flex gap-2">
                    <Navbar.Toggle
                      aria-controls="responsive-navbar-nav"
                      onClick={() => setIscategory(!iscategory)}
                    >
                      {iscategory ? (
                        <RxCross2 size={22} />
                      ) : (
                        <RxHamburgerMenu size={22} />
                      )}
                    </Navbar.Toggle>
                    <Navbar.Brand href="/">
                      <Image
                        src="/doctorshop-logo.svg"
                        alt="doctorshop-logo"
                        width={200}
                        height={75}
                      />
                    </Navbar.Brand>
                  </div>
                    <div className="nav-icon flex gap-2">
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          setIsMobileSearchOpen(!isMobileSearchOpen);
                          setIscategory(false);
                          setIsDesktopSearchOpen(false);
                        }}
                        className="search-button-mobile"
                        aria-expanded={isMobileSearchOpen}
                        aria-label="Search"
                      >
                        <IoSearchOutline className="search-button-mobile-icon" />
                      </button>
                      {!authToken 
                      // || user_type === "customer_guest"
                       && (
                        <div
                          className="flex item-center"
                          style={{ display: "flex", gap: "4px" }}
                        >
                          <Nav.Link href="/login" className="text-sm">
                            <span className="login-text">LogIn</span>
                          </Nav.Link>
                        </div>
                      )}
                      {/* <Nav.Link
                        onClick={() => router.push("/dashboard/my-orders")}
                      >
                        <Image
                          src="/profile.svg"
                          alt="Profile"
                          width={24}
                          height={24}
                        />
                      </Nav.Link> */}
 {authToken &&  
//  user_type !== "customer_guest" &&
   (
                          <BootstrapDropdown>
                            <BootstrapDropdown.Toggle
                              variant="link"
                              style={{
                                background: "transparent",
                                border: "none",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src="/profile.svg"
                                alt="Profile"
                                width={22}
                                height={22}
                              />
                            </BootstrapDropdown.Toggle>
                            <BootstrapDropdown.Menu
                              style={{
                                backgroundColor: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                padding: "10px 0",
                                minWidth: "180px",
                                marginTop: "8px",
                              }}
                              align="end"
                            >
                              <BootstrapDropdown.Item
                                onClick={() =>
                                  router.push("/dashboard/my-orders")
                                }
                                style={{
                                  padding: "8px 20px",
                                  fontSize: "14px",
                                  color: "#333",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#f5f5f5";
                                  e.currentTarget.style.color = "#007bff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.color = "#333";
                                }}
                              >
                                Dashboard
                              </BootstrapDropdown.Item>
                              <BootstrapDropdown.Item
                                onClick={handleLogout}
                                style={{
                                  padding: "8px 20px",
                                  fontSize: "14px",
                                  color: "#dc3545",
                                  fontWeight: "500",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#ffe5e7";
                                  e.currentTarget.style.color = "#c82333";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.color = "#dc3545";
                                }}
                              >
                                Logout
                              </BootstrapDropdown.Item>
                            </BootstrapDropdown.Menu>
                          </BootstrapDropdown>
                        )}
                      <Nav.Link style={{ position: "relative" }}>
                        <Image
                          src="/cart.svg"
                          alt="cart"
                          width={22}
                          height={22}
                          onClick={() => router.push("/add-to-cart/")}
                        />


                        <div
                          style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-5px",
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "50%",
                            width: "15px",
                            height: "15px",
                            fontSize: "12px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {Count}
                        </div>


                      </Nav.Link>

                      {authToken && (
                        <Nav.Link href="/dashboard/my-whishlist/">
                          <Image
                            src="/like.svg"
                            alt="like"
                            width={22}
                            height={22}
                          />
                        </Nav.Link>)}
                    </div>
                  </div>

                  <div className="navbar-desk-appearence">
                  <div className="flex gap-2">
                    <Navbar.Toggle
                      aria-controls="responsive-navbar-nav"
                      onClick={() => setIscategory(!iscategory)}
                    >
                      {iscategory ? (
                        <RxCross2 size={22} />
                      ) : (
                        <RxHamburgerMenu size={22} />
                      )}
                    </Navbar.Toggle>
                    <Navbar.Brand href="/">
                      <Image
                        src="/doctorshop-logo.svg"
                        alt="doctorshop-logo"
                        width={200}
                        height={75}
                      />
                    </Navbar.Brand>
                  </div>
                  <div
                        className="search-container relative"
                        style={{ backgroundColor: "#EEEEEE" }}
                        ref={desktopSearchRef}
                      >
                        <input
                          type="text"
                          placeholder="Search"
                          className="search-input"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => {
                            setIsDesktopSearchOpen(true);
                            setIsMobileSearchOpen(false);
                          }}
                        />
                        <button className="search-button">
                          <IoSearchOutline />
                        </button>
                        {searchQuery && isDesktopSearchOpen && (
                          <div
                            style={{
                              position: "absolute",
                              top: "40px",
                              left: "0",
                              width: "100%",
                              backgroundColor: "#fff",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                              borderRadius: "8px",
                              maxHeight: "400px",
                              overflowY: "auto",
                              zIndex: 100,
                              padding: "10px 0",
                            }}
                          >
                            {searchResults.length > 0 ? (
                              searchResults.map((result) => (
                                <div
                                  key={result.id}
                                  onClick={() => {
                                    setSearchQuery("");
                                    setSearchResults([]);
                                    setIsDesktopSearchOpen(false);
                                    handleNavigate(result.slug);
                                  }}
                                  style={{
                                    padding: "12px 20px",
                                    cursor: "pointer",
                                    borderBottom: "1px solid #f0f0f0",
                                    transition:
                                      "background-color 0.3s ease, color 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#ccd6ff";
                                    e.currentTarget.style.color = "#007bff";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#fff";
                                    e.currentTarget.style.color = "#333";
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0",
                                      fontSize: "15px",
                                      fontWeight: "500",
                                      color: "#333",
                                    }}
                                  >
                                    {result.name}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <div
                                style={{
                                  padding: "15px",
                                  textAlign: "center",
                                  color: "#666",
                                  fontSize: "14px",
                                  fontStyle: "italic",
                                }}
                              >
                                No results found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    <Nav className="nav-items">
                      {/* <span className="call-us-text">
                      Call Us <strong>03301 133 786</strong>
                      </span> */}
                      {/* <div
                        className="search-container relative"
                        style={{ backgroundColor: "#EEEEEE" }}
                        ref={desktopSearchRef}
                      >
                        <input
                          type="text"
                          placeholder="Search"
                          className="search-input"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => {
                            setIsDesktopSearchOpen(true);
                            setIsMobileSearchOpen(false);
                          }}
                        />
                        <button className="search-button">
                          <IoSearchOutline />
                        </button>
                        {searchQuery && isDesktopSearchOpen && (
                          <div
                            style={{
                              position: "absolute",
                              top: "40px",
                              left: "0",
                              width: "100%",
                              backgroundColor: "#fff",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                              borderRadius: "8px",
                              maxHeight: "400px",
                              overflowY: "auto",
                              zIndex: 100,
                              padding: "10px 0",
                            }}
                          >
                            {searchResults.length > 0 ? (
                              searchResults.map((result) => (
                                <div
                                  key={result.id}
                                  onClick={() => {
                                    setSearchQuery("");
                                    setSearchResults([]);
                                    setIsDesktopSearchOpen(false);
                                    handleNavigate(result.id, result.slug);
                                  }}
                                  style={{
                                    padding: "12px 20px",
                                    cursor: "pointer",
                                    borderBottom: "1px solid #f0f0f0",
                                    transition:
                                      "background-color 0.3s ease, color 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#ccd6ff";
                                    e.currentTarget.style.color = "#007bff";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#fff";
                                    e.currentTarget.style.color = "#333";
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0",
                                      fontSize: "15px",
                                      fontWeight: "500",
                                      color: "#333",
                                    }}
                                  >
                                    {result.name}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <div
                                style={{
                                  padding: "15px",
                                  textAlign: "center",
                                  color: "#666",
                                  fontSize: "14px",
                                  fontStyle: "italic",
                                }}
                              >
                                No results found
                              </div>
                            )}
                          </div>
                        )}
                      </div> */}
                      <div className="nav-icon">
                        {!authToken 
                        // || user_type === "customer_guest"
                          && (
                          <div
                            className="flex item-center"
                            style={{ display: "flex", gap: "4px" }}
                          >
                            <Nav.Link href="/login" className="text-sm">
                              <span className="login-text">LogIn / Register</span>
                            </Nav.Link>
                          </div>
                        )}

                        {authToken 
                        // && user_type !== "customer_guest"
                         && (
                          <BootstrapDropdown>
                            <BootstrapDropdown.Toggle
                              variant="link"
                              style={{
                                background: "transparent",
                                border: "none",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src="/profile.svg"
                                alt="Profile"
                                width={22}
                                height={22}
                              />
                            </BootstrapDropdown.Toggle>
                            <BootstrapDropdown.Menu
                              style={{
                                backgroundColor: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                padding: "10px 0",
                                minWidth: "180px",
                                marginTop: "8px",
                              }}
                              align="end"
                            >
                              <BootstrapDropdown.Item
                                onClick={() =>
                                  router.push("/dashboard/my-orders")
                                }
                                style={{
                                  padding: "8px 20px",
                                  fontSize: "14px",
                                  color: "#333",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#f5f5f5";
                                  e.currentTarget.style.color = "#007bff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.color = "#333";
                                }}
                              >
                                Dashboard
                              </BootstrapDropdown.Item>
                              <BootstrapDropdown.Item
                                onClick={handleLogout}
                                style={{
                                  padding: "8px 20px",
                                  fontSize: "14px",
                                  color: "#dc3545",
                                  fontWeight: "500",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#ffe5e7";
                                  e.currentTarget.style.color = "#c82333";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.color = "#dc3545";
                                }}
                              >
                                Logout
                              </BootstrapDropdown.Item>
                            </BootstrapDropdown.Menu>
                          </BootstrapDropdown>
                        )}
                        <Nav.Link
                          onClick={() => router.push("/add-to-cart/")}
                          style={{ position: "relative" }}
                        >
                          <Image
                            src="/cart.svg"
                            alt="cart"
                            width={22}
                            height={22}
                          />

                          <div
                            style={{
                              position: "absolute",
                              top: "-5px",
                              right: "-5px",
                              backgroundColor: "red",
                              color: "white",
                              borderRadius: "50%",
                              width: "15px",
                              height: "15px",
                              fontSize: "12px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {Count}
                          </div>


                        </Nav.Link>
                        {authToken && (
                          <Nav.Link href="/dashboard/my-whishlist/">
                            <Image
                              src="/like.svg"
                              alt="like"
                              width={22}
                              height={22}
                            />
                          </Nav.Link>)}
                      </div>
                    </Nav>
                  </div>
                </Navbar>
              </div>
            </div>

            <div className="relative w-full">
              {isMobileSearchOpen && (
                <div
                  className="search-container-wrapper"
                  ref={mobileSearchRef}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div
                    className="search-container-mobile relative"
                    style={{ backgroundColor: "#EEEEEE" }}
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="search-input"
                      autoFocus
                      value={searchQuery}
                      onBlur={() => setTimeout(() => setIsMobileSearchOpen(false), 200)}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="search-button">
                      <IoSearchOutline />
                    </button>
                    {searchQuery && (
                      <div
                        style={{
                          position: "absolute",
                          top: "45px",
                          left: "0",
                          width: "100%",
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          borderRadius: "8px",
                          maxHeight: "400px",
                          overflowY: "auto",
                          zIndex: 50,
                          padding: "10px 0",
                        }}
                      >
                        {searchResults.length > 0 ? (
                          searchResults.map((result) => (
                            <Link
                              key={result.id}
                              href={`/products/${generateSlug(
                                result.name
                              )}`}
                              onClick={() => {
                                setIsMobileSearchOpen(false);
                                setSearchQuery("");
                                setSearchResults([]);
                              }}
                              style={{
                                display: "block",
                                padding: "12px 20px",
                                textDecoration: "none",
                                borderBottom: "1px solid #f0f0f0",
                                transition:
                                  "background-color 0.3s ease, color 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#ccd6ff";
                                e.currentTarget.style.color = "#007bff";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#fff";
                                e.currentTarget.style.color = "#333";
                              }}
                            >
                              <p
                                style={{
                                  margin: "0",
                                  fontSize: "15px",
                                  fontWeight: "500",
                                  color: "#333",
                                }}
                              >
                                {result.name}
                              </p>
                            </Link>
                          ))
                        ) : (
                          <div
                            style={{
                              padding: "15px",
                              textAlign: "center",
                              color: "#666",
                              fontSize: "14px",
                              fontStyle: "italic",
                            }}
                          >
                            No results found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="relative nav-categories-section-wrapper">
              {iscategory && (
                <div className="nav-categories-section">
                  {currentLevel > 1 && (
                    <button className="nav-categories-btn-arrow">
                      <FaArrowLeftLong
                        className="shrink-0"
                        onClick={handleBackClick}
                      />
                      <Link
                        className="nav-categories-btn-arrow"
                        onClick={() => setIscategory(false)}
                        href={`/${[
                          ...categoryStack?.map((item: any) =>
                            generateSlug(item?.name)
                          ),
                          generateSlug(currentCategoryName),
                        ].join("/")}`}
                      >
                        <span className="text-left">{currentCategoryName}</span>
                      </Link>
                    </button>
                  )}
                  <div>
                    <ul className="nav-categories-section-list">
                      {currentCategories.map((item: any, index: number) => (
                        <li
                          key={item.id}
                          className="nav-categories-section-list-item"
                          onClick={() => handleMenuItemClick(item)}
                        >
                          <span
                            onClick={() => {
                              if (
                                !item?.number_of_children ||
                                item.number_of_children === 0
                              ) {
                                router.push(
                                  `/${categoryStack
                                    ?.map((item: any) =>
                                      generateSlug(item?.name)
                                    )
                                    .join("/")}/${generateSlug(
                                      currentCategoryName
                                    )}/${generateSlug(item.name)}`
                                );
                                setIscategory(false);
                              }
                            }}
                          >
                            {item.name}
                          </span>
                          {item?.number_of_children > 0 && (
                            <MdKeyboardArrowRight />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`header-bottom-container ${isActive ?'hidden':'' }`}
              onMouseEnter={() => handleMouseEnter(hoveredIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="lg-container header-bottom">
                <Swiper
                  onSwiper={(swiper: any) => (swiperRef.current = swiper)}
                  spaceBetween={0}
                  navigation={false}
                  breakpoints={Object.fromEntries(
                    Object.entries(slidesPerView).map(([key, value]) => [
                      parseInt(key, 10),
                      { slidesPerView: value },
                    ])
                  )}
                  modules={[Autoplay, Pagination]}
                  className="s"
                >
                  <Nav className="header-bottom-nav-menu">
                    {categories.map((item: any, index: number) => {
                      const slug = generateSlug(item?.name);
                      return (
                        <SwiperSlide
                          className="swiper-slide-header-bottom"
                          key={index}
                        >
                          <Link
                            className="nav-link"
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            href={`/${slug}`}
                          >
                            <div className="relative">
                              <div className="nav-link-text">{item.name}</div>
                            </div>
                            {hoveredIndex === item.id && (
                              <div className="activeLine w-full"></div>
                            )}
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Nav>
                </Swiper>
              </div>
              <div className="relative" onMouseLeave={handleMouseLeave}>
                {subCategory.length > 0 && (
                  <div className="header-bottom-nav w-full">
                    <div className="header-bottom-nav-links">
                      <div className="header-bottom-nav-links-section">
                        {subCategory.slice(0, 5).map((subItem: any) => {
                          const selectedCategory: any = categories?.find(
                            (item: any) => item.id === hoveredIndex
                          );
                          const maincategory = generateSlug(
                            selectedCategory?.name
                          );
                          const secondcategory = generateSlug(subItem?.name);
                          // console.log(",,,,,,,,,,,,,,,",`/${maincategory}/${subItem.name !== "View All"
                          //   ? secondcategory
                          //   : ""
                          //   }`);
                          return (
                            <Nav.Link
                              href={`/${maincategory}/${subItem.name !== "View All" ? secondcategory : ""
                                }`}
                              key={subItem.id}
                              className="header-bottom-nav-link"
                            >
                              <span className="header-bottom-nav-link-text">
                                {subItem.name}
                              </span>
                            </Nav.Link>
                          );
                        })}
                      </div>
                      {subCategory.length > 5 && (
                        <div className="header-bottom-nav-links-section">
                          {[
                            ...(subCategory.length > 10
                              ? subCategory
                                .slice(5, 10)
                                // .concat({ name: "View All" })
                              : subCategory.slice(5, 10) || []),
                          ].map((subItem: any) => {
                            const selectedCategory: any = categories?.find(
                              (item: any) => item.id === hoveredIndex
                            );
                            const maincategory = generateSlug(
                              selectedCategory?.name
                            );
                            const secondcategory = generateSlug(subItem?.name);
                            // console.log(",,,,,,,,,,,,,,,22",`/${maincategory}/${subItem.name !== "View All"
                            //   ? secondcategory
                            //   : ""
                            //   }`);
                            return (
                              <Nav.Link
                                href={`/${maincategory}/${subItem.name !== "View All"
                                  ? secondcategory
                                  : ""
                                  }`}
                                key={subItem.id}
                                className="header-bottom-nav-link"
                              >
                                <span className="header-bottom-nav-link-text">
                                  {subItem.name}
                                </span>
                              </Nav.Link>
                            );
                          })}
                        </div>
                      )}
                      {subCategory.length > 10 && (
                        <div className="header-bottom-nav-links-section">
                          {[
                            ...(subCategory.length > 14
                              ? subCategory
                                .slice(10, 14).concat({ name: "View All" })
                              : subCategory.slice(10, 14) || []),
                          ].map((subItem: any) => {
                            const selectedCategory: any = categories?.find(
                              (item: any) => item.id === hoveredIndex
                            );
                            const maincategory = generateSlug(
                              selectedCategory?.name
                            );
                            const secondcategory = generateSlug(subItem?.name);
                            // console.log(",,,,,,,,,,,,,,,33",`/${maincategory}/${subItem.name !== "View All"
                            //       ? secondcategory
                            //       : ""
                            //       }`);
                            return (
                              <Nav.Link
                                href={`/${maincategory}/${subItem.name !== "View All"
                                  ? secondcategory
                                  : ""
                                  }`}
                                key={subItem.id}
                                className="header-bottom-nav-link"
                              >
                                <span className="header-bottom-nav-link-text">
                                  {subItem.name}
                                </span>
                              </Nav.Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="header-bottom-nav-images">
                      <Image
                        src={subCategory[0].icon}
                        alt={`${subCategory[0].icon} image`}
                        width={250}
                        height={250}
                        className="header-bottom-nav-image"
                      />
                      <Image
                        src={subCategory[1].icon}
                        alt={`${subCategory[1].icon} image`}
                        width={250}
                        height={250}
                        className="header-bottom-nav-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Modal
            className="search-model"
            centered
            show={false}
            size="xl"
            onHide={() => { }}
          >
            <span className="close">
              <i className="fa-regular fa-xmark"></i>
            </span>
            <Form.Control type="text" placeholder="Search Here..." />
          </Modal>

          {toastMessage && (
            <Toast
              message={toastMessage}
              type={toastType}
              duration={3000}
              onClose={closeToast}
            />
          )}
        </div>
      </div>
    </div>
  );
}