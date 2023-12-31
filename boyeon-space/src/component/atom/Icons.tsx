/** @jsxImportSource @emotion/react */
import { ColorType } from "../../util/type";
import colors from "./foundation/Color";

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
    | "calendar_today"
    | "search"
    | "menu"
    | "close"
    | "done"
    | "favorite"
    | "check";
  size?: "large" | "medium" | "small";
  style?: any;
  color?: ColorType;
};

const Icons = ({
  className = "material-symbols-outlined",
  name,
  size = "medium",
  color = "primary3",
  style
}: Props) => {

  console.log(color);
  
  return (
    <>
      <span
        className={className}
        css={{ fontSize: iconSizes[size], color: colors[color], ...style}}
      >
        {name}
      </span>
    </>
  );
};

export default Icons;
