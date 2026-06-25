// The brand mark: concentric disk/donut rings on the teal→indigo gradient,
// redrawn as crisp SVG (sharper than the raster icon at small sizes).
export default function Logo({ size = 32 }: { size?: number }) {
  const id = "fyd-logo-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      role="img"
    >
      <defs>
        <linearGradient id={id} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a8fa6" />
          <stop offset="1" stopColor="#3a30d8" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill={`url(#${id})`} />
      <circle cx="24" cy="24" r="13" stroke="#fff" strokeWidth="5" />
      <circle cx="24" cy="24" r="3.4" fill="#fff" />
    </svg>
  );
}
