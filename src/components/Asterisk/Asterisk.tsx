// Asterisk.tsx
import React from 'react';

interface AsteriskProps {
  color?: string;
}

const Asterisk: React.FC<AsteriskProps> = ({ color = 'black' }) => {
  return (
    <span style={{ color }} >
      *
    </span>
  );
};

export default Asterisk;
