import { ToggleProps } from "../../types/types";
import { ToggleButton } from "./Toggle.styles";

export const Toggle: React.FC<ToggleProps> = ({
  label,
  active,
  onClick,
  disabled,
}) => (
  <ToggleButton $active={active} onClick={onClick} disabled={disabled}>
    {label}
  </ToggleButton>
);
