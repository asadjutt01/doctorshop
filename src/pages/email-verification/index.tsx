import React, { useEffect, useState } from "react";
import HeaderWithCat from "@/components/HeaderWithCat";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import Service from "@/services";
import Toast from "@/components/Toast";
import { setItem } from "@/utils/localStorage/localStorage";
import { useRouter } from "next/router";

export default function Index() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [resMessage, setResMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const closeToast = () => {
    setToastMessage(null);
  };
const router = useRouter();
  const  dispatch = useDispatch();
  const searchParams = useSearchParams();

  const q = searchParams?.get("q");
  const email = searchParams?.get("email")?.replace(/\/$/, "");

  // const HandleVerify = async () => {
  //   try {
  //     if (!q || !email) {
  //       setToastMessage("Missing verification data.");
  //       setToastType("error");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("user_id", q);
  //     formData.append("email", email);
  //     const res = await Service.Auth_Methods.verify_email(formData);

  //     if (res?.data?.status === true) {
  //       setToastMessage("Email verified successfully!");
  //       setToastType("success");
  //     } else {
  //       setToastMessage(res?.data?.message || "Verification failed.");
  //       setToastType("error");
  //     }
  //   } catch (error: any) {
  //     console.error("Verification error:", error);
  //     setToastMessage("Something went wrong during verification.");
  //     setToastType("error");
  //   } finally {
  //     setTimeout(() => {
  //       setToastMessage(null);
  //     }, 3000);
  //   }
  // };

  // useEffect(() => {
  //   HandleVerify();
  // }, []); // only run once on mount

  useEffect(() => {
    const HandleVerify = async () => {
      const q = searchParams?.get("q");
      const email = searchParams?.get("email")?.replace(/\/$/, "");
  
      try {
        setIsLoading(true);
        if (!q || !email) {
          // setToastMessage("Missing verification data.");
          // setToastType("error");
          return;
        }
  
        const formData = new FormData();
        formData.append("user_id", q);
        formData.append("email", email);
  
        const res :any = await Service.Auth_Methods.verify_email(formData);
        setItem("authToken", res?.token);
        if (res?.success === true) {
          setResMessage(res?.message || "Email verified successfully!");
          setToastMessage(res?.message || "Email verified successfully!");
          setToastType("success");
          setTimeout(() => {
            router.push(`/`);
          }, 3000);
          setIsLoading(false);
        } else {
          setResMessage(res?.message || "Verification failed");
          setToastMessage(res?.message || "Verification failed.");
          setToastType("error");
          setIsLoading(false);
        }
      } catch (error: any) {
        console.error("Verification error:", error);
        setToastMessage("Something went wrong during verification.");
        setToastType("error");
        setIsLoading(false);
      } finally {
        setTimeout(() => {
          // setToastMessage(null);
        }, 3000);
        setIsLoading(false);
      }
    };
  
    HandleVerify();
  }, [searchParams]);
  
  return (
    <div>
      <HeaderWithCat />
      <div className="login-page">
        <div
          className="lg-container"
          style={{ marginTop: "70px", marginBottom: "70px" }}
        >
          <div className="login-container" style={{ justifyContent: "center" }}>
            <div
              className="login-page-card"
              style={{ paddingTop: "100px", paddingBottom: "100px" }}
            >
              <div className="card-title-container">
                <h2 className="card-title">{isLoading ? "Verifying Email": resMessage}</h2>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#005eb8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "3rem",
                    }}
                  >
                    ✓
                  </span>
                </div>
              </div>

              <div style={{ textAlign: "center", fontSize: "18px" }}>
                <p>
                  Email: <strong>{email}</strong>
                </p>
                {/* <p>
                  Token: <strong>{q}</strong>
                </p> */}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
