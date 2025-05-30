import type { MutableRefObject } from 'react';
export default function useAnimationPosition(
  visible: boolean | undefined,
  originRef: MutableRefObject<HTMLElement | null> | undefined,
  loaded: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  speed: number,
  updateEasing: (pause: boolean) => void,
): readonly [
  number,
  number,
  number,
  number,
  number,
  0 | 1,
  import('../types').EasingMode,
  'contain' | 'cover' | 'fill' | undefined,
];
