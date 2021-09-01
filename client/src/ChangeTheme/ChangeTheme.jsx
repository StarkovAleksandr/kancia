import React from 'react';

const lightTheme = {
  '--color-1': 'rgb(229, 235, 240)',
  '--color-2': 'rgb(0, 0, 0)',
  '--color-3': 'rgb(255, 255, 255)',
  '--color-4': 'rgba(85, 85, 85, 0.5)',
  '--color-5': 'rgb(229, 235, 240)',
};

const darkTheme = {
  '--color-1': 'rgb(34, 42, 49)',
  '--color-2': 'rgb(255, 255, 255)',
  '--color-3': 'rgb(0, 0, 0)',
  '--color-4': 'rgba(0, 0, 0, 0.5)',
  '--color-5': 'rgb(110, 117, 129)',
};

export const Theme = () => {
  const [isLight, setLight] = React.useState(false);

  const syncTheme = React.useCallback((light) => {
    if (!light) {
      changeTheme(darkTheme);
    } else {
      changeTheme(lightTheme);
    }
  }, []);

  React.useEffect(() => {
    syncTheme(isLight);
  }, [isLight]);

  const changeTheme = React.useCallback((theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  const handleClickButton = React.useCallback(() => {
    syncTheme(!isLight);
    setLight(!isLight);
  }, [isLight]);

  return (
    <button onClick={handleClickButton}>
      {isLight ? 'Dark theme' : 'Light theme'}
    </button>
  );
};
