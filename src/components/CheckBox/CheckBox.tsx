import Link from "next/link";
import React from "react";

interface CheckboxProps {
  text?: string;
  labelLink?: string;
  classname?: string;
  isChecked?: boolean;
  setIsChecked: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  labelLink,
  classname = "",
  isChecked = false,
  setIsChecked,
}) => {
  const handleChange = (e: any) => {
    console.log("Checkbox clicked, current state: ", isChecked);
    setIsChecked(!isChecked);

  };

  return (
    <div className={`checkbox-wrapper-28 ${classname}`}>
      <input
        id="tmp-28"
        type="checkbox"
        className="promoted-input-checkbox"
        checked={isChecked}
        onChange={(e) => { handleChange(e) }}
        aria-checked={isChecked}
        aria-label={text}
      />
      <div className="checkbox-wrapper-hover-bg relative">
        <svg style={{
          height: `${isChecked ? '50%' : '0%'}`
        }}>
          <use xlinkHref="#checkmark-28"></use>
        </svg>

        <label onClick={handleChange}>
        </label>
      </div>
      {/* <Link href={`${labelLink}`} className="checkbox-wrapper-text">
        {text}
      </Link> */}
      {labelLink ? <Link href={`${labelLink ? labelLink : ''}`} className="checkbox-wrapper-text">
        {text}
      </Link> :
        <div className="checkbox-wrapper-text-black">
          {text}
        </div>}
      {/* Inline SVG symbol for the checkmark */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="checkmark-28" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            fill="none"
            d="M22.9 3.7l-15.2 16.6-6.6-7.1"
          />
        </symbol>
      </svg>
    </div>
  );
};

export default Checkbox;
