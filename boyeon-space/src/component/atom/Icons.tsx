/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const iconSizes = {
  large: "2rem",
  medium: "1rem",
  small: "0.5rem",
};

type Props = {
  className?: string;
  name:
    | "clear_night"
    | "clear_day"
    | "account_circle"
    | "search"
    | "menu"
    | "close"
    | "done"
    | "favorite"
    | "check";
  size?: "large" | "medium" | "small";
  style?: any;
};

const Icons = ({
  className = "material-symbols-outlined",
  name,
  size = "medium",
  style,
}: Props) => {
  return (
    <>
      <span className={className} css={{ fontSize: iconSizes[size], ...style }}>
        {name}
      </span>
    </>
  );
};

export default Icons;
