import React from "react";

interface StatusCardProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  "aria-label"?: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  children,
  className = "",
  role = "status",
  "aria-label": ariaLabel,
}) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};
