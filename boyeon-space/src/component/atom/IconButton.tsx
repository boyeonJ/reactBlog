/** @jsxImportSource @emotion/react */
import Icon, { IconProps } from "./Icon";
import Button, { ButtonProps } from "./foundation/Button";

const iconButton = ({
  onClick,
  name,
  size = "medium",
  color = "primary3",
}: IconProps & ButtonProps) => {

  return (
    <Button
      onClick={onClick}
      css={{
        backgroundColor: "transparent",
        borderColor: "transparent",
      }}
    >
      <Icon name={name} size={size} color={color}></Icon>
    </Button>
  );
};

export default iconButton;
