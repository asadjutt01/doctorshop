import React, { useEffect, useState } from "react";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange } from "@/utils/functions";
import { validateEmail, validateRequired } from "@/validation/Validation";
import { useRouter } from "next/router";
import Checkbox from "@/components/CheckBox/CheckBox";
import { getItem, removeItem, setItem } from "@/utils/localStorage/localStorage";
import { login } from "@/redux/store/auth/authConfigSlice";
import Service from "@/services";
import { useDispatch } from "react-redux";
import Toast from "@/components/Toast"; // Assuming this is the path to your Toast component

export default function Login() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const [authToken, setAuthToken] = useState<any>(null);

  useEffect(() => {
    const token: any = getItem("authToken");
    setAuthToken(token);
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const isFormValid = email && password && !emailError && !passwordError;

  const handleLogin = async () => {
    setLoading(true);
    setToastType("info");
    setToastMessage("Logging in... Please wait while we authenticate you");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("login_by", "email");

      const response: any = await Service.Auth_Methods.login(formData);

      console.log("Response from API >>>>>>", response);

      if (response && response.access_token) {
        setItem("authToken", response?.access_token);
        setItem("user_type", response?.user_type);
        setItem("user_id", response?.user?.id);
        setItem("user", response?.user);
        dispatch(login({ user: response.user, token: response.access_token }));

        setToastType("success");
        setToastMessage("Login Successful! Welcome back!");

        // const cart_data = getItem('cart_data')
        // if (cart_data && Object.keys(cart_data).length > 0) {
        //   try {
        //     const response = await Service.Cart_Method.addToCart(cart_data);
        //     if (response) {
        //       console.log("Successfully Add to cart");
        //       setToastType("success");
        //       setToastMessage("Added to Cart! The item has been successfully added to your cart.");
        //       removeItem('cart_data')
        //     } else {
        //       console.error("Failed to add in cart");
        //       setToastType("error");
        //       setToastMessage("Failed to Add! Unable to add the item to your cart. Please try again.");
        //     }
        //   } catch (error) {
        //     console.error("Error adding cart:", error);
        //     setToastType("error");
        //     setToastMessage("Error! Something went wrong. Please try again.");
        //   }
        // }
        // if (cart_data && Object.keys(cart_data).length > 0) {
        //   try {
        //     const cartResponse = await Service.Cart_Method.addToCart(cart_data);
        //     if (cartResponse) {
        //       console.log("Successfully added to cart");
        //       setToastType("success");
        //       setToastMessage("Added to Cart! The item has been successfully added to your cart.");
        //       removeItem("cart_data"); // Clear the stored cart data after adding
        //     } else {
        //       console.error("Failed to add to cart");
        //       setToastType("error");
        //       setToastMessage("Failed to Add! Unable to add the item to your cart. Please try again.");
        //     }
        //   } catch (cartError) {
        //     console.error("Error adding cart:", cartError);
        //     setToastType("error");
        //     setToastMessage("Error! Something went wrong. Please try again.");
        //   }
        // }
        setTimeout(() => {
          router.push("/");

        }, 1500); // Delay to show success toast
      } else {
        setToastType("error");
        setToastMessage("Invalid credentials, please try again.");
        console.log("No access token received.");
      }
    } catch (error: any) {
      setToastType("error");
      const errorMessage = error.response?.data?.message || "Something went wrong!";

      setToastMessage(errorMessage);
      console.error("Login Error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div>
      <HeaderWithCat />
      <div className="login-page">
        <div className="lg-container">
          <div className="login-container">
            {!authToken && (
              <div className="login-page-card">
                <div className="card-title-container">
                  <h2 className="card-title">Returning Customer</h2>
                </div>
                <div className="login-form">
                  <LabeledInput
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    label="Email"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setEmail, [validateRequired, validateEmail], setEmailError)(e.target.value)
                    }
                    errorTitle={emailError}
                  />

                  <LabeledInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    label="Password"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setPassword, [validateRequired], setPasswordError)(e.target.value)
                    }
                    errorTitle={passwordError}
                  />
                  <div
                    className="Remember-me-forget"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Checkbox
                      text="Remember me"
                      classname=""
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                    />
                    <span style={{ color: "#007bff", cursor: "pointer" }}>Forgotten your password?</span>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleLogin}
                  disabled={!isFormValid || loading}
                  style={{
                    backgroundColor: !isFormValid || loading ? "#ccc" : "#005eb8",
                  }}
                  className="primary-button"
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>
            )}

            <div className="login-page-card">
              <div className="card-title-container">
                <h2 className="card-title">New Customer</h2>
              </div>
              <div>
                <p className="card-description">Register for an account to enjoy:</p>
                <ul className="benefits-list">
                  <li>Faster checkout</li>
                  <li>Easy order tracking</li>
                  <li>Offers sent directly to you</li>
                  <li>A favourite list to store all your essentials</li>
                </ul>
              </div>
              <button
                type="submit"
                className="secondary-button"
                onClick={() => router.push("/register")}
              >
                Register
              </button>
            </div>

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
      <Footer />
    </div>
  );
}