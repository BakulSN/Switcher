import { useState } from "react";
import { useToggleState } from "./hooks/useToggleState";
import { useAudio } from "./hooks/useAudio";
import ToggleContainer from "./components/ToggleContainer/ToggleContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./styles/Global.styles";
import audioFile from "./assets/audio/audio.mp3";

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  const { play, reset } = useAudio(audioFile);
  const { active, toggle } = useToggleState({
    count: 2,
    onThemeChange: (isDark: boolean) =>
      setTheme(isDark ? darkTheme : lightTheme),
    audio: { play, reset },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleContainer active={active} toggle={toggle} />
    </ThemeProvider>
  );
};

export default App;
