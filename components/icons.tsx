import type { SVGProps } from "react";

/** Lucide-style arrow, used for outbound / "read more" affordances. */
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
