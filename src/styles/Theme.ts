const color = {
  primary: '#892DE6',
  primary500: '#A356F0',
  white: '#fff',
  red: '#ff5b5b',
  black: '#2b2b2b',
  gray800: '#5c5b5b',
  gray700: '#7d7d7d',
  gray300: '#c4c0c0',
  gray250: '#c9c9c9',
  gray200: '#dbd9d9',
  gray100: '#f3f5f7',
  gray50: '#f9f9f9',
} as const;

const presetColors = [
  'blue',
  'purple',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  '#1d39c4',
  '#aa775a',
  '#219d7b',
] as const;

const piePreset = [
  '#eb595a',
  '#4b9bf8',
  '#32c75b',
  '#ffdC5e',
  '#eaeaea',
] as const;

const zIndex = {
  header: 1,
  backdrop: 1,
  modal: 2,
  toast: 4,
} as const;

export const Theme = { color, presetColors, piePreset, zIndex };
