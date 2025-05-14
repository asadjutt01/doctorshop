import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";

interface LabeledStripeInputProps {
  id: string;
  label: string;
  required?: boolean;
  errorTitle?: string;
}

const LabeledStripeInput: React.FC<LabeledStripeInputProps> = ({
  id,
  label,
  required = false,
  errorTitle,
}) => {
  return (
    <div className="w-full form-group">
      <div className="w-full">
        <label htmlFor={id} className="form-group__label">
          {label}
          {/* {required ? <Asterisk color="red" /> : null} */}
        </label>
      </div>
      <div className="w-full">
        <div className="form-group__input p-2 border rounded bg-white">
          {id === "card-number" && <CardNumberElement className="w-full" />}
          {id === "card-expiry" && <CardExpiryElement className="w-full" />}
          {id === "card-cvc" && <CardCvcElement className="w-full" />}
        </div>
        {errorTitle && (
          <span className="text-red-500 text-xxxs w-full p-1 mb-0" style={{ color: "red", fontSize: "12px" }}>
            {errorTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default LabeledStripeInput;