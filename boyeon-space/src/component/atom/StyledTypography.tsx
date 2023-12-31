/** @jsxImportSource @emotion/react */
import colors from "./foundation/Color";
import { ColorType, FoundationProps } from "../../util/type";
import Typography from "./foundation/Typography";

const sizeStyles = {
  h0: {
    fontSize: "40px",
    lineHeight: "28px",
    fontWeight: "300",
  },
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

type TypographyProps = {
  variant?:
    | "h0"
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
  color?: ColorType;
};

const StyledTypography = ({
  children,
  className,
  variant = "h3",
  color = "primary3",
}: FoundationProps & TypographyProps) => {
  return (
    <Typography
      css={{
        ...sizeStyles[variant],
        color: colors[color],
      }}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default StyledTypography;
