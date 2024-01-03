/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../util/type";

const FixedBox = ({
  children,
  className
}: FoundationProps) => {
  return (
    <div
      className={className}
      css={{
        position: "fixed",
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default FixedBox;
