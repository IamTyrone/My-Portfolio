// Store listings for projects that ship mobile apps, keyed by project id.
// Kept here so the project cards and the project detail page stay in sync.

export interface MobileApp {
  name: string;
  /** who the app is for, shown under the name */
  audience: string;
  ios: string;
  android: string;
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
};

export function getProjectApps(id: string): MobileApp[] {
  return projectApps[id] ?? [];
}

export function hasProjectApps(id: string): boolean {
  return getProjectApps(id).length > 0;
}
