import React from "react";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
// import Asterisk from "@/components/Elements/Asterisk/Asterisk";
import Image from "next/image";
import Asterisk from "../Asterisk/Asterisk";

interface LabeledDateTimeProps {
    id: string;
    label: string;
    labelTextColor?: string;
    value: string | number;
    onChange: (date: any) => void;
    placeholder?: string;
    required?: boolean;
    errorTitle?: string;
    disabled?: boolean;
    type: any,
}

const LabeledDateTime: React.FC<LabeledDateTimeProps> = ({
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
}) => {
    return (
        <div className="w-full form-group">
            {/* Label Section */}
            <div className="w-full">
                <label
                    htmlFor={id}
                    className={`form-group__label`}
                >
                    {label}
                    {required ? <Asterisk color="red" /> : null}
                </label>
            </div>

            {/* Input Section */}
            <div className="w-full relative">

                <Flatpickr
                    id={id}
                    value={value || ""}
                    options={{ enableTime: false, dateFormat: 'd-m-Y', position: 'auto left',
                        disableMobile: true 
                    }}
                    onChange={(date:any) => {
                        const isoString = new Date(date[0]).toISOString();
                        onChange(isoString);
                        // console.log('isoString', isoString);

                    }}
                    placeholder={placeholder}
                    className={`${disabled
                        ? "placeholder-xs disabled:pointer-events-none disabled:bg-[#eee]  cursor-not-allowed"
                        : "form-group__input"
                        }`}
                />


                {/* Calendar Icon for Date Type */}
                {type === "date" || type === "datetime-local" ? (
                    <div className="calendar-icon absolute top-[50%] right-2 -translate-y-[50%]">
                        <Image
                            src="/calendar.svg"
                            width={14}
                            height={14}
                            alt="calendar icon"
                        />
                    </div>
                ) : null}

                {/* Error Message */}
                {errorTitle && (
                    <span className="text-red-500 text-xs w-full p-1">
                        {errorTitle}
                    </span>
                )}
            </div>
        </div>
    );
};

export default LabeledDateTime;
