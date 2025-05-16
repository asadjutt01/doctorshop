import Image from "next/image";
import React from "react";
import Asterisk from "../Asterisk/Asterisk";

interface LabeledCardInputProps {
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
  cardNumber?: boolean;
}
// import Asterisk from "../Asterisk/Asterisk";
const LabeledCardInput: React.FC<LabeledCardInputProps> = ({
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
  cardNumber = false
}) => {
  return (
    <div className="w-full form-group">
      <div className="w-full">
        <label
          htmlFor={id}
          className={`form-group__label`}
        >
          {label}
          {required ? <Asterisk color="red" /> : null}
        </label>
      </div>
      <div className="w-full relative">
        <input
          id={id}
          type={type}
          placeholder={`Type Here`}
          disabled={disabled}
          className={
            disabled
              ? "text-white-dark placeholder-xs form-input disabled:pointer-events-none disabled:bg-[#eee] cursor-not-allowed"
              : "form-group__input"
          }
          value={value}
          onChange={onChange}
          required={required}
        />
        {cardNumber ? (<div className="checkout-payment__card-icons">
          <Image
            src="/Visa.svg"
            alt="Visa"
            className="checkout-payment__card-icon"
            width={30}
            height={20}
          />
          <Image
            src="/MasterCard.svg"
            alt="M"
            className="checkout-payment__card-icon"
            width={30}
            height={20}
          />
          <Image
            src="/AmericanExpress.svg"
            alt="AmericanExpress"
            className="checkout-payment__card-icon"
            width={30}
            height={20}
          />
          <Image
            src="/UnionPay_logo.svg"
            alt="Up"
            className="checkout-payment__card-icon"
            width={30}
            height={20}
          />
        </div>) : (<div className="checkout-payment__card-icons">
          <Image
            src="/cvv.svg"
            alt="Visa"
            className="checkout-payment__card-icon"
            width={30}
            height={20}
          />
        </div>)}
        {errorTitle && (
          <span className="text-red-500 text-xxxs w-full p-1 mb-0" style={{
            color:"red",
            fontSize:"12px"
          }}>{errorTitle}</span>
        )}
      </div>
    </div>
  );
};

export default LabeledCardInput;

{/* <div className="form-group">
  <label className="form-group__label" htmlFor="phone">
    Card Number
  </label>
  <div className="relative">
    <input
      type="text"
      id="cardNumber"
      className="form-group__input"
      placeholder="0123 456 7890"
      style={{ paddingRight: '160px' }}
    />
    <div className="checkout-payment__card-icons">
      <Image
        src="/Visa.svg"
        alt="Visa"
        className="checkout-payment__card-icon"
        width={30}
        height={20}
      />
      <Image
        src="/MasterCard.svg"
        alt="M"
        className="checkout-payment__card-icon"
        width={30}
        height={20}
      />
      <Image
        src="/AmericanExpress.svg"
        alt="AmericanExpress"
        className="checkout-payment__card-icon"
        width={30}
        height={20}
      />
      <Image
        src="/UnionPay_logo.svg"
        alt="Up"
        className="checkout-payment__card-icon"
        width={30}
        height={20}
      />
    </div>
  </div>
</div> */}