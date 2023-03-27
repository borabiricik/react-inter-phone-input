import React from "react";

export interface IButtonProps {
  children?: any;
}

const Button = (props: IButtonProps) => {
  return <div className="bg-red-400">Button2</div>;
};

export default Button;
