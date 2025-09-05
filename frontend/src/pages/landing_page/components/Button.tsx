import React from "react";

interface ButtonProps {
  w?: string;
  h?: string;
}

const Button: React.FC<ButtonProps> = ({ w = "7em", h = "32px" }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="bg-[#1771B7] text-white p-1.5 rounded-[10px] hover:bg-[#2d2d5b] hover:scale-[1.1] hover:cursor-pointer"
        style={{ width: w, height: h }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Button;
