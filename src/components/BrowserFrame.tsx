import Image from "next/image";

// Window chrome around a real app screenshot — sells "this is a desktop app"
// without faking anything.
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
    <div className="card edge-top overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-[var(--color-elevated)] px-4 py-2.5">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-[var(--color-faint)]">FreeYourDisk</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={760}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 720px"
        className="h-auto w-full"
      />
    </div>
  );
}
