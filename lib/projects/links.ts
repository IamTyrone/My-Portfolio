// Kept apart from projects.ts so client components can import it without
// pulling every project's data into the bundle.

/** Private repos and unlaunched demos are stored as "#", which must not render as a link. */
export function hasLink(url: string | undefined): url is string {
  return Boolean(url) && url !== "#";
}
