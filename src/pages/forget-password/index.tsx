import React, { useEffect, useState } from "react";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import LabeledInput from "@/components/LabeledInputProps/LabeledInputProps ";
import { handleInputChange } from "@/utils/functions";
import { validateEmail, validateRequired } from "@/validation/Validation";
import { useRouter } from "next/router";
import Checkbox from "@/components/CheckBox/CheckBox";
import {
  getItem,
  removeItem,
  setItem,
} from "@/utils/localStorage/localStorage";
import { login } from "@/redux/store/auth/authConfigSlice";
import Service from "@/services";
import { useDispatch } from "react-redux";
import Toast from "@/components/Toast"; // Assuming this is the path to your Toast component

export default function Index() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const [authToken, setAuthToken] = useState<any>(null);

  useEffect(() => {
    const token: any = getItem("authToken");
    setAuthToken(token);
  }, []);
  const router = useRouter();
  const { query }: any = router;
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isEmailSubmit, setIsEmailSubmit] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [codeError, setCodeError] = useState<string>("");


  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  const togglePasswordVisibility = (setShowPassword:any) => {
    setShowPassword((prev:any) => !prev);
  };

  const isFormValid = email && !emailError;
  const isFormValidCode = code && !codeError;
  const isFormValidPasswords = password && !passwordError && passwordConfirm && !passwordConfirmError && password === passwordConfirm;

  // const  isPasswordMatch =  password.length > 0 &&
  // passwordConfirm.length > 0 &&
  // password !== passwordConfirm;
  // if(isPasswordMatch){
  //   setPasswordConfirmError("Password Do Not Match")
  // }
  useEffect(() => {
    if (
      password.length > 0 &&
      passwordConfirm.length > 0 &&
      password !== passwordConfirm
    ) {
      setPasswordConfirmError("Passwords do not match");
    } else {
      // setPasswordConfirmError("");
    }
  }, [password, passwordConfirm]);
  
  const handleSendMail = async () => {
    setLoading(true);
    setToastType("info");
    setToastMessage("Sending code... Please wait while we sending you code");

    try {
      const formData = new FormData();
      formData.append("send_code_by", email);

      const response: any = await Service.Auth_Methods.forget_Password(
        formData
      );
      if (response?.result === true) {
        setIsEmailSubmit(true);
        setToastType("success");
        setToastMessage(response?.message || "Code Sent Successfully");
      }
      return response;
    } catch (error: any) {
      setToastType("error");
      const errorMessage =
        error.response?.data?.message;

      setToastMessage(errorMessage);
      console.error("Send Mail Error :", errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const handleSendCodeVerify = async () => {
    setLoading(true);
    setToastType("info");
    setToastMessage("Verifying code... Please wait while we Verify your code");

    try {
      const formData = new FormData();
      formData.append("verification_code", code);

      const response: any = await Service.Auth_Methods.forget_Password_verify_code(formData);
      if (response?.result === true) {
        setIsVerified(true);
        setItem("user_id",response?.user_id)
        setToastType("success");
        setToastMessage(response?.message || "Code Verified Successfully");
      }
      return response;
    } catch (error: any) {
      setToastType("error");
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";

      setToastMessage(errorMessage);
      console.error("Verify Error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoading(true);
    setToastType("info");
    setToastMessage("Reseting password... Please wait while weRseting your password");

    try {
      const formData = new FormData();
      const user_id : any = getItem("user_id")
      formData.append("user_id", user_id);
      formData.append("password", password);
      formData.append("confirm_password", passwordConfirm);

      const response: any = await Service.Auth_Methods.forget_Password_confirm_reset(
        formData
      );
      if (response?.result === true) {
        setToastType("success");
        setToastMessage(response?.message || "Your password has been reset.Please login");
        setTimeout(() => {
          router.push("/login")
        }, 3000);       
      }
      return response;
    } catch (error: any) {
      const errorMessage =
      error.response?.data?.message || "Something went wrong!";
      setToastType("error");
      setToastMessage(errorMessage);
      console.error("Reset Password Error:", errorMessage);
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
          <div className="login-container" style={{ justifyContent: "center" }}>
            <div className="login-page-card">
              <div className="card-title-container">
                <h2 className="card-title">Reset Your Password</h2>
              </div>
              {!isVerified ? <>
              
              {!isEmailSubmit ? (
                <>
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
                </div>
                <button
                type="submit"
                onClick={handleSendMail}
                disabled={!isFormValid || loading}
                style={{
                  backgroundColor: !isFormValid || loading ? "#ccc" : "#005eb8",
                }}
                className="primary-button"
              >
                {loading ? "Procssing..." : "Send Code"}
              </button>
                </>
              ) : (
                <>
                <div className="login-form">
                  <LabeledInput
                    id="code"
                    type="text"
                    placeholder="Enter Code"
                    value={code}
                    label="Enter Code"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(
                        setCode,
                        [validateRequired],
                        setCodeError
                      )(e.target.value)
                    }
                    errorTitle={codeError}
                  />
                </div>
                <button
                type="submit"
                onClick={handleSendCodeVerify}
                disabled={!isFormValidCode || loading}
                style={{
                  backgroundColor: !isFormValidCode || loading ? "#ccc" : "#005eb8",
                }}
                className="primary-button"
              >
                {loading ? "Procssing..." : "Submit"}
              </button>
                </>
              )}
  
  </> :
  <>
<div className="login-form">
<LabeledInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    label="New Password"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setPassword, [validateRequired], setPasswordError)(e.target.value)
                    }
                    password_input={true}
                    togglePasswordVisibility={() => togglePasswordVisibility(setShowPassword)}
                    errorTitle={passwordError}
                  />
                  <LabeledInput
                    id="passwordConfirm"
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    label="Confirm Password"
                    required={true}
                    onChange={(e) =>
                      handleInputChange(setPasswordConfirm, [validateRequired], setPasswordConfirmError)(e.target.value)
                    }
                    password_input={true}
                    togglePasswordVisibility={() => togglePasswordVisibility(setShowPasswordConfirm)}
                    errorTitle={passwordConfirmError}
                  />

{/* {isPasswordMatch && <span style={{ color: 'red' }}>Password Do Not Match</span>} */}
                </div>
                <button
                type="submit"
                onClick={handleReset}
                disabled={!isFormValidPasswords || loading}
                style={{
                  backgroundColor: !isFormValidPasswords || loading ? "#ccc" : "#005eb8",
                }}
                className="primary-button"
              >
                {loading ? "Procssing..." : "Submit"}
              </button>

  </>}
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
