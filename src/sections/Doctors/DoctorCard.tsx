import type { Doctor } from "@/types";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface DoctorCardProps {
  doctor: Doctor;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow-sm">
      <Avatar size="lg" className="h-20 w-20">
        <AvatarImage src={doctor.image} alt={doctor.name} />
        <AvatarFallback>{getInitials(doctor.name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-secondary">{doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.role}</p>
        {doctor.bio ? (
          <p className="mt-2 text-sm text-gray-600">{doctor.bio}</p>
        ) : null}
      </div>
    </article>
  );
}
