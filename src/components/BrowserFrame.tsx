import Image from "next/image";
import { SHOT_HEIGHT, SHOT_WIDTH } from "@/lib/content";

// Window chrome around a real app screenshot — sells "this is a desktop app"
// without faking anything. Native captures preserve their original ratio.
export default function BrowserFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-night shadow-[0_40px_90px_-35px_rgba(19,22,27,0.45)]">
      <div className="flex items-center gap-2 border-b border-night-line bg-night-2 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#5a6270]" />
        <span className="size-2.5 rounded-full bg-[#5a6270]" />
        <span className="size-2.5 rounded-full bg-[#5a6270]" />
        <span className="ml-3 font-mono text-[11px] text-[#8b93a1]">FreeYourDisk</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={SHOT_WIDTH}
        height={SHOT_HEIGHT}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 720px"
        className="h-auto w-full"
      />
    </div>
  );
}
