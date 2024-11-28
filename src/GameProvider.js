import { createContext, useContext } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({
  worldWidth,
  worldHeight,
  viewportWidth,
  viewportHeight,
  children
}) => {
  return (
    <GameContext.Provider value={{
      worldWidth,
      worldHeight,
      viewportWidth,
      viewportHeight
    }}>
      {children}
    </GameContext.Provider>
  );
};