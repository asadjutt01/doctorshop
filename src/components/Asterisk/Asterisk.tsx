// Asterisk.tsx
import React from 'react';

interface AsteriskProps {
  color?: string;
  required?:boolean;
}

const Asterisk: React.FC<AsteriskProps> = ({ color = 'black',required=false }) => {
  return (
    <span style={{
  color: `${color}`,
    position: required ? undefined : "absolute",
    top: required ? undefined : "-2px",
    fontSize: required ? undefined : "10px",
    // right: required ? undefined : "10px"
}} >
      {required ? "optional" :"*"}
    </span>
  );
};

export default Asterisk;