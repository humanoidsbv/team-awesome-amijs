import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  isFormVisible: boolean;
  label?: string;
  onClick: Function;
  type?: "Primary" | "Secondary" | "Tertiary";
  icon: any;
}

function Button({ isFormVisible, label, onClick, type, icon }: ButtonProps) {
  return type === "Primary" ? (
    <Styled.Primary {...{ isFormVisible, onClick, type }}>
      {icon}
      {label}
    </Styled.Primary>
  ) : (
    <Styled.Secondary {...{ isFormVisible, onClick, type, icon }}>
      {icon}
      {label}
    </Styled.Secondary>
  );
}

export default Button;
