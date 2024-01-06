/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../../utils/types";

const Typography = ({
  children,
  className,
}: FoundationProps) => {
  return <span className={className}>{children}</span>;
};

export default Typography;
