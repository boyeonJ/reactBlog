/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../../util/type";

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Button = ({ className, children, onClick }: FoundationProps & ButtonProps) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};

export const LargeButton = ({ className, children, onClick }: FoundationProps & ButtonProps) => {
  return (
    <Button className={className} css={{ fontSize: "1.5rem" }}>
      {children}
    </Button>
  );
};

export default Button;
