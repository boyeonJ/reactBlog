/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../../util/type"

const Typography = ({children, className}: FoundationProps) => {
  return <span className={className}>{children}</span>
}

export default Typography;