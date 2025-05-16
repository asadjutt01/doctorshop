import React from "react";
import Select, { components } from "react-select";
// import Asterisk from "../Asterisk/Asterisk";
import { Option } from "@/types/types";
import Asterisk from "../Asterisk/Asterisk";

interface LabeledSelectProps {
  id: string;
  label: string;
  options?: Option[];
  value: Option | number | null;
  onChange: any;
  placeholder?: string;
  isSearchable?: boolean;
  errorTitle?: string;
  disable?: boolean;
  required?: boolean;
}

// const customStyles = {
//   control: (base: any, state: any) => ({
//     ...base,
//     width: '100%',
//     borderRadius: '0.125rem',
//     border: state.isFocused ? '2px solid #008fca' : '2px solid #f0f0f0',
//     backgroundColor: '#ffffff',
//     padding: '5px 0.6rem',
//     outline: 'none',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.02), 0px -4px 6px rgba(0, 0, 0, 0.02), 4px 0px 6px rgba(0, 0, 0, 0.02), -4px 0px 6px rgba(0, 0, 0, 0.02)',
//     '&:hover': {
//       borderColor: 'none',
//     },
//   }),
//   option: (base: any, state: any) => ({
//     ...base,
//     color: state.isSelected ? 'white' : 'black',
//     padding: '8px',
//     outline: 'none',
//     borderRadius: '0.125rem',

//   }),
//   menu: (base: any) => ({
//     ...base,
//     zIndex: 0,
//     color: '#008fca',
//   }),
// };

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    width: '100%',
    padding: '8px',
    border: state.isFocused ? '1px solid #007bff' : '1px solid rgba(112, 112, 112, 0.27)',
    borderRadius: '8px',
    fontSize: '0.875rem',
    color: '#575757',
    outline: 'none',
    boxShadow: state.isFocused ? '0 0 2px rgba(0, 123, 255, 0.25)' : 'none',
    '&:hover': {
      borderColor: 'rgba(112, 112, 112, 0.27)',
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    color: state.isSelected ? 'white' : '#575757',
    backgroundColor: state.isSelected ? '#007bff' : 'white',
    padding: '8px',
    borderRadius: '0.125rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
    },
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 10,
  }),
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props} className="p-0">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="p-0" fill="#008fca"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
    </components.DropdownIndicator>
  );
};

const LabeledSelect: React.FC<LabeledSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  placeholder = "Choose...",
  isSearchable = false,
  errorTitle,
  disable = false,
}) => {
  return (
    <div className="w-full form-group">
      <div className="w-full">
        <label
          htmlFor={id}
          className={"form-group__label"}
        >
          {label}
          {required ? <Asterisk color="red" /> : null}
        </label>
      </div>
      <div className="w-full">
        <Select
          id={id}
          placeholder={placeholder}
          options={options}
          value={value}
          onChange={onChange}
          isSearchable={isSearchable}
          isDisabled={disable}
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
        {errorTitle && (
          <span className="text-red-500 text-xs w-full p-1">
            {errorTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default LabeledSelect;