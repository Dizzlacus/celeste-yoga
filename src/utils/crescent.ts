// Background motif: an outer circle minus a smaller circle offset toward the
// upper left. The radius difference keeps the inner circle inside the outer
// one, so evenodd reads as a ring that tapers at the horns — a large circular
// moon for panel backgrounds.
// Outer: centre (132,100) r 88. Inner: centre (120.7,88.7) r 80.
export const crescentPath = [
  'M44,100 a88,88 0 1,0 176,0 a88,88 0 1,0 -176,0',
  'M40.7,88.7 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0',
].join(' ');

export const crescentViewBox = '40 8 180 180';

// Heading mark: the wordmark sliver, drawn as two arcs between the horns so
// the opening stays empty (full evenodd circles would leave a second sliver
// in the upper left).
export const crescentBoldPath =
  'M137.73,-0.12 A100,100 0 1,1 -0.20,142.89 A99.38,99.38 0 0,0 137.73,-0.12 Z';

export const crescentBoldViewBox = '-4 -4 185 187';
