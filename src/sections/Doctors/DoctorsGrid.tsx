import type { Doctor } from "@/types";
import { DoctorCard } from "@/sections/Doctors/DoctorCard";

interface DoctorsGridProps {
  doctors: Doctor[];
}

export function DoctorsGrid({ doctors }: DoctorsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
