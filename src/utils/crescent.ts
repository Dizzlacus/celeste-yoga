// The Alma crescent: an outer circle minus a smaller circle offset toward the
// upper left. The radius difference and offset are tuned so the shape tapers
// to nothing at the horns rather than reading as a uniform ring.
// Outer: centre (132,100) r 88. Inner: centre (120.7,88.7) r 80.
export const crescentPath = [
  'M44,100 a88,88 0 1,0 176,0 a88,88 0 1,0 -176,0',
  'M40.7,88.7 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0',
].join(' ');

// A chunkier moon for small sizes. The fine taper above disappears below about
// 40px and reads as a plain ring, so icon-scale uses have their own geometry.
// Outer: centre (132,100) r 88. Inner: centre (115,83) r 72.
export const crescentBoldPath = [
  'M44,100 a88,88 0 1,0 176,0 a88,88 0 1,0 -176,0',
  'M43,83 a72,72 0 1,0 144,0 a72,72 0 1,0 -144,0',
].join(' ');

// Drawn with fill-rule "evenodd" so the shape needs no <mask>, and therefore
// no per-instance ids that would collide when the motif is used more than once.
export const crescentViewBox = '40 8 180 180';
