import React from "react";

type Props = {
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
};

function ClickButton({ color = "green", onClick, children }: Props) {
  return (
    <button
      className={`basis-1/3 flex justify-center text-white bg-${color}-700 hover:bg-${color}-800
        focus:outline-none active:bg-${color}-900 font-medium rounded-lg text-sm w-full
        sm:w-auto px-5 py-2.5 text-center rounded-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ClickButton;
