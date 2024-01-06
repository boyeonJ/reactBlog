/** @jsxImportSource @emotion/react */
import { ColorType } from "../../utils/types";
import colors from "./foundation/Color";

export const iconSizes = {
  large: "2rem",
  medium: "1rem",
  small: "0.5rem",
};

export type IconProps = {
  className?: string;
  name:
    | "clear_night"
    | "clear_day"
    | "calendar_today"
    | "search"
    | "menu"
    | "close"
    | "done"
    | "favorite"
    | "check";
  size?: "large" | "medium" | "small";
  color?: ColorType;
  style?: any
};

const Icon = ({
  className = "material-symbols-outlined",
  name,
  size = "medium",
  color = "primary3",
  style
}: IconProps) => {

  return (
    <>
      <span
        className={className}
        css={{ fontSize: iconSizes[size], color: colors[color], ...style }}
      >
        {name}
      </span>
    </>
  );
};

export default Icon;
