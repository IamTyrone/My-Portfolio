// Store listings for projects that ship mobile apps, keyed by project id.
// Kept here so the project cards and the project detail page stay in sync.

export interface MobileApp {
  name: string;
  /** who the app is for, shown under the name */
  audience: string;
  ios: string;
  /** omitted while a platform has not shipped yet, which hides its button */
  android?: string;
  /** square store icon in public/img/projects, shown beside the name */
  icon?: string;
}

export const projectApps: Record<string, MobileApp[]> = {
  // Safi Help
  "2": [
    {
      name: "Safi Help",
      audience: "For people looking for cleaners",
      ios: "https://apps.apple.com/gb/app/safi-help/id6723892173",
      android:
        "https://play.google.com/store/apps/details?id=com.mviyo.safi&hl=en",
    },
    {
      name: "Safi Help Pro",
      audience: "For cleaners looking for work",
      ios: "https://apps.apple.com/gb/app/safi-help-pro/id6736468352",
      android:
        "https://play.google.com/store/apps/details?id=com.mviyo.safizensios&hl=en",
    },
  ],
  // ZimTickets
  "3": [
    {
      name: "Zim Tickets",
      audience: "Browse events, buy tickets, hold them at the gate",
      ios: "https://apps.apple.com/gb/app/zim-tickets/id6680194477",
      android:
        "https://play.google.com/store/apps/details?id=com.mviyotechnologies.zimtickets&hl=en",
      icon: "/img/projects/zimtickets/app-icon.webp",
    },
  ],
  // The ZFA ERP
  "7": [
    {
      name: "Zhou Forex Academy",
      audience: "Live trade calls, the room under each one, and the wallet",
      ios: "https://apps.apple.com/us/app/zhou-forex-academy/id6804734979",
      icon: "/img/projects/zfa/app-icon.webp",
    },
  ],
};

export function getProjectApps(id: string): MobileApp[] {
  return projectApps[id] ?? [];
}

export function hasProjectApps(id: string): boolean {
  return getProjectApps(id).length > 0;
}

/** Which stores a project has listings on, so a card shows only real badges. */
export function getProjectPlatforms(id: string): {
  ios: boolean;
  android: boolean;
} {
  const apps = getProjectApps(id);
  return {
    ios: apps.some((app) => Boolean(app.ios)),
    android: apps.some((app) => Boolean(app.android)),
  };
}
