import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange } from "@/utils/functions";
import { validateEmail, validateRequired } from "@/validation/Validation";
import { useRouter } from "next/router";
import Checkbox from "@/components/CheckBox/CheckBox";
import { getItem, setItem } from "@/utils/localStorage/localStorage";
import { login } from "@/redux/store/auth/authConfigSlice";
import Service from "@/services";
import { useDispatch } from "react-redux";
import Toast from "@/components/Toast";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Login() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const router = useRouter();
  const { query }: any = router;
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const isFormValid = email && password && !emailError && !passwordError;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };
  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage(""); // Clear previous error messages

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("login_by", "email");

      // Show loading alert
      // Swal.fire({
      //   title: "Logging In...",
      //   text: "Please wait while we authenticate you.",
      //   icon: "info",
      //   allowOutsideClick: false,
      //   didOpen: () => {
      //     Swal.showLoading();
      //   },
      // });

      const response: any = await Service.Auth_Methods.login(formData);

      // console.log("Response from API >>>>>>", response);

      if (response && response.access_token) {
        setItem("authToken", response.access_token);
        setItem("authToken", response?.access_token);
                setItem("user_type", response?.user_type);
                setItem("user_id", response?.user?.id);
                setItem("is_pharmaceutical", response.is_pharmaceutical);
                setItem("is_pharma_approved", response.is_pharma_approved);
                setItem("user", response?.user);
        dispatch(login({ user: response.user, token: response.access_token }));

        if (query?.fromcheckout === "true") {
          const temp_user_id: any = getItem("temp_user_id");
          const formData = new FormData();
          formData.append("user_id", response.user?.id);
          formData.append("temp_user_id", temp_user_id);
          
          const tempResponse: any = await Service.Cart_Method.tempUserIdUpdate(
            formData
          );
          // Success alert
          // Swal.fire({
          //   title: "Login Successful!",
          //   text: "Redirecting to your checkout...",
          //   icon: "success",
          //   timer: 2000, // Auto-close in 2 seconds
          //   showConfirmButton: false,
          // });
        
if (response.is_pharma_approved  === 1) {
  
  router.push("/add-to-cart/checkout");
  setToastType("success");
  setToastMessage("Login Successful! Redirecting to your checkout...");
}else if(response.is_pharmaceutical === 1 || response.is_pharma_approved  !== 1){
  router.push("/");
  setToastType("success");
  setToastMessage("Login Successful! Redirecting to your Home please weight while we Your Approve Pharma Account...");
}else if (response.is_pharmaceutical === 0){
  router.push("/register-pharma");
  setToastType("success");
  setToastMessage("Login Successful! Redirecting to your checkout...");
}
        } else {
          // console.log('data>>>>>>>',query);
          // console.log('data?.fromcheckout',query?.fromcheckout);
          // Success alert
          // Swal.fire({
          //   title: "Login Successful!",
          //   text: "Redirecting to your dashboard...",
          //   icon: "success",
          //   timer: 2000, // Auto-close in 2 seconds
          //   showConfirmButton: false,
          // });
          setToastType("success");
          setToastMessage("Login Successful! Redirecting to your dashboard....");
          router.push("/dashboard");
        }
      } else {
        setErrorMessage("Login failed: No access token received");
        // console.log("No access token received.");

        // Error alert
        // Swal.fire({
        //   title: "Login Failed!",
        //   text: "No access token received. Please try again.",
        //   icon: "error",
        // });
        setToastType("error");
        setToastMessage("No access token received. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Invalid email or password");
      console.error("Login Error:", err);

      // Error alert
      // Swal.fire({
      //   title: "Login Failed!",
      //   text: "Invalid email or password. Please try again.",
      //   icon: "error",
      // });
      setToastType("error");
      setToastMessage("Invalid email or password. Please try again.");
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
          {/* <Breadcrumb /> */}
          <div className="login-container">
            <div className="login-page-card">
              <div className="card-title-container">
                <h2 className="card-title">Already Registered</h2>
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
                    handleInputChange(
                      setEmail,
                      [validateRequired, validateEmail],
                      setEmailError
                    )(e.target.value)
                  }
                  errorTitle={emailError}
                />

                {/* <LabeledInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  label="Password"
                  required={true}
                  onChange={(e) =>
                    handleInputChange(
                      setPassword,
                      [validateRequired],
                      setPasswordError
                    )(e.target.value)
                  }
                  errorTitle={passwordError}
                /> */}
                 <LabeledInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    label="Password"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setPassword, [validateRequired], setPasswordError)(e.target.value)
                    }
                    password_input={true}
                    togglePasswordVisibility={togglePasswordVisibility}
                    errorTitle={passwordError}
                  />
                {/* <div className="Remember-me-forget">
                  <Checkbox
                    text={"Remember me"}
                    classname={""}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    // labelLink={"/terms-&-conditions"}
                  />
                  <div></div>
                  <span>Forgotten you psssword?</span>
                </div> */}

<div
                    className="Remember-me-forget"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    {/* <Checkbox
                      text="Remember me"
                      classname=""
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                    /> */}
                    <div></div>
                    <Link href={'/forget-password'}>
                          <span style={{ color: "#007bff", cursor: "pointer" }}>Forgotten your password?</span>
                    </Link>
                    </div>              </div>
              <button
                type="submit"
                className="primary-button"
                onClick={handleLogin}
                disabled={!isFormValid || loading}
                style={{
                  backgroundColor: !isFormValid || loading ? "#ccc" : "#0056b3",
                }}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
              <Link href={'/register'} className="underline">
                  Regiter 
                </Link>
            </div>
            <div className="login-page-card">
              <div className="card-title-container">
                <h2 className="card-title">Checkout as Guest</h2>
              </div>
              <div>
                <p className="card-description">
                  Remember to create an account to enjoy:
                </p>

                <ul className="benefits-list">
                  <li>Faster checkout</li>
                  <li>Easy order tracking</li>
                  <li>Unmissable offers just for you</li>
                  <li>A wish list to store your favorite</li>
                </ul>
              </div>
              <button
                type="submit"
                className="secondary-button"
                onClick={() => {
                  // router.push("/register-guest")

                  if (query?.fromcheckout === "true") {
                    const data = {
                      fromcheckout: true,
                    };
                    router.push(
                      {
                        pathname: `/register-guest`,
                        query: data,
                      },
                      `/register-guest`,
                      { shallow: true }
                    );
                  } else {
                    router.push("/register-guest");
                  }
                }}
              >
                Continue
              </button>
            </div>
          </div>
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
      <Footer />
    </div>
  );
}
