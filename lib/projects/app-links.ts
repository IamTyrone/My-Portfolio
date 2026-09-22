// Store listings for projects that ship mobile apps, keyed by project id.
// Kept here so the project cards and the project detail page stay in sync.

export interface MobileApp {
  name: string;
  /** who the app is for, shown under the name */
  audience: string;
  ios: string;
  android: string;
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
};

export function getProjectApps(id: string): MobileApp[] {
  return projectApps[id] ?? [];
}

export function hasProjectApps(id: string): boolean {
  return getProjectApps(id).length > 0;
}
