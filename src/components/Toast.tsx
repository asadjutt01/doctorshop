// @/components/Toast.tsx
import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number; // Optional duration in milliseconds
  onClose: () => void; // Callback to close the toast
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Trigger exit animation
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration]);

  useEffect(() => {
    if (isExiting) {
      const exitTimer = setTimeout(() => {
        onClose(); // Call onClose after exit animation completes
      }, 400); // Match the exit animation duration (0.4s)
      return () => clearTimeout(exitTimer);
    }
  }, [isExiting, onClose]);

  const backgroundColor = {
    success: "linear-gradient(135deg, #40c4ff, #007bff)", // Gradient blue for success
    error: "linear-gradient(135deg, #ff6f61, #d32f2f)",   // Gradient red for error
    info: "linear-gradient(135deg, #26c6da, #0288d1)",    // Gradient teal-blue for info
  }[type];

  const icon = {
    success: "✔",
    error: "✖",
    info: "ℹ",
  }[type];

  return (
    <div
      style={{
        position: "fixed",
        top: "30px",
        right: "30px",
        width: "340px", // Slightly wider for a luxurious feel
        padding: "16px 24px",
        background: backgroundColor,
        color: "white",
        borderRadius: "12px",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1)",
        animation: isExiting
          ? "slideOut 0.4s ease-in forwards"
          : "slideIn 0.5s ease-out, fadeIn 0.4s ease-in",
        border: `1px solid ${type === "success" ? "#0056b3" : type === "error" ? "#b71c1c" : "#006064"}`,
        fontFamily: "'Poppins', 'Segoe UI', Tahoma, sans-serif",
        overflow: "hidden",
        transition: "all 0.3s ease", // Smooth transitions for any dynamic changes
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "700",
            background: "rgba(255, 255, 255, 0.25)",
            borderRadius: "50%",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {icon}
        </span>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "1.5",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {message}
        </span>
      </div>
      <button
        onClick={() => setIsExiting(true)} // Trigger exit animation on click
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
          e.currentTarget.style.transform = "scale(1.15) rotate(90deg)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        }}
      >
        ×
      </button>
      {/* Subtle glow effect */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)",
          pointerEvents: "none",
          animation: "pulse 2s infinite ease-in-out",
        }}
      />
    </div>
  );
};

// Enhanced CSS animations
const styles = `
  @keyframes slideIn {
    0% {
      transform: translateX(120%) scale(0.9);
      opacity: 0;
    }
    70% {
      transform: translateX(-5%) scale(1.02);
      opacity: 0.95;
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      filter: blur(2px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    30% {
      transform: translateX(-5%) scale(1.02);
      opacity: 0.95;
    }
    100% {
      transform: translateX(120%) scale(0.9);
      opacity: 0;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Toast;