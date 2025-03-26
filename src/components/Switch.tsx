import React from "react";

interface SwitchProps {
    value: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

const Switch: React.FC<SwitchProps> = ({
    value,
    selectedValue,
    onChange,
}) => {
    return (
        <div
            className={`switch ${selectedValue === value ? "selected" : "unselected"}`}
            onClick={() => onChange(value)}
        >
            <div
                className={`handle ${selectedValue === value ? "selected" : "unselected"}`}
            ></div>
        </div>
    );
};

export default Switch;