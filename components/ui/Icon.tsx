import type { IconName } from "@/content/villa";

export type Name = IconName | "arrow" | "arrowUpRight" | "chat" | "phone" | "check" | "close" | "left" | "right" | "menu" | "plus";

const paths: Record<Name, React.ReactNode> = {
  paw: (
    <>
      <circle cx="5.5" cy="10" r="2" />
      <circle cx="9.5" cy="5.5" r="2" />
      <circle cx="14.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="10" r="2" />
      <path d="M12 12c-2.8 0-5.5 3.3-5.5 5.8 0 1.6 1.2 2.7 2.8 2.7 1 0 1.7-.5 2.7-.5s1.7.5 2.7.5c1.6 0 2.8-1.1 2.8-2.7 0-2.5-2.7-5.8-5.5-5.8z" />
    </>
  ),
  snow: <path d="M12 2v20M3.5 7l17 10M3.5 17l17-10M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5" />,
  bath: <path d="M3 12h18v2.5A5.5 5.5 0 0 1 15.5 20h-7A5.5 5.5 0 0 1 3 14.5V12zM6 12V5.5a2 2 0 0 1 3.6-1.2M7 20l-1 2M17 20l1 2" />,
  tv: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  fridge: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M6 10h12M9 5v2M9 13v3" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  wifi: (
    <>
      <path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" />
    </>
  ),
  pool: <path d="M2 19c1.7 0 1.7-1 3.3-1s1.7 1 3.4 1 1.6-1 3.3-1 1.7 1 3.3 1 1.7-1 3.4-1 1.6 1 3.3 1M8 15V5.5a2 2 0 0 1 4 0M16 15V5.5a2 2 0 0 0-4 0M8 9h8M8 13h8" />,
  table: (
    <>
      <rect x="2" y="9" width="20" height="4" rx="1" />
      <path d="M12 6v7M5 13v6M19 13v6" />
      <circle cx="17" cy="5" r="1.5" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9.5c3.3.6 6 3.6 6.6 11M20.4 9.5c-3.3.6-6 3.6-6.6 11M8.5 3.7c1.5 2.3 5.5 2.3 7 0" />
    </>
  ),
  flame: <path d="M12 2c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .5 2 1.5 3 2.5 3 0-3-1-5.5 0-8z" />,
  plate: <path d="M5 2v7a2 2 0 0 0 2 2v11M9 2v7a2 2 0 0 1-2 2M7 2v5M17 22V2c-2 1-3 4-3 8h3" />,
  car: <path d="M5 16v-5l2-5h10l2 5v5M3 11h18M5 16h14v3H5zM7.5 13.5h.01M16.5 13.5h.01" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-4 4.5-6 8-6s7 2 8 6" />
    </>
  ),
  grass: <path d="M3 20h18M6 20c0-4-1-7-3-9M10 20c0-5 1-9 3-12M14 20c0-4 2-7 5-9M18 20c0-2 .5-4 2-5" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  home: <path d="M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  chat: <path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8 19.2L4 20zM9 10.5h.01M12 10.5h.01M15 10.5h.01" />,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  check: <path d="M5 12l5 5 9-10" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export function Icon({ name, className = "size-5", strokeWidth = 1.75 }: { name: Name; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
