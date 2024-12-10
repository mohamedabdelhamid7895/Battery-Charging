import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../common/Card";
import { StatusText } from "../common/StatusText";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessageComponent: React.FC<ErrorMessageProps> = ({ message }) => (
  <Card className="flex items-center gap-2 bg-red-50 text-red-700 p-4">
    <div
      role="alert"
      aria-live="assertive"
      className="flex items-center gap-2 w-full"
    >
      <FontAwesomeIcon
        icon={faExclamationCircle}
        className="w-6 h-6"
        aria-hidden="true"
      />
      <StatusText primary={message} secondary="" />
    </div>
  </Card>
);

export const ErrorMessage = memo(ErrorMessageComponent);
