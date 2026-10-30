import { Link } from "react-router";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold text-secondary mb-4">404</h1>
      <p className="text-gray-600 mb-8">Page not found.</p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
}
