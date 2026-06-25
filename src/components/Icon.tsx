// SSR-safe Phosphor icons (the /ssr entry renders without the client context),
// resolved by name so content.ts can stay data-only.
import {
  ChartDonut,
  Broom,
  Package,
  Gauge,
  Heartbeat,
  ShieldCheck,
  Eye,
  ListChecks,
  Recycle,
  MapPinArea,
  GitBranch,
  Lock,
} from "@phosphor-icons/react/dist/ssr";
// Type-only import (erased at compile, so it never pulls the client runtime).
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

const MAP: Record<string, PhosphorIcon> = {
  ChartDonut,
  Broom,
  Package,
  Gauge,
  Heartbeat,
  ShieldCheck,
  Eye,
  ListChecks,
  Recycle,
  MapPinArea,
  GitBranch,
  Lock,
};

type Props = {
  name: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
};

export default function Icon({ name, size = 22, weight = "regular", className }: Props) {
  const Cmp = MAP[name] ?? ChartDonut;
  return <Cmp size={size} weight={weight} className={className} />;
}
