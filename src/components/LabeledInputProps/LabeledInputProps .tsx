import Image from "next/image";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LabeledInputProps {
  id: string;
  label: string;
  labelTextColor?: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  errorTitle?: string;
  disabled?: boolean;
  password_input?:boolean;
  togglePasswordVisibility?: any;
}
// import Asterisk from "../Asterisk/Asterisk";
const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  labelTextColor,
  type,
  value,
  onChange,
  placeholder = "",
  required = false,
  errorTitle,
  disabled = false,
  password_input,
  togglePasswordVisibility,
}) => {
  return (
    <div className="w-full form-group">
      <div className="w-full">
        <label htmlFor={id} className={`form-group__label`}>
          {label}
          {/* {required ? <Asterisk color="red" /> : null} */}
        </label>
      </div>
      <div className="w-full relative">
        <input
          id={id}
          type={type}
          placeholder={`${type === "link" ? "http://" : "Type Here"}`}
          disabled={disabled}
          className={
            disabled
              ? "form-group__input disabled:pointer-events-none"
              : "form-group__input"
          }
          value={value}
          onChange={onChange}
          required={required}
        />
     {password_input && (
  <div
    className="calendar-icon absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
    onClick={togglePasswordVisibility}
  >
      {type === "password" ? <FaEyeSlash  size={22}/> : <FaEye size={22}/>}
  </div>
)}
        {errorTitle && (
          <span
            className="text-red-500 text-xxxs w-full p-1"
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {errorTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default LabeledInput;
{
  /* <div className="form-group">
  <label className="form-group__label" htmlFor="name">
    Address Line 2
  </label>
  <input
    type="text"
    id="name"
    className="form-group__input"
    placeholder="Address Line 2"
  />
</div> */
}
