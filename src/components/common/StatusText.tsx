import React from "react";

interface StatusTextProps {
  primary: string | number;
  secondary: string;
}

export const StatusText: React.FC<StatusTextProps> = ({
  primary,
  secondary,
}) => {
  return (
    <div>
      <p className="text-lg font-semibold">{primary}</p>
      <p className="text-sm text-gray-600">{secondary}</p>
    </div>
  );
};
