import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/types";
import { Link } from "react-router";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden gap-0 py-0">
      <img
        src={service.image}
        alt={`${service.title} at St. Luke Upstate Health Centre`}
        className="w-full aspect-[4/3] object-cover"
      />
      <CardHeader className="px-6 pt-6 pb-2">
        <CardTitle className="text-base">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-4">
        <p className="text-gray-600 text-sm">{service.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        {/*
         * The slug is intentionally load-bearing here: services whose slugs
         * match a static route path ("laboratory", "dental") are automatically
         * routed to their dedicated pages. Keep service slugs in sync with
         * route paths in router.tsx if they ever need updating.
         */}
        <Link
          to={`/services/${service.slug}`}
          className="text-primary hover:underline text-sm font-medium"
        >
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  );
}
