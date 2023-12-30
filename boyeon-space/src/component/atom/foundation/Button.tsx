/** @jsxImportSource @emotion/react */
import { FoundationProps } from "../../../util/type";

  
const Button = ({className, children}:FoundationProps) => {
    return <button className={className}>{children}</button>
}

export const LargeButton = ({className, children}:FoundationProps) => {
    return <Button className={className} css={{fontSize: '1.5rem'}}>{children}</Button>
}

export default Button;