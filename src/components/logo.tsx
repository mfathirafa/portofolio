export function Logo({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="MFR">
      <rect width="64" height="64" rx="14" fill="#171717" />
      <text
        x="32"
        y="36"
        textAnchor="middle"
        fontSize="24"
        fontWeight="700"
        fill="#ffffff"
        style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", letterSpacing: "-0.04em" }}
      >
        MFR
      </text>
      <rect x="18" y="43" width="28" height="4" rx="2" fill="#5a74ff" />
    </svg>
  );
}