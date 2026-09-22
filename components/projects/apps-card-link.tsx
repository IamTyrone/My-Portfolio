import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { getProjectPlatforms } from "@/lib/projects/app-links";

/** Compact card footer link pointing at the detail page's app section. */
export function AppsCardLink({ projectId }: { projectId: string }) {
  const { ios, android } = getProjectPlatforms(projectId);

  return (
    <Link
      href={`/projects/${projectId}#apps`}
      className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-hack-cyan transition-colors"
    >
      {ios && <FaApple size={11} />}
      {android && <FaGooglePlay size={10} />}
      <span>apps</span>
    </Link>
  );
}
