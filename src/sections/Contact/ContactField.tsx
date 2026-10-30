import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";

interface ContactFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function ContactField({
  label,
  htmlFor,
  error,
  required,
  children,
}: ContactFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="ml-0.5 text-destructive" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 text-muted-foreground text-xs font-normal">
            (optional)
          </span>
        )}
      </Label>
      {children}
      {error ? (
        <p
          role="alert"
          aria-live="assertive"
          className="text-destructive text-sm mt-1"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
