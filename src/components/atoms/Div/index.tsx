import React, { ReactNode } from "react";
import styled from "styled-components";

// Definição das props que o componente vai receber
interface StyledProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  backgroundGradient?: string;
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  padding?: string | number;
  gap?: string | number;
  radius?: string | number;
  borderWidth?: string | number;
  borderColor?: string;
  zIndex?: number;
  children?: ReactNode;
  position?: string;
  overflow?: string;
}

// Componente estilizado para uma div
const StyledDiv = styled.div<StyledProps>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height)};
  background: ${(props) => props.backgroundGradient || props.backgroundColor}; // Seleciona o gradiente ou cor sólida

  display: flex;
  flex-direction: ${(props) => (props.direction !== undefined ? props.direction : "column")};
  justify-content: ${(props) => (props.justify !== undefined ? props.justify : "center")};
  align-items: ${(props) => (props.align !== undefined ? props.align : "center")};
  flex-wrap: ${(props) => (props.wrap !== undefined ? props.wrap : "nowrap")};

  padding: ${(props) => (typeof props.padding === "number" ? `${props.padding}px` : props.padding)};
  gap: ${(props) => (typeof props.gap === "number" ? `${props.gap}px` : props.gap)};

  border-radius: ${(props) =>
    typeof props.radius === "number" ? `${props.radius}px` : props.radius || "0px"};
  border-width: ${(props) =>
    typeof props.borderWidth === "number" ? `${props.borderWidth}px` : props.borderWidth || "0px"};
  border-color: ${(props) => props.borderColor || "transparent"};

  z-index: ${(props) => (props.zIndex !== undefined ? props.zIndex : 0)};
`;

const Div: React.FC<StyledProps> = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Div;
