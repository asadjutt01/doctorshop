import React, { useEffect, useState } from "react";
// import Asterisk from "../Asterisk/Asterisk";
import "react-phone-number-input/style.css";
import Asterisk from "../Asterisk/Asterisk";
interface LabeledPhoneInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  required?: boolean;
  errorTitle?: string;
  className?: string;
  disabled?: boolean;
  labelTextColor?: any;
}

const LabeledPhoneInput: React.FC<LabeledPhoneInputProps> = ({
  id,
  label,
  value,
  onChange,
  labelTextColor,
  placeholder = "Enter phone number",
  required = false,
  className,
  errorTitle,
  disabled = false,
}) => {
  const [PhoneInput, setPhoneInput] = useState<any>(null);

  useEffect(() => {
    import("react-phone-number-input").then((module) => {
      setPhoneInput(() => module.default);
    });
  }, []);

  if (!PhoneInput) return <div>Loading phone input...</div>;

  return (
    <div className="w-full form-group">
      <div className="w-full">
        <label htmlFor={id} className={`form-group__label relative`}>
          {label}
          {required ? (
            <Asterisk color="red" />
          ) : //<Asterisk color="blue" required={required} />
          null}
        </label>
      </div>

      <div className="w-full">
        <PhoneInput
          international
          id={id}
          placeholder={placeholder}
          value={value}
          defaultCountry="GB"
          onChange={onChange}
          disabled={disabled}
          className={
            disabled
              ? `form-group__input ${className} disabled:pointer-events-none bg-disabled`
              : `form-group__input ${className}`
          }
          inputClassName={
            disabled
              ? `form-group__input ${className} disabled:pointer-events-none bg-disabled`
              : `form-group__input ${className}`
          }
        />

        {errorTitle && (
          <span
            className="text-red-500 text-xxxs w-full p-1 mb-0"
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

export default LabeledPhoneInput;
