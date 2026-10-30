import type { LucideIcon } from "lucide-react";
import {
  Ambulance,
  Baby,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Plus,
  ScanLine,
  ShieldCheck,
  Smile,
  Star,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Baby,
  Users,
  Syringe,
  FlaskConical,
  Ambulance,
  MapPin,
  HeartPulse,
  HeartHandshake,
  ScanLine,
  Smile,
  ShieldCheck,
  Plus,
  Clock,
  Phone,
  Mail,
  MapPinned,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Stethoscope;
  return <Cmp className={className} aria-hidden="true" />;
}
