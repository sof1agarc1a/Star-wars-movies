import React from "react";

interface CloseIconProps {
  color?: string;
  size?: number;
}

const CloseIcon = ({ color = "black", size = 24 }: CloseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path fill="currentColor" d="M4 4L20 20M20 4L4 20" />
    </svg>
  );
};

export default CloseIcon;
