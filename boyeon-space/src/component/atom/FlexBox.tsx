/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../util/type";

type FlexBoxProps = {
  //row - justify(justify-content): 가로, align(align-items): 세로
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "sapce-around"
    | "space-evenly";
  align?: "center" | "flex-start" | "flex-end" | "stretch";
  width?: string;
};

const FlexBox = ({
  children,
  className,
  direction = "column",
  justify = "flex-start",
  align = "flex-start",
  width,
}: FlexBoxProps & FoundationProps) => {
  return (
    <div
      className={className}
      css={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
