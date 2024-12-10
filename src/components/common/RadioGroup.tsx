import React from "react";

interface RadioGroupProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  label,
  className = "",
}) => {
  return (
    <div
      className={`flex gap-2 ${className}`}
      role="radiogroup"
      aria-label={label}
    >
      {children}
    </div>
  );
};
