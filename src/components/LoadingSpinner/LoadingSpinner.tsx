import React, { memo } from "react";

const LoadingSpinnerComponent: React.FC = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div role="status" aria-label="Loading...">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
        <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export const LoadingSpinner = memo(LoadingSpinnerComponent);