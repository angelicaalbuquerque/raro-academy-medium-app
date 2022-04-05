import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: any;
};

export const DangerButton: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={false}
      onClick={onClick}
      className={`
        w-full mt-6 tracking-widest
        border-b-red-600 bg-red-500 py-3 text-white font-bold
        hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
      `}
    >
      {children}
    </button>
  );
};
