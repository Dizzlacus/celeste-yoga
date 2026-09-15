/** Root-relative path that respects Astro `base` (needed for GitHub Pages project URLs). */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  if (path === '/' || path === '') return prefix;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${prefix}${trimmed}`;
}
