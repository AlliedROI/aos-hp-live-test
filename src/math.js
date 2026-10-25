export function add(a, b) {
  return a + b;
}

export function square(n) {
  return n * n;
}

export function clamp(n, lo, hi) {
  return Math.min(Math.max(n, lo), hi);
}
