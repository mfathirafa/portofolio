export function Logo({ className = "size-9 text-foreground" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      role="img"
      aria-label="Muhammad Fathi Rafa"
    >
      <path d="M16 51V13H31M16 32H31" stroke="currentColor" />
      <path d="M31 13H36C47 13 47 32 36 32H31M36 32L47 51" stroke="#f2b01e" />
    </svg>
  );
}