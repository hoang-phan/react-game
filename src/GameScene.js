import React from 'react';
import { useGameContext } from './GameProvider';

export const GameScene = ({ children }) => {
  const { viewportWidth, viewportHeight } = useGameContext();

  return (
    <div
      style={{
        position: 'relative',
        width: viewportWidth,
        height: viewportHeight,
      }}
    >
      {children}
    </div>
  );
};