import { useState, useEffect } from "react";
import { UseToggleStateProps } from "../types/types";

export const useToggleState = ({
  count,
  onThemeChange,
  audio,
}: UseToggleStateProps) => {
  const [active, setActive] = useState<number[]>([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [previousActiveButtons, setPreviousActiveButtons] = useState<number[]>(
    []
  );

  useEffect(() => {
    if (active.includes(1)) {
      onThemeChange(true);
    } else {
      onThemeChange(false);
    }
  }, [active, onThemeChange]);

  useEffect(() => {
    if (active.includes(2) && !isMusicPlaying) {
      audio.play();
      setIsMusicPlaying(true);
    } else if (!active.includes(2) && isMusicPlaying) {
      audio.reset();
      setIsMusicPlaying(false);
    }
  }, [active, isMusicPlaying, audio]);

  useEffect(() => {
    if (!active.includes(3) && previousActiveButtons.length > 0) {
      setActive(previousActiveButtons);
      setPreviousActiveButtons([]);
    }
  }, [active, previousActiveButtons]);

  const handleSpecialButton3 = () => {
    const firstTwoActive = active.filter((item) => item === 1 || item === 2);

    if (firstTwoActive.length === 1) {
      const newActive = firstTwoActive[0] === 1 ? [2] : [1];
      setPreviousActiveButtons([firstTwoActive[0]]);
      setActive([...newActive, 3]);
    } else if (firstTwoActive.length === 2) {
      setPreviousActiveButtons([firstTwoActive[0], firstTwoActive[1]]);
      setActive([...active.filter((item) => item !== firstTwoActive[0]), 3]);
    }
  };

  const handleRegularToggle = (id: number) => {
    if (active.length >= count) {
      setActive([...active.slice(1), id]);
    } else {
      setActive([...active, id]);
    }
  };

  const toggle = (id: number) => {
    if (active.includes(id)) {
      setActive(active.filter((item) => item !== id));
      return;
    }
    if (id === 3) {
      handleSpecialButton3();
      return;
    }

    handleRegularToggle(id);
  };

  return { active, toggle };
};
