import { Toggle } from "../Toggle/Toggle";
import { TogglesProps } from "../../types/types";
import { StyledWrapper } from "./ToggleContainer.styles";

const ToggleContainer: React.FC<TogglesProps> = ({ active, toggle }) => {
  return (
    <StyledWrapper>
      <Toggle
        label="Dark/Light Theme"
        active={active.includes(1)}
        onClick={() => toggle(1)}
      />
      <Toggle
        label="Play Music"
        active={active.includes(2)}
        onClick={() => toggle(2)}
      />
      <Toggle
        label="Invert Effects"
        active={active.includes(3)}
        onClick={() => toggle(3)}
        disabled={active.length === 0}
      />
    </StyledWrapper>
  );
};

export default ToggleContainer;
