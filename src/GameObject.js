import React from 'react';
import { useGameContext } from './GameProvider';

export const GameObject = ({ x, y, width, height }) => {
  const { worldWidth, worldHeight } = useGameContext();

  const left = x - worldWidth / 2 - width / 2;
  const top = y - worldHeight / 2 - height / 2;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
      }}
    />
  );
};