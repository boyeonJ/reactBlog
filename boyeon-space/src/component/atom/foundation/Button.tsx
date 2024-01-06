/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../../utils/types";

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Button = ({ className, children, onClick }: FoundationProps & ButtonProps) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};

export default Button;
