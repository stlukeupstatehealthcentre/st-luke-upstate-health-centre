import { Layout } from "@/components/shared/Layout";
import { AboutPage } from "@/pages/AboutPage";
import { AppointmentPage } from "@/pages/AppointmentPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { DentalPage } from "@/pages/services/DentalPage";
import { LaboratoryPage } from "@/pages/services/LaboratoryPage";
import { ServiceDetailPage } from "@/pages/services/ServiceDetailPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "appointment", element: <AppointmentPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/laboratory", element: <LaboratoryPage /> },
      { path: "services/dental", element: <DentalPage /> },
      { path: "services/:slug", element: <ServiceDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
