import React from "react";

interface StepperProps {
    width?:string;
    currentStep:number;
    steps:any[];
    setCurrentStep:(value: any) => void;
}

const Stepper: React.FC<StepperProps> = ({
    width = '50%',
    currentStep,
    steps,
    setCurrentStep }) => {
    return (
        <div className="stepper" style={{ width: width }}>
            <div className="stepper__track">
                <div className="stepper__track-upper">
                    <div
                        className="stepper__track-inner"
                        style={{ width: `calc(${(currentStep / (steps.length - 1)) * 100}%)` }}
                    ></div>
                </div>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`stepper__step ${currentStep === index ? "stepper__step--active" : ""}`}
                        style={{ left: `calc(${(index / (steps.length - 1)) * 99}%)` }}
                    >
                        <div
                            className="stepper__circle"
                            style={{ backgroundColor: `${currentStep >= index ? '#005eb8' : '#98A2A2'}` }}
                        >
                            <span className="stepper__label">{step.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;