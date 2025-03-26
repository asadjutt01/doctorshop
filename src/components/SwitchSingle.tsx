import React, { useState } from "react";

interface SwitchSingleProps {
    checked: boolean;
    onToggle: (checked: boolean) => void;
}

const SwitchSingle: React.FC<SwitchSingleProps> = ({ checked, onToggle }) => {
    return (
        <div
            // className={`max-w-12 w-10 h-5 p-0.5 flex items-center rounded-full cursor-pointer transition-colors ${checked ? 'bg-primary' : 'bg-[#B0BEC5]'}`}
            className={`switch ${checked  ? "selected" : "unselected"}`}
            onClick={() => onToggle(!checked)}
        >
            <div
                // className={`w-4 h-4 rounded-full ${checked ? 'bg-[#F2FBFF]' : 'bg-[#ECEFF1]'} transform transition-transform ${checked ? "translate-x-5" : "translate-x-0"
                //     }`}
                className={`handle ${checked  ? "selected" : "unselected"}`}
            ></div>
        </div>
    );
};

export default SwitchSingle;