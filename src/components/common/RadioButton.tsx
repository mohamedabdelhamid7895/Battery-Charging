import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../common/Button";

interface RadioButtonProps {
  label: string;
  icon: IconDefinition;
  isSelected: boolean;
  onClick: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="radio"
      className={`flex items-center gap-2 ${
        isSelected ? "bg-indigo-100 text-indigo-700" : ""
      }`}
      role="radio"
      aria-checked={isSelected}
      aria-label={label}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};