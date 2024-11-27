export interface ToggleProps {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export interface TogglesProps {
  active: number[];
  toggle: (id: number) => void;
}

export interface AudioControls {
  play: () => void;
  reset: () => void;
}

export interface UseToggleStateProps {
  count: number;
  onThemeChange: (isDark: boolean) => void;
  audio: AudioControls;
}
