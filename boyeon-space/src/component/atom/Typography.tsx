/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import colors from "./Color";

const sizeStyles = {
  h1: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "400",
  },
  h2: {
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: "400",
  },
  h3: {
    fontSize: "13px",
    lineHeight: "17px",
    fontWeight: "400",
  },
  h4: {
    fontSize: "13px",
    lineHeight: "17px",
    fontWeight: "400",
  },
  h5: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
  },
  h6: {
    fontSize: "11px",
    lineHeight: "13px",
    fontWeight: "400",
  },
  h0B: {
    fontSize: "40px",
    lineHeight: "38px",
    fontWeight: "700",
  },
  h1B: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "700",
  },
  h2B: {
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h3B: {
    fontSize: "17px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h4B: {
    fontSize: "13px",
    lineHeight: "17px",
    fontWeight: "700",
  },
  h5B: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "700",
  },
  h6B: {
    fontSize: "11px",
    lineHeight: "13px",
    fontWeight: "700",
  },
};

type Props = {
  children: ReactElement | string | number;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h0B"
    | "h1B"
    | "h2B"
    | "h3B"
    | "h4B"
    | "h5B"
    | "h6B";
  color?: "primary" | "gray1" | "gray2" | "black" | "white" | "blue1";
};

const Typography = ({
  children,
  variant = "h3",
  color = "black",
  ...props
}: Props) => {
  return (
    <span
      css={{
        ...sizeStyles[variant],
        color: colors[color],
        ...props,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
